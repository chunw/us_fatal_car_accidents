const DEFAULT_GRAPH_WIDTH = 500;
const DEFAULT_GRAPH_WIDTH_SMALL = DEFAULT_GRAPH_WIDTH - 200;
const alcohol = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-8406a5ea26bc0ec7d871fd1d914ff5ca"},
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "injury_severity_name",
      "legend": {"title": "Injury severity"},
      "scale": {
        "range": [
          "#a50026",
          "#d73027",
          "#fdae61",
          "#ffffbf",
          "#ffffbf",
          "#4575b4"
        ]
      },
      "sort": [
        "Fatal Injury (K)",
        "Suspected Serious Injury (A)",
        "Suspected Minor Injury (B)",
        "Possible Injury (C)",
        "Injured, Severity Unknown (U) (Since 1978)",
        "No Apparent Injury (O)"
      ]
    },
    "order": {"type": "nominal", "field": "order"},
    "tooltip": [
      {"type": "nominal", "field": "police_reported_alcohol_involvement"},
      {"type": "nominal", "field": "injury_severity_name"},
      {"type": "quantitative", "aggregate": "sum", "field": "count"}
    ],
    "x": {
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {"title": "Ratio in all types of injuries"},
      "field": "count",
      "stack": "normalize"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": ""},
      "field": "police_reported_alcohol_involvement"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.injury_severity_name === 'Fatal Injury (K)', 0,            if(datum.injury_severity_name === 'Suspected Serious Injury (A)', 1,            if(datum.injury_severity_name === 'Suspected Minor Injury (B)', 2,            if(datum.injury_severity_name === 'Possible Injury (C)', 3,            if(datum.injury_severity_name === 'Injured, Severity Unknown (U) (Since 1978)', 4,            if(datum.injury_severity_name === 'No Apparent Injury (O)', 5, 6))))))",
      "as": "order"
    }
  ],
  "width": DEFAULT_GRAPH_WIDTH_SMALL,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-8406a5ea26bc0ec7d871fd1d914ff5ca": [
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 10823
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 10514
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4457
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3460
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2897
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2578
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 2107
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1074
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 778
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 697
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 679
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 656
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 638
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 551
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 386
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 383
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 343
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 312
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 169
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 97
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 91
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 84
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 80
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 76
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 55
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 50
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 44
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 33
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Possible Injury (C)",
        "count": 33
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 24
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 18
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 18
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 16
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 15
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 12
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 11
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 10
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 9
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 9
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 8
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 7
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 6
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 6
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 5
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 5
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 4
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 4
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Possible Injury (C)",
        "count": 3
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Possible Injury (C)",
        "count": 3
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 3
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 2
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 2
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 2
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 2
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Other Cyclist",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Other Cyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "police_reported_alcohol_involvement": "Yes (Alcohol Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "police_reported_alcohol_involvement": "No (Alcohol Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      }
    ]
  }
};
const drug = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-3520e7d4a51bc513a1f7602af818b1f0"},
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "injury_severity_name",
      "legend": {"title": "Injury severity"},
      "scale": {
        "range": [
          "#a50026",
          "#d73027",
          "#fdae61",
          "#ffffbf",
          "#ffffbf",
          "#4575b4"
        ]
      },
      "sort": [
        "Fatal Injury (K)",
        "Suspected Serious Injury (A)",
        "Suspected Minor Injury (B)",
        "Possible Injury (C)",
        "Injured, Severity Unknown (U) (Since 1978)",
        "No Apparent Injury (O)"
      ]
    },
    "order": {"type": "nominal", "field": "order"},
    "tooltip": [
      {"type": "nominal", "field": "police_reported_drug_involvement"},
      {"type": "nominal", "field": "injury_severity_name"},
      {"type": "quantitative", "aggregate": "sum", "field": "count"}
    ],
    "x": {
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {"title": "Ratio in all types of injuries"},
      "field": "count",
      "stack": "normalize"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": ""},
      "field": "police_reported_drug_involvement"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.injury_severity_name === 'Fatal Injury (K)', 0,            if(datum.injury_severity_name === 'Suspected Serious Injury (A)', 1,            if(datum.injury_severity_name === 'Suspected Minor Injury (B)', 2,            if(datum.injury_severity_name === 'Possible Injury (C)', 3,            if(datum.injury_severity_name === 'Injured, Severity Unknown (U) (Since 1978)', 4,            if(datum.injury_severity_name === 'No Apparent Injury (O)', 5, 6))))))",
      "as": "order"
    }
  ],
  "width": DEFAULT_GRAPH_WIDTH_SMALL,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-3520e7d4a51bc513a1f7602af818b1f0": [
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 11189
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 9668
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3337
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2664
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2482
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 2264
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 2257
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 712
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 627
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 558
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 527
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 391
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 385
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 378
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 378
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 367
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 345
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 157
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 115
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 99
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 87
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 76
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 76
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 55
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 46
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 29
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Possible Injury (C)",
        "count": 26
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 20
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 18
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 17
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 13
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 10
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 10
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 10
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 10
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 8
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 7
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 7
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 6
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 5
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 5
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 5
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 4
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 3
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Bicyclist",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Other Cyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Other Cyclist",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "No (Drugs Not Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "police_reported_drug_involvement": "Yes (Drugs Involved)",
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      }
    ]
  }
};
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
  "width": DEFAULT_GRAPH_WIDTH,
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
const vehicleAge = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-0bc55d9e6cf521a2a71b16622e4fda84"},
  "mark": "point",
  "encoding": {
    "tooltip": [
      {"type": "quantitative", "field": "vehicle_age"},
      {"type": "quantitative", "field": "avg_fatal_percent"},
      {"type": "quantitative", "field": "accident_count"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "Vehicle age"},
      "field": "vehicle_age"
    },
    "y": {
      "type": "quantitative",
      "axis": {"title": "Average fatal percent (%) for the vehicle model year"},
      "field": "avg_fatal_percent"
    }
  },
  "width": DEFAULT_GRAPH_WIDTH,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-0bc55d9e6cf521a2a71b16622e4fda84": [
      {"vehicle_age": 52, "accident_count": 6, "avg_fatal_percent": 75},
      {"vehicle_age": 51, "accident_count": 6, "avg_fatal_percent": 91.6667},
      {"vehicle_age": 49, "accident_count": 13, "avg_fatal_percent": 84.6154},
      {"vehicle_age": 48, "accident_count": 13, "avg_fatal_percent": 57.6923},
      {"vehicle_age": 47, "accident_count": 9, "avg_fatal_percent": 83.3333},
      {"vehicle_age": 46, "accident_count": 14, "avg_fatal_percent": 82.1429},
      {"vehicle_age": 45, "accident_count": 6, "avg_fatal_percent": 58.3333},
      {"vehicle_age": 44, "accident_count": 7, "avg_fatal_percent": 71.4286},
      {"vehicle_age": 43, "accident_count": 12, "avg_fatal_percent": 48.6111},
      {"vehicle_age": 42, "accident_count": 19, "avg_fatal_percent": 65.7895},
      {"vehicle_age": 41, "accident_count": 16, "avg_fatal_percent": 46.6667},
      {"vehicle_age": 40, "accident_count": 19, "avg_fatal_percent": 74.537},
      {"vehicle_age": 39, "accident_count": 13, "avg_fatal_percent": 62.2378},
      {"vehicle_age": 38, "accident_count": 21, "avg_fatal_percent": 61.9048},
      {"vehicle_age": 37, "accident_count": 25, "avg_fatal_percent": 72.3529},
      {"vehicle_age": 36, "accident_count": 21, "avg_fatal_percent": 82.5397},
      {"vehicle_age": 35, "accident_count": 27, "avg_fatal_percent": 72.2222},
      {"vehicle_age": 34, "accident_count": 34, "avg_fatal_percent": 63.6364},
      {"vehicle_age": 33, "accident_count": 43, "avg_fatal_percent": 79.3651},
      {"vehicle_age": 32, "accident_count": 62, "avg_fatal_percent": 68.3333},
      {"vehicle_age": 31, "accident_count": 78, "avg_fatal_percent": 66.9872},
      {"vehicle_age": 30, "accident_count": 106, "avg_fatal_percent": 65.0481},
      {"vehicle_age": 29, "accident_count": 95, "avg_fatal_percent": 65.4682},
      {"vehicle_age": 28, "accident_count": 141, "avg_fatal_percent": 59.4563},
      {"vehicle_age": 27, "accident_count": 168, "avg_fatal_percent": 58.879},
      {"vehicle_age": 26, "accident_count": 204, "avg_fatal_percent": 55.9852},
      {"vehicle_age": 25, "accident_count": 247, "avg_fatal_percent": 61.6025},
      {"vehicle_age": 24, "accident_count": 321, "avg_fatal_percent": 64.7917},
      {"vehicle_age": 23, "accident_count": 459, "avg_fatal_percent": 60.3868},
      {"vehicle_age": 22, "accident_count": 631, "avg_fatal_percent": 58.9613},
      {"vehicle_age": 21, "accident_count": 763, "avg_fatal_percent": 53.8437},
      {"vehicle_age": 20, "accident_count": 815, "avg_fatal_percent": 53.8694},
      {"vehicle_age": 19, "accident_count": 1143, "avg_fatal_percent": 52.9941},
      {"vehicle_age": 18, "accident_count": 1465, "avg_fatal_percent": 54.8345},
      {"vehicle_age": 17, "accident_count": 1681, "avg_fatal_percent": 53.5328},
      {"vehicle_age": 16, "accident_count": 2222, "avg_fatal_percent": 50.849},
      {"vehicle_age": 15, "accident_count": 2337, "avg_fatal_percent": 51.8266},
      {"vehicle_age": 14, "accident_count": 2587, "avg_fatal_percent": 51.2637},
      {"vehicle_age": 13, "accident_count": 2762, "avg_fatal_percent": 50.0807},
      {"vehicle_age": 12, "accident_count": 2917, "avg_fatal_percent": 49.2494},
      {"vehicle_age": 11, "accident_count": 3039, "avg_fatal_percent": 48.5842},
      {"vehicle_age": 10, "accident_count": 3052, "avg_fatal_percent": 46.9171},
      {"vehicle_age": 9, "accident_count": 2996, "avg_fatal_percent": 45.7874},
      {"vehicle_age": 8, "accident_count": 2460, "avg_fatal_percent": 46.0691},
      {"vehicle_age": 7, "accident_count": 1624, "avg_fatal_percent": 44.9412},
      {"vehicle_age": 6, "accident_count": 1755, "avg_fatal_percent": 39.8743},
      {"vehicle_age": 5, "accident_count": 1844, "avg_fatal_percent": 38.0149},
      {"vehicle_age": 4, "accident_count": 2138, "avg_fatal_percent": 37.0637},
      {"vehicle_age": 3, "accident_count": 2337, "avg_fatal_percent": 37.9783},
      {"vehicle_age": 2, "accident_count": 2409, "avg_fatal_percent": 36.2605},
      {"vehicle_age": 1, "accident_count": 2799, "avg_fatal_percent": 36.8845},
      {"vehicle_age": 0, "accident_count": 2091, "avg_fatal_percent": 32.6704},
      {"vehicle_age": -1, "accident_count": 203, "avg_fatal_percent": 19.5156}
    ]
  }
};
const airbagDeployment =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-046c3ef9933dfedbb3ccc8c41e4a005d"},
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "injury_severity_name",
      "legend": {"title": "Injury severity"},
      "scale": {
        "range": [
          "#d73027",
          "#f46d43",
          "#fdae61",
          "#ffffbf",
          "#ffffbf",
          "#4575b4"
        ]
      },
      "sort": [
        "Fatal Injury (K)",
        "Suspected Serious Injury (A)",
        "Suspected Minor Injury (B)",
        "Possible Injury (C)",
        "Injured, Severity Unknown (U) (Since 1978)",
        "No Apparent Injury (O)"
      ]
    },
    "order": {"type": "nominal", "field": "order"},
    "tooltip": [
      {"type": "quantitative", "aggregate": "sum", "field": "injury_count"},
      {"type": "nominal", "field": "air_bag_deployed_name"},
      {"type": "nominal", "field": "injury_severity_name"}
    ],
    "x": {
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {"title": "Percent in all types of injuries"},
      "field": "injury_count",
      "stack": "normalize"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": "Airbag deployment scenario"},
      "field": "air_bag_deployed_name"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.injury_severity_name === 'Fatal Injury (K)', 0,            if(datum.injury_severity_name === 'Suspected Serious Injury (A)', 1,            if(datum.injury_severity_name === 'Suspected Minor Injury (B)', 2,            if(datum.injury_severity_name === 'Possible Injury (C)', 3,            if(datum.injury_severity_name === 'Injured, Severity Unknown (U) (Since 1978)', 4,            if(datum.injury_severity_name === 'No Apparent Injury (O)', 5, 6))))))",
      "as": "order"
    }
  ],
  "width": DEFAULT_GRAPH_WIDTH_SMALL,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-046c3ef9933dfedbb3ccc8c41e4a005d": [
      {
        "air_bag_deployed_name": "Deployed: Combination",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 731
      },
      {
        "air_bag_deployed_name": "Deployed: Combination",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 38
      },
      {
        "air_bag_deployed_name": "Deployed: Combination",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 546
      },
      {
        "air_bag_deployed_name": "Deployed: Combination",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 1180
      },
      {
        "air_bag_deployed_name": "Deployed: Combination",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 1293
      },
      {
        "air_bag_deployed_name": "Deployed: Combination",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 3653
      },
      {
        "air_bag_deployed_name": "Deployed: Curtain (Roof)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 52
      },
      {
        "air_bag_deployed_name": "Deployed: Curtain (Roof)",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 44
      },
      {
        "air_bag_deployed_name": "Deployed: Curtain (Roof)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 68
      },
      {
        "air_bag_deployed_name": "Deployed: Curtain (Roof)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 2
      },
      {
        "air_bag_deployed_name": "Deployed: Curtain (Roof)",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 128
      },
      {
        "air_bag_deployed_name": "Deployed: Curtain (Roof)",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 47
      },
      {
        "air_bag_deployed_name": "Deployed: Front",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 2584
      },
      {
        "air_bag_deployed_name": "Deployed: Front",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 8068
      },
      {
        "air_bag_deployed_name": "Deployed: Front",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 73
      },
      {
        "air_bag_deployed_name": "Deployed: Front",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 1657
      },
      {
        "air_bag_deployed_name": "Deployed: Front",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 1741
      },
      {
        "air_bag_deployed_name": "Deployed: Front",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 2737
      },
      {
        "air_bag_deployed_name": "Deployed: Other (Knee, Air Belt, etc.)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 1
      },
      {
        "air_bag_deployed_name": "Deployed: Other (Knee, Air Belt, etc.)",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 24
      },
      {
        "air_bag_deployed_name": "Deployed: Other (Knee, Air Belt, etc.)",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 13
      },
      {
        "air_bag_deployed_name": "Deployed: Other (Knee, Air Belt, etc.)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 11
      },
      {
        "air_bag_deployed_name": "Deployed: Other (Knee, Air Belt, etc.)",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 5
      },
      {
        "air_bag_deployed_name": "Deployed: Other (Knee, Air Belt, etc.)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 4
      },
      {
        "air_bag_deployed_name": "Deployed: Side (Door, Seatback)",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 665
      },
      {
        "air_bag_deployed_name": "Deployed: Side (Door, Seatback)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 2
      },
      {
        "air_bag_deployed_name": "Deployed: Side (Door, Seatback)",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 216
      },
      {
        "air_bag_deployed_name": "Deployed: Side (Door, Seatback)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 195
      },
      {
        "air_bag_deployed_name": "Deployed: Side (Door, Seatback)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 298
      },
      {
        "air_bag_deployed_name": "Deployed: Side (Door, Seatback)",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 244
      },
      {
        "air_bag_deployed_name": "Deployed: Unknown Location",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 1250
      },
      {
        "air_bag_deployed_name": "Deployed: Unknown Location",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 454
      },
      {
        "air_bag_deployed_name": "Deployed: Unknown Location",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 3
      },
      {
        "air_bag_deployed_name": "Deployed: Unknown Location",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 473
      },
      {
        "air_bag_deployed_name": "Deployed: Unknown Location",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 332
      },
      {
        "air_bag_deployed_name": "Deployed: Unknown Location",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 474
      },
      {
        "air_bag_deployed_name": "Deployment Unknown",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 24
      },
      {
        "air_bag_deployed_name": "Deployment Unknown",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 195
      },
      {
        "air_bag_deployed_name": "Deployment Unknown",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 678
      },
      {
        "air_bag_deployed_name": "Deployment Unknown",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 1224
      },
      {
        "air_bag_deployed_name": "Deployment Unknown",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 248
      },
      {
        "air_bag_deployed_name": "Deployment Unknown",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 126
      },
      {
        "air_bag_deployed_name": "Not Deployed",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 1702
      },
      {
        "air_bag_deployed_name": "Not Deployed",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 6686
      },
      {
        "air_bag_deployed_name": "Not Deployed",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 2405
      },
      {
        "air_bag_deployed_name": "Not Deployed",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 44
      },
      {
        "air_bag_deployed_name": "Not Deployed",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 13214
      },
      {
        "air_bag_deployed_name": "Not Deployed",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 2288
      },
      {
        "air_bag_deployed_name": "Not a Motor Vehicle Occupant",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 18
      },
      {
        "air_bag_deployed_name": "Not a Motor Vehicle Occupant",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 7
      },
      {
        "air_bag_deployed_name": "Not a Motor Vehicle Occupant",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 243
      },
      {
        "air_bag_deployed_name": "Not a Motor Vehicle Occupant",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 154
      },
      {
        "air_bag_deployed_name": "Not a Motor Vehicle Occupant",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 7139
      },
      {
        "air_bag_deployed_name": "Not a Motor Vehicle Occupant",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 94
      },
      {
        "air_bag_deployed_name": "Switched Off",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 2
      },
      {
        "air_bag_deployed_name": "Switched Off",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 4
      },
      {
        "air_bag_deployed_name": "Switched Off",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 1
      },
      {
        "air_bag_deployed_name": "Switched Off",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 3
      }
    ]
  }
};
vegaEmbed("#alcohol", alcohol);
vegaEmbed("#drug", drug);
vegaEmbed("#fatalityRateByCounty", fatalityRateByCounty);
vegaEmbed("#vehicleModelYear", vehicleModelYear);
vegaEmbed("#vehicleAge", vehicleAge);
vegaEmbed("#airbagDeployment", airbagDeployment);
