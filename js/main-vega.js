const fatalityRateByCounty = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "data/vega/us-10m.json",
    "format": {
      "type": "topojson",
      "feature": "counties"
    }
  },
  "transform": [{
    "lookup": "id",
    "from": {
      "data": {
        "url": "data/county/county_fatality_data_viz.csv"
      },
      "key": "County code",
      "fields": [
        "County",
        "Census area",
        "County population",
        "Fatalities",
        'Fatalities per 100,000 Population',
        "Fatality rate (%)"]
    }
  }],
  "projection": {
    "type": "albersUsa"
  },
  "mark": "geoshape",
  "encoding": {
    "color": {
      "field": "Fatality rate (%)",
      "type": "quantitative"
    },
    "tooltip": [
      {"type": "nominal", "field": "County"},
      {"type": "nominal", "field": "Census area"},
      {"type": "nominal", "field": "County population"},
      {"type": "quantitative", "field": "Fatalities"},
      {"type": "quantitative", "field": "Fatality rate (%)"},
      {"type": "quantitative", "field": "Fatalities per 100,000 Population"},
    ]
  }
};

const vehicleModelYear = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-635ccbfd07d2faa8efc1d701713d9d60"},
  "mark": "point",
  "encoding": {
    "tooltip": [
      {"type": "quantitative", "field": "vehicle_model_year"},
      {"type": "quantitative", "field": "avg_fatal_percent"},
      {"type": "quantitative", "field": "accident_count"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "Vehicle model year"},
      "field": "vehicle_model_year",
      "scale": {"domain": [1960, 2020]}
    },
    "y": {
      "type": "quantitative",
      "axis": {"title": "Average fatal percent (%) for the vehicle model year"},
      "field": "avg_fatal_percent"
    }
  },
  "width": 500,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-635ccbfd07d2faa8efc1d701713d9d60": [
      {
        "vehicle_model_year": 2017,
        "accident_count": 203,
        "avg_fatal_percent": 19.5156
      },
      {
        "vehicle_model_year": 2016,
        "accident_count": 2091,
        "avg_fatal_percent": 32.6704
      },
      {
        "vehicle_model_year": 2015,
        "accident_count": 2799,
        "avg_fatal_percent": 36.8845
      },
      {
        "vehicle_model_year": 2014,
        "accident_count": 2409,
        "avg_fatal_percent": 36.2605
      },
      {
        "vehicle_model_year": 2013,
        "accident_count": 2337,
        "avg_fatal_percent": 37.9783
      },
      {
        "vehicle_model_year": 2012,
        "accident_count": 2138,
        "avg_fatal_percent": 37.0637
      },
      {
        "vehicle_model_year": 2011,
        "accident_count": 1844,
        "avg_fatal_percent": 38.0149
      },
      {
        "vehicle_model_year": 2010,
        "accident_count": 1755,
        "avg_fatal_percent": 39.8743
      },
      {
        "vehicle_model_year": 2009,
        "accident_count": 1624,
        "avg_fatal_percent": 44.9412
      },
      {
        "vehicle_model_year": 2008,
        "accident_count": 2460,
        "avg_fatal_percent": 46.0691
      },
      {
        "vehicle_model_year": 2007,
        "accident_count": 2996,
        "avg_fatal_percent": 45.7874
      },
      {
        "vehicle_model_year": 2006,
        "accident_count": 3052,
        "avg_fatal_percent": 46.9171
      },
      {
        "vehicle_model_year": 2005,
        "accident_count": 3039,
        "avg_fatal_percent": 48.5842
      },
      {
        "vehicle_model_year": 2004,
        "accident_count": 2917,
        "avg_fatal_percent": 49.2494
      },
      {
        "vehicle_model_year": 2003,
        "accident_count": 2762,
        "avg_fatal_percent": 50.0807
      },
      {
        "vehicle_model_year": 2002,
        "accident_count": 2587,
        "avg_fatal_percent": 51.2637
      },
      {
        "vehicle_model_year": 2001,
        "accident_count": 2337,
        "avg_fatal_percent": 51.8266
      },
      {
        "vehicle_model_year": 2000,
        "accident_count": 2222,
        "avg_fatal_percent": 50.849
      },
      {
        "vehicle_model_year": 1999,
        "accident_count": 1681,
        "avg_fatal_percent": 53.5328
      },
      {
        "vehicle_model_year": 1998,
        "accident_count": 1465,
        "avg_fatal_percent": 54.8345
      },
      {
        "vehicle_model_year": 1997,
        "accident_count": 1143,
        "avg_fatal_percent": 52.9941
      },
      {
        "vehicle_model_year": 1996,
        "accident_count": 815,
        "avg_fatal_percent": 53.8694
      },
      {
        "vehicle_model_year": 1995,
        "accident_count": 763,
        "avg_fatal_percent": 53.8437
      },
      {
        "vehicle_model_year": 1994,
        "accident_count": 631,
        "avg_fatal_percent": 58.9613
      },
      {
        "vehicle_model_year": 1993,
        "accident_count": 459,
        "avg_fatal_percent": 60.3868
      },
      {
        "vehicle_model_year": 1992,
        "accident_count": 321,
        "avg_fatal_percent": 64.7917
      },
      {
        "vehicle_model_year": 1991,
        "accident_count": 247,
        "avg_fatal_percent": 61.6025
      },
      {
        "vehicle_model_year": 1990,
        "accident_count": 204,
        "avg_fatal_percent": 55.9852
      },
      {
        "vehicle_model_year": 1989,
        "accident_count": 168,
        "avg_fatal_percent": 58.879
      },
      {
        "vehicle_model_year": 1988,
        "accident_count": 141,
        "avg_fatal_percent": 59.4563
      },
      {
        "vehicle_model_year": 1987,
        "accident_count": 95,
        "avg_fatal_percent": 65.4682
      },
      {
        "vehicle_model_year": 1986,
        "accident_count": 106,
        "avg_fatal_percent": 65.0481
      },
      {
        "vehicle_model_year": 1985,
        "accident_count": 78,
        "avg_fatal_percent": 66.9872
      },
      {
        "vehicle_model_year": 1984,
        "accident_count": 62,
        "avg_fatal_percent": 68.3333
      },
      {
        "vehicle_model_year": 1983,
        "accident_count": 43,
        "avg_fatal_percent": 79.3651
      },
      {
        "vehicle_model_year": 1982,
        "accident_count": 34,
        "avg_fatal_percent": 63.6364
      },
      {
        "vehicle_model_year": 1981,
        "accident_count": 27,
        "avg_fatal_percent": 72.2222
      },
      {
        "vehicle_model_year": 1980,
        "accident_count": 21,
        "avg_fatal_percent": 82.5397
      },
      {
        "vehicle_model_year": 1979,
        "accident_count": 25,
        "avg_fatal_percent": 72.3529
      },
      {
        "vehicle_model_year": 1978,
        "accident_count": 21,
        "avg_fatal_percent": 61.9048
      },
      {
        "vehicle_model_year": 1977,
        "accident_count": 13,
        "avg_fatal_percent": 62.2378
      },
      {
        "vehicle_model_year": 1976,
        "accident_count": 19,
        "avg_fatal_percent": 74.537
      },
      {
        "vehicle_model_year": 1975,
        "accident_count": 16,
        "avg_fatal_percent": 46.6667
      },
      {
        "vehicle_model_year": 1974,
        "accident_count": 19,
        "avg_fatal_percent": 65.7895
      },
      {
        "vehicle_model_year": 1973,
        "accident_count": 12,
        "avg_fatal_percent": 48.6111
      },
      {
        "vehicle_model_year": 1972,
        "accident_count": 7,
        "avg_fatal_percent": 71.4286
      },
      {
        "vehicle_model_year": 1971,
        "accident_count": 6,
        "avg_fatal_percent": 58.3333
      },
      {
        "vehicle_model_year": 1970,
        "accident_count": 14,
        "avg_fatal_percent": 82.1429
      },
      {
        "vehicle_model_year": 1969,
        "accident_count": 9,
        "avg_fatal_percent": 83.3333
      },
      {
        "vehicle_model_year": 1968,
        "accident_count": 13,
        "avg_fatal_percent": 57.6923
      },
      {
        "vehicle_model_year": 1967,
        "accident_count": 13,
        "avg_fatal_percent": 84.6154
      },
      {
        "vehicle_model_year": 1965,
        "accident_count": 6,
        "avg_fatal_percent": 91.6667
      },
      {"vehicle_model_year": 1964, "accident_count": 6, "avg_fatal_percent": 75}
    ]
  }
}
vegaEmbed("#fatalityRateByCounty", fatalityRateByCounty);

vegaEmbed("#vehicleModelYear", vehicleModelYear);
