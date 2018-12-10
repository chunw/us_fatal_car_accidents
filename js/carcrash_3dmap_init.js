const FEATURES = ['day_of_week', 'hour_of_crash', 'light_condition_name', 'first_harmful_event_name', 'atmospheric_conditions_2_name', 'non_cdl_license_type', 'restraint_system_helmet_use_name', 'critical_event_precrash_name', 'model_code', 'make_name', 'driver_maneuvered_to_avoid_name'];

// Fetch all case details
d3.csv("/data/carcrash/all-2016.csv").then(function(data) {
  window.csvData_2016 = data;
  window.total_accident_count_2016 = data.length;
  $("#total_count").html(window.total_accident_count_2016);
});

// Init Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1bnciLCJhIjoiY2pvbmJwNmdkMDRpNjNycXl2dHhnMTdxNCJ9.Of_HdcCD_P9YC32HaROiSg';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9', // 'satellite-v9' for satellite, 'light-v9' for better data distribution visibility
    center: [-122.13866944, 37.44341389], //central USA [-74.0066, 40.7135],
    zoom: 9,//15.5,
    pitch: 45, // https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch. Default pitch, in degrees. Zero is perpendicular to the surface, for a look straight down at the map, while a greater value like 60 looks ahead towards the horizon.
    bearing: -17.6,
    container: 'map'
});

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    // Add 3D buildings layer
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);

    // Add data layer.
    // Data are uploaded to https://www.mapbox.com/studio/tilesets/.
    map.addLayer({
        'id': 'accidents',
        'type': 'circle',
        'source': {
            type: 'vector',
            url: 'mapbox://chunw.3n6xswru' // map ID for the tileset (data source file) as shown in https://www.mapbox.com/studio/tilesets/
        },
        'source-layer': 'all-2016-tileset-b6934n',
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 1.75,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'consecutive_number'],
                '1', '#fbb03b',
                '2', '#223b53',
                '3', '#e55e5e',
                '4', '#3bb2d0',
                /* other */ '#e55e5e'//'#ccc'
            ]
        }
    });

    // Add a tooltip for the data point clicked.
    map.on('click', 'accidents', function (e) {
       const properties = e.features[0].properties;
       var coordinates = [properties.longitude, properties.latitude];
       const description = `
        <strong>Case number</strong>: ${properties.consecutive_number}<br>
        <strong>Number of fatalities</strong>: 1<br>
        <strong>Day of week</strong>: ${properties.day_of_week}<br>
        <strong>Hour of crash</strong>: ${properties.hour_of_crash}<br>
        <strong>Atmospheric condition</strong>: ${properties.atmospheric_conditions_2_name}<br>
        <strong>Light condition</strong>: ${properties.light_condition_name}<br>
        <strong>Critical precrash event</strong>: ${properties.critical_event_precrash_name}<br>
        <strong>First harmful event</strong>: ${properties.first_harmful_event_name}<br>
        <strong>Driver maneuver to avoid crash</strong>: ${properties.driver_maneuvered_to_avoid_name}<br>
        <strong>Restraint system usage </strong>: ${properties.restraint_system_helmet_use_name}<br>
        <strong>Make</strong>: ${properties.make_name}<br>
        <strong>Model</strong>: ${properties.model_code}<br>
        <strong>Driver license type </strong>: ${properties.non_cdl_license_type}
        `;
       // Ensure that if the map is zoomed out such that multiple
       // copies of the feature are visible, the popup appears
       // over the copy being pointed to.
       while (Math.abs(e.longitude - coordinates[0]) > 180) {
           coordinates[0] += e.longitude > coordinates[0] ? 360 : -360;
       }
       new mapboxgl.Popup()
           .setLngLat(coordinates)
           .setHTML(description)
           .addTo(map);

      // Show case details on the right
      const case_details = window.csvData_2016.filter(d => d.consecutive_number == properties.consecutive_number)[0];
      const container = $("#case-details-body");
      template = ``;
      Object.keys(case_details).forEach(k => {
        template += `<strong class="cap-first-letter feature" data="${k}">${normalizeFeatureName(k)}</strong>: <span class="value" data="${case_details[k]}">${case_details[k]}</span>`;
        if (FEATURES.indexOf(k) > -1) {
          // feature filterable
          template += `<i onclick="filterBy(this)" class="filter-icon tiny material-icons">find_in_page</i>`;
        }
        template += `<br>`;
      });
      container.html(template);
   });

   // Change the cursor to a pointer when the mouse is over the places layer.
   map.on('mouseenter', 'places', function () {
       map.getCanvas().style.cursor = 'pointer';
   });

   // Change it back to a pointer when it leaves.
   map.on('mouseleave', 'places', function () {
       map.getCanvas().style.cursor = '';
   });

   // Add search box so user can search for specific address on map
   map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
   }));
});

// Set up filters
// Filtering with Mapbox reference:
// https://www.mapbox.com/mapbox-gl-js/example/filter-features-within-map-view/
$(document).ready(function(){
  /* $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
  $( ".weekday" ).change(function(e) {
    const day = e.target.id.split("weekday-")[1];
    const selected = e.target.checked;

    let accidents = map.queryRenderedFeatures({layers:['accidents']});

    // Filter visible accidents that don't match the input value.
    var filtered = accidents.filter(function(feature) {
        var name = normalize(feature.properties.name);
        var code = normalize(feature.properties.abbrev);
        return name.indexOf(value) > -1 || code.indexOf(value) > -1;
    });

    // Set the filter to populate features into the layer.
    map.setFilter('accidents', ['match', ['get', 'abbrev'],
    filtered.map(function(feature) {
        return feature.properties.abbrev;
    }), true, false]);
  });*/
});

function filterBy(e) {
  const feature_name = $(e).prev().prev().attr("data");
  let feature_value = $(e).prev().attr("data");
  if (!isNaN(feature_value)) { // need to convert numeric values to numeric types so they match the raw data types
    feature_value = Number(feature_value);
  }
  map.setFilter('accidents', null); // reset prev filters first
  map.setFilter('accidents', ['==', feature_name, feature_value]);
  updateActiveFiltersDisplay();
}

function onResetFilters() {
  map.setFilter('accidents', null); // reset all filters
  updateActiveFiltersDisplay();
}

function normalizeFeatureName(x) {
  return x.split("_").join(" ");
}

function updateActiveFiltersDisplay() {
  const container = $("#active-filters");
  let tag = ``;
  const filters = map.getFilter("accidents");   // e.g.["==", "hour_of_crash", 14]
  let feature_name, feature_value, feature_relation, filteredDataLength, percent;
  if (filters) {
    feature_name = filters[1];
    feature_value = filters[2];
    feature_relation = filters[0];
    tag = `<span class="cap-first-letter">${normalizeFeatureName(feature_name)}</span> ${feature_relation} ${feature_value}`;
    filteredDataLength = window.csvData_2016.filter(d => {
      return d[feature_name] == feature_value;
    }).length;
    percent = (filteredDataLength/window.total_accident_count_2016*100).toFixed(2);
  }
  var html = tag? `
  <div class="chip filter-chip">
    ${tag} <span class="filter-chip-stats"> (${filteredDataLength}/${window.total_accident_count_2016}, <span class="filter-chip-percent">${percent}%</span>)</span>
  </div> ` : `<div>None</div>`
  container.html(html);
}
