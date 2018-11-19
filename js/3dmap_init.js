d3.csv("/data/all-2016.csv").then(function(data) {
  window.csvData_2016 = data;
});

mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1bnciLCJhIjoiY2pvbmJwNmdkMDRpNjNycXl2dHhnMTdxNCJ9.Of_HdcCD_P9YC32HaROiSg';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-74.0066, 40.7135],//[-96.78188889, 32.77831667],
    zoom: 4,//15.5,
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

    // Add data layer
    map.addLayer({
        'id': 'accidents',
        'type': 'circle',
        'source': {
            type: 'vector',
            url: 'mapbox://chunw.06p1kjkd' // map ID for the tileset (data source file) as shown in https://www.mapbox.com/studio/tilesets/
        },
        'source-layer': 'all-2016-tileset-03iswl',
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
        <strong>Case Number</strong>: ${properties.consecutive_number}`;
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
        template += `<strong>${k}</strong>: ${case_details[k]}<br>`;
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
