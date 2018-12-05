const DEFAULT_GRAPH_WIDTH = 500;
const DEFAULT_GRAPH_WIDTH_MEDIUM = DEFAULT_GRAPH_WIDTH - 100;
const DEFAULT_GRAPH_WIDTH_SMALL = DEFAULT_GRAPH_WIDTH - 200;
const passengerRestraintUse = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-aa135aa6718fdb28bf295a5ebd12238b"},
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
      {"type": "nominal", "field": "person_type_name"},
      {"type": "nominal", "field": "restraint_system_helmet_use_name"},
      {"type": "quantitative", "aggregate": "sum", "field": "count"},
      {"type": "nominal", "field": "injury_severity_name"}
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
      "axis": {"title": "Restraint system & helmet usage"},
      "field": "restraint_system_helmet_use_name"
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
    "data-aa135aa6718fdb28bf295a5ebd12238b": [
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap and Shoulder Belt Used",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 4309
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "None Used",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 2761
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap and Shoulder Belt Used",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 2488
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap and Shoulder Belt Used",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 2477
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap and Shoulder Belt Used",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1964
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap and Shoulder Belt Used",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1834
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "None Used",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1393
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "None Used",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1035
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "None Used",
        "injury_severity_name": "Possible Injury (C)",
        "count": 482
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint Type Unknown",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 392
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "None Used",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 356
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Forward Facing (Since 2008)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 246
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "No Helmet",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 227
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Forward Facing (Since 2008)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 145
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint Type Unknown",
        "injury_severity_name": "Possible Injury (C)",
        "count": 142
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Forward Facing (Since 2008)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 135
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint Type Unknown",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 131
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint Type Unknown",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 123
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Rear Facing (Since 2008)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 96
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Booster Seat",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 95
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "No Helmet",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 95
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Restraint Used – Type Unknown",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 86
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Unknown if DOT-Compliant",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 83
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint Type Unknown",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 79
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Restraint Used – Type Unknown",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 78
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap Belt Only Used",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 78
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Restraint Used – Type Unknown",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 76
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Forward Facing (Since 2008)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 69
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Booster Seat",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 65
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 58
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap Belt Only Used",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 57
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap Belt Only Used",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 57
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Forward Facing (Since 2008)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 56
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "No Helmet",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 55
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap Belt Only Used",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 53
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Rear Facing (Since 2008)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 52
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Restraint Used – Type Unknown",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 47
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Booster Seat",
        "injury_severity_name": "Possible Injury (C)",
        "count": 43
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap Belt Only Used",
        "injury_severity_name": "Possible Injury (C)",
        "count": 42
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Booster Seat",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 39
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Unknown if DOT-Compliant",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 39
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Booster Seat",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 32
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Shoulder Belt Only Used",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 30
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Restraint Used – Type Unknown",
        "injury_severity_name": "Possible Injury (C)",
        "count": 28
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Lap and Shoulder Belt Used",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 28
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "No Helmet",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 28
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 26
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Rear Facing (Since 2008)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 26
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Shoulder Belt Only Used",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 25
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "None Used",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 23
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Rear Facing (Since 2008)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 20
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Other",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 19
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "No Helmet",
        "injury_severity_name": "Possible Injury (C)",
        "count": 18
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 17
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Unknown if DOT-Compliant",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 14
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Unknown if DOT-Compliant",
        "injury_severity_name": "Possible Injury (C)",
        "count": 13
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Shoulder Belt Only Used",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 12
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Shoulder Belt Only Used",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 11
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Other than DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 10
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Rear Facing (Since 2008)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 10
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Shoulder Belt Only Used",
        "injury_severity_name": "Possible Injury (C)",
        "count": 7
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Other",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 7
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Unknown if Helmet Worn",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 5
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Unknown if DOT-Compliant",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 5
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Other",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 5
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Other than DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 4
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Unknown if Helmet Worn",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "No Helmet",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 3
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Other than DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 3
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 3
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Unknown if Helmet Worn",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Possible Injury (C)",
        "count": 3
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Other",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint Type Unknown",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Helmet, Other than DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "DOT-Compliant Motorcycle Helmet",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Unknown if Helmet Worn",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Shoulder Belt Only Used",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Child Restraint System – Forward Facing (Since 2008)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Restraint Used – Type Unknown",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "restraint_system_helmet_use_name": "Booster Seat",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      }
    ]
  }
};
const ejection = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-5fa00275eadba6beb85bc5a5397002fe"},
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
      {"type": "quantitative", "aggregate": "sum", "field": "count"},
      {"type": "nominal", "field": "ejection_name"},
      {"type": "nominal", "field": "injury_severity_name"}
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
      "axis": {"title": "Ejection scenario"},
      "field": "ejection_name"
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
    "data-5fa00275eadba6beb85bc5a5397002fe": [
      {
        "ejection_name": "Not Ejected",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 20575
      },
      {
        "ejection_name": "Not Ejected",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 19056
      },
      {
        "ejection_name": "Not Ejected",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 9083
      },
      {
        "ejection_name": "Not Ejected",
        "injury_severity_name": "Possible Injury (C)",
        "count": 7179
      },
      {
        "ejection_name": "Not Ejected",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 7174
      },
      {
        "ejection_name": "Totally Ejected",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4745
      },
      {
        "ejection_name": "Partially Ejected",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1225
      },
      {
        "ejection_name": "Totally Ejected",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 699
      },
      {
        "ejection_name": "Totally Ejected",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 296
      },
      {
        "ejection_name": "Not Ejected",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 212
      },
      {
        "ejection_name": "Partially Ejected",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 119
      },
      {
        "ejection_name": "Ejected – Unknown Degree (Since 2008)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 87
      },
      {
        "ejection_name": "Totally Ejected",
        "injury_severity_name": "Possible Injury (C)",
        "count": 71
      },
      {
        "ejection_name": "Partially Ejected",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 42
      },
      {
        "ejection_name": "Totally Ejected",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 25
      },
      {
        "ejection_name": "Ejected – Unknown Degree (Since 2008)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 13
      },
      {
        "ejection_name": "Partially Ejected",
        "injury_severity_name": "Possible Injury (C)",
        "count": 11
      },
      {
        "ejection_name": "Totally Ejected",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 6
      },
      {
        "ejection_name": "Ejected – Unknown Degree (Since 2008)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 5
      },
      {
        "ejection_name": "Partially Ejected",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 4
      },
      {
        "ejection_name": "Ejected – Unknown Degree (Since 2008)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "ejection_name": "Partially Ejected",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      }
    ]
  }
};
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
      "scale": {
        "domain": [0,1,2,3],
        "range": ["#00335E","#ffffff",'#FFFFBF', "#d73027"]
      },
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
      "axis": {"title": "Ratio in all types of injuries"},
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
const speeding =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-51e7d4207b4ebb1fef6be27811298178"},
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "Overspeeding Range",
      "legend": {"title": "Overspeeding Range"},
      "scale": {
        "range": ["#98eab0", "#FFFFBF", "#FDAE61", "#d73027", "#a50026"]
      }
    },
    "column": {
      "type": "quantitative",
      "field": "Number of Previous Speeding Convictions"
    },
    "tooltip": [
      {
        "type": "quantitative",
        "field": "Number of Previous Speeding Convictions"
      },
      {"type": "nominal", "field": "Overspeeding Range"},
      {"type": "quantitative", "field": "Crash Count"}
    ],
    "x": {
      "type": "nominal",
      "axis": {"title": ""},
      "field": "Overspeeding Range"
    },
    "y": {
      "type": "quantitative",
      "axis": {"grid": false},
      "field": "Crash Count"
    }
  },
  "width": 60,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-51e7d4207b4ebb1fef6be27811298178": [
      {
        "Number of Previous Speeding Convictions": 0,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 1019
      },
      {
        "Number of Previous Speeding Convictions": 0,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 1323
      },
      {
        "Number of Previous Speeding Convictions": 0,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 415
      },
      {
        "Number of Previous Speeding Convictions": 0,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 319
      },
      {
        "Number of Previous Speeding Convictions": 0,
        "Overspeeding Range": "25+",
        "Crash Count": 900
      },
      {
        "Number of Previous Speeding Convictions": 1,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 180
      },
      {
        "Number of Previous Speeding Convictions": 1,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 292
      },
      {
        "Number of Previous Speeding Convictions": 1,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 91
      },
      {
        "Number of Previous Speeding Convictions": 1,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 105
      },
      {
        "Number of Previous Speeding Convictions": 1,
        "Overspeeding Range": "25+",
        "Crash Count": 240
      },
      {
        "Number of Previous Speeding Convictions": 2,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 44
      },
      {
        "Number of Previous Speeding Convictions": 2,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 110
      },
      {
        "Number of Previous Speeding Convictions": 2,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 31
      },
      {
        "Number of Previous Speeding Convictions": 2,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 32
      },
      {
        "Number of Previous Speeding Convictions": 2,
        "Overspeeding Range": "25+",
        "Crash Count": 87
      },
      {
        "Number of Previous Speeding Convictions": 3,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 25
      },
      {
        "Number of Previous Speeding Convictions": 3,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 38
      },
      {
        "Number of Previous Speeding Convictions": 3,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 9
      },
      {
        "Number of Previous Speeding Convictions": 3,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 16
      },
      {
        "Number of Previous Speeding Convictions": 3,
        "Overspeeding Range": "25+",
        "Crash Count": 50
      },
      {
        "Number of Previous Speeding Convictions": 4,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 11
      },
      {
        "Number of Previous Speeding Convictions": 4,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 11
      },
      {
        "Number of Previous Speeding Convictions": 4,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 5
      },
      {
        "Number of Previous Speeding Convictions": 4,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 4
      },
      {
        "Number of Previous Speeding Convictions": 4,
        "Overspeeding Range": "25+",
        "Crash Count": 15
      },
      {
        "Number of Previous Speeding Convictions": 5,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 2
      },
      {
        "Number of Previous Speeding Convictions": 5,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 8
      },
      {
        "Number of Previous Speeding Convictions": 5,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 4
      },
      {
        "Number of Previous Speeding Convictions": 5,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 0
      },
      {
        "Number of Previous Speeding Convictions": 5,
        "Overspeeding Range": "25+",
        "Crash Count": 5
      },
      {
        "Number of Previous Speeding Convictions": 6,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 1
      },
      {
        "Number of Previous Speeding Convictions": 6,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 0
      },
      {
        "Number of Previous Speeding Convictions": 6,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 0
      },
      {
        "Number of Previous Speeding Convictions": 6,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 0
      },
      {
        "Number of Previous Speeding Convictions": 6,
        "Overspeeding Range": "25+",
        "Crash Count": 2
      },
      {
        "Number of Previous Speeding Convictions": 7,
        "Overspeeding Range": "0 ~ 5",
        "Crash Count": 1
      },
      {
        "Number of Previous Speeding Convictions": 7,
        "Overspeeding Range": "05 ~ 15",
        "Crash Count": 1
      },
      {
        "Number of Previous Speeding Convictions": 7,
        "Overspeeding Range": "15 ~ 20",
        "Crash Count": 1
      },
      {
        "Number of Previous Speeding Convictions": 7,
        "Overspeeding Range": "20 ~ 25",
        "Crash Count": 0
      },
      {
        "Number of Previous Speeding Convictions": 7,
        "Overspeeding Range": "25+",
        "Crash Count": 1
      }
    ]
  }
};
const dangerousTime =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-a4732e2618053d9ad96e3c4e3eaedc00"},
  "mark": "circle",
  "encoding": {
    "color": {"type": "quantitative", "aggregate": "sum", "field": "crash_cnt"},
    "size": {
      "type": "quantitative",
      "aggregate": "sum",
      "field": "crash_cnt",
      "title": "Crash Count"
    },
    "tooltip": [
      {"type": "quantitative", "field": "month_of_crash"},
      {"type": "quantitative", "field": "hour_of_crash"},
      {"type": "quantitative", "field": "crash_cnt"}
    ],
    "x": {
      "type": "ordinal",
      "axis": {"title": "Hour of Crash"},
      "field": "hour_of_crash"
    },
    "y": {
      "type": "ordinal",
      "axis": {"title": "Month of Crash"},
      "field": "month_of_crash"
    }
  },
  "title": "All Fatal Crashes in 2016",
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-a4732e2618053d9ad96e3c4e3eaedc00": [
      {"month_of_crash": 1, "hour_of_crash": 0, "crash_cnt": 84},
      {"month_of_crash": 1, "hour_of_crash": 1, "crash_cnt": 69},
      {"month_of_crash": 1, "hour_of_crash": 2, "crash_cnt": 84},
      {"month_of_crash": 1, "hour_of_crash": 3, "crash_cnt": 83},
      {"month_of_crash": 1, "hour_of_crash": 4, "crash_cnt": 60},
      {"month_of_crash": 1, "hour_of_crash": 5, "crash_cnt": 71},
      {"month_of_crash": 1, "hour_of_crash": 6, "crash_cnt": 103},
      {"month_of_crash": 1, "hour_of_crash": 7, "crash_cnt": 95},
      {"month_of_crash": 1, "hour_of_crash": 8, "crash_cnt": 78},
      {"month_of_crash": 1, "hour_of_crash": 9, "crash_cnt": 69},
      {"month_of_crash": 1, "hour_of_crash": 10, "crash_cnt": 62},
      {"month_of_crash": 1, "hour_of_crash": 11, "crash_cnt": 82},
      {"month_of_crash": 1, "hour_of_crash": 12, "crash_cnt": 84},
      {"month_of_crash": 1, "hour_of_crash": 13, "crash_cnt": 99},
      {"month_of_crash": 1, "hour_of_crash": 14, "crash_cnt": 106},
      {"month_of_crash": 1, "hour_of_crash": 15, "crash_cnt": 105},
      {"month_of_crash": 1, "hour_of_crash": 16, "crash_cnt": 107},
      {"month_of_crash": 1, "hour_of_crash": 17, "crash_cnt": 148},
      {"month_of_crash": 1, "hour_of_crash": 18, "crash_cnt": 183},
      {"month_of_crash": 1, "hour_of_crash": 19, "crash_cnt": 145},
      {"month_of_crash": 1, "hour_of_crash": 20, "crash_cnt": 117},
      {"month_of_crash": 1, "hour_of_crash": 21, "crash_cnt": 115},
      {"month_of_crash": 1, "hour_of_crash": 22, "crash_cnt": 93},
      {"month_of_crash": 1, "hour_of_crash": 23, "crash_cnt": 92},
      {"month_of_crash": 2, "hour_of_crash": 0, "crash_cnt": 105},
      {"month_of_crash": 2, "hour_of_crash": 1, "crash_cnt": 84},
      {"month_of_crash": 2, "hour_of_crash": 2, "crash_cnt": 98},
      {"month_of_crash": 2, "hour_of_crash": 3, "crash_cnt": 80},
      {"month_of_crash": 2, "hour_of_crash": 4, "crash_cnt": 53},
      {"month_of_crash": 2, "hour_of_crash": 5, "crash_cnt": 81},
      {"month_of_crash": 2, "hour_of_crash": 6, "crash_cnt": 103},
      {"month_of_crash": 2, "hour_of_crash": 7, "crash_cnt": 86},
      {"month_of_crash": 2, "hour_of_crash": 8, "crash_cnt": 76},
      {"month_of_crash": 2, "hour_of_crash": 9, "crash_cnt": 64},
      {"month_of_crash": 2, "hour_of_crash": 10, "crash_cnt": 64},
      {"month_of_crash": 2, "hour_of_crash": 11, "crash_cnt": 103},
      {"month_of_crash": 2, "hour_of_crash": 12, "crash_cnt": 109},
      {"month_of_crash": 2, "hour_of_crash": 13, "crash_cnt": 98},
      {"month_of_crash": 2, "hour_of_crash": 14, "crash_cnt": 91},
      {"month_of_crash": 2, "hour_of_crash": 15, "crash_cnt": 106},
      {"month_of_crash": 2, "hour_of_crash": 16, "crash_cnt": 117},
      {"month_of_crash": 2, "hour_of_crash": 17, "crash_cnt": 105},
      {"month_of_crash": 2, "hour_of_crash": 18, "crash_cnt": 175},
      {"month_of_crash": 2, "hour_of_crash": 19, "crash_cnt": 164},
      {"month_of_crash": 2, "hour_of_crash": 20, "crash_cnt": 119},
      {"month_of_crash": 2, "hour_of_crash": 21, "crash_cnt": 121},
      {"month_of_crash": 2, "hour_of_crash": 22, "crash_cnt": 99},
      {"month_of_crash": 2, "hour_of_crash": 23, "crash_cnt": 108},
      {"month_of_crash": 3, "hour_of_crash": 0, "crash_cnt": 101},
      {"month_of_crash": 3, "hour_of_crash": 1, "crash_cnt": 89},
      {"month_of_crash": 3, "hour_of_crash": 2, "crash_cnt": 110},
      {"month_of_crash": 3, "hour_of_crash": 3, "crash_cnt": 78},
      {"month_of_crash": 3, "hour_of_crash": 4, "crash_cnt": 70},
      {"month_of_crash": 3, "hour_of_crash": 5, "crash_cnt": 85},
      {"month_of_crash": 3, "hour_of_crash": 6, "crash_cnt": 93},
      {"month_of_crash": 3, "hour_of_crash": 7, "crash_cnt": 105},
      {"month_of_crash": 3, "hour_of_crash": 8, "crash_cnt": 86},
      {"month_of_crash": 3, "hour_of_crash": 9, "crash_cnt": 73},
      {"month_of_crash": 3, "hour_of_crash": 10, "crash_cnt": 80},
      {"month_of_crash": 3, "hour_of_crash": 11, "crash_cnt": 105},
      {"month_of_crash": 3, "hour_of_crash": 12, "crash_cnt": 95},
      {"month_of_crash": 3, "hour_of_crash": 13, "crash_cnt": 102},
      {"month_of_crash": 3, "hour_of_crash": 14, "crash_cnt": 138},
      {"month_of_crash": 3, "hour_of_crash": 15, "crash_cnt": 138},
      {"month_of_crash": 3, "hour_of_crash": 16, "crash_cnt": 137},
      {"month_of_crash": 3, "hour_of_crash": 17, "crash_cnt": 118},
      {"month_of_crash": 3, "hour_of_crash": 18, "crash_cnt": 142},
      {"month_of_crash": 3, "hour_of_crash": 19, "crash_cnt": 170},
      {"month_of_crash": 3, "hour_of_crash": 20, "crash_cnt": 182},
      {"month_of_crash": 3, "hour_of_crash": 21, "crash_cnt": 127},
      {"month_of_crash": 3, "hour_of_crash": 22, "crash_cnt": 126},
      {"month_of_crash": 3, "hour_of_crash": 23, "crash_cnt": 124},
      {"month_of_crash": 4, "hour_of_crash": 0, "crash_cnt": 102},
      {"month_of_crash": 4, "hour_of_crash": 1, "crash_cnt": 103},
      {"month_of_crash": 4, "hour_of_crash": 2, "crash_cnt": 107},
      {"month_of_crash": 4, "hour_of_crash": 3, "crash_cnt": 91},
      {"month_of_crash": 4, "hour_of_crash": 4, "crash_cnt": 66},
      {"month_of_crash": 4, "hour_of_crash": 5, "crash_cnt": 80},
      {"month_of_crash": 4, "hour_of_crash": 6, "crash_cnt": 78},
      {"month_of_crash": 4, "hour_of_crash": 7, "crash_cnt": 93},
      {"month_of_crash": 4, "hour_of_crash": 8, "crash_cnt": 84},
      {"month_of_crash": 4, "hour_of_crash": 9, "crash_cnt": 73},
      {"month_of_crash": 4, "hour_of_crash": 10, "crash_cnt": 78},
      {"month_of_crash": 4, "hour_of_crash": 11, "crash_cnt": 86},
      {"month_of_crash": 4, "hour_of_crash": 12, "crash_cnt": 99},
      {"month_of_crash": 4, "hour_of_crash": 13, "crash_cnt": 128},
      {"month_of_crash": 4, "hour_of_crash": 14, "crash_cnt": 130},
      {"month_of_crash": 4, "hour_of_crash": 15, "crash_cnt": 155},
      {"month_of_crash": 4, "hour_of_crash": 16, "crash_cnt": 153},
      {"month_of_crash": 4, "hour_of_crash": 17, "crash_cnt": 137},
      {"month_of_crash": 4, "hour_of_crash": 18, "crash_cnt": 137},
      {"month_of_crash": 4, "hour_of_crash": 19, "crash_cnt": 130},
      {"month_of_crash": 4, "hour_of_crash": 20, "crash_cnt": 167},
      {"month_of_crash": 4, "hour_of_crash": 21, "crash_cnt": 158},
      {"month_of_crash": 4, "hour_of_crash": 22, "crash_cnt": 152},
      {"month_of_crash": 4, "hour_of_crash": 23, "crash_cnt": 115},
      {"month_of_crash": 5, "hour_of_crash": 0, "crash_cnt": 138},
      {"month_of_crash": 5, "hour_of_crash": 1, "crash_cnt": 127},
      {"month_of_crash": 5, "hour_of_crash": 2, "crash_cnt": 134},
      {"month_of_crash": 5, "hour_of_crash": 3, "crash_cnt": 76},
      {"month_of_crash": 5, "hour_of_crash": 4, "crash_cnt": 72},
      {"month_of_crash": 5, "hour_of_crash": 5, "crash_cnt": 84},
      {"month_of_crash": 5, "hour_of_crash": 6, "crash_cnt": 98},
      {"month_of_crash": 5, "hour_of_crash": 7, "crash_cnt": 75},
      {"month_of_crash": 5, "hour_of_crash": 8, "crash_cnt": 90},
      {"month_of_crash": 5, "hour_of_crash": 9, "crash_cnt": 73},
      {"month_of_crash": 5, "hour_of_crash": 10, "crash_cnt": 92},
      {"month_of_crash": 5, "hour_of_crash": 11, "crash_cnt": 97},
      {"month_of_crash": 5, "hour_of_crash": 12, "crash_cnt": 109},
      {"month_of_crash": 5, "hour_of_crash": 13, "crash_cnt": 151},
      {"month_of_crash": 5, "hour_of_crash": 14, "crash_cnt": 138},
      {"month_of_crash": 5, "hour_of_crash": 15, "crash_cnt": 187},
      {"month_of_crash": 5, "hour_of_crash": 16, "crash_cnt": 159},
      {"month_of_crash": 5, "hour_of_crash": 17, "crash_cnt": 160},
      {"month_of_crash": 5, "hour_of_crash": 18, "crash_cnt": 144},
      {"month_of_crash": 5, "hour_of_crash": 19, "crash_cnt": 128},
      {"month_of_crash": 5, "hour_of_crash": 20, "crash_cnt": 169},
      {"month_of_crash": 5, "hour_of_crash": 21, "crash_cnt": 192},
      {"month_of_crash": 5, "hour_of_crash": 22, "crash_cnt": 153},
      {"month_of_crash": 5, "hour_of_crash": 23, "crash_cnt": 134},
      {"month_of_crash": 6, "hour_of_crash": 0, "crash_cnt": 128},
      {"month_of_crash": 6, "hour_of_crash": 1, "crash_cnt": 116},
      {"month_of_crash": 6, "hour_of_crash": 2, "crash_cnt": 110},
      {"month_of_crash": 6, "hour_of_crash": 3, "crash_cnt": 97},
      {"month_of_crash": 6, "hour_of_crash": 4, "crash_cnt": 87},
      {"month_of_crash": 6, "hour_of_crash": 5, "crash_cnt": 87},
      {"month_of_crash": 6, "hour_of_crash": 6, "crash_cnt": 76},
      {"month_of_crash": 6, "hour_of_crash": 7, "crash_cnt": 89},
      {"month_of_crash": 6, "hour_of_crash": 8, "crash_cnt": 72},
      {"month_of_crash": 6, "hour_of_crash": 9, "crash_cnt": 94},
      {"month_of_crash": 6, "hour_of_crash": 10, "crash_cnt": 105},
      {"month_of_crash": 6, "hour_of_crash": 11, "crash_cnt": 96},
      {"month_of_crash": 6, "hour_of_crash": 12, "crash_cnt": 146},
      {"month_of_crash": 6, "hour_of_crash": 13, "crash_cnt": 155},
      {"month_of_crash": 6, "hour_of_crash": 14, "crash_cnt": 127},
      {"month_of_crash": 6, "hour_of_crash": 15, "crash_cnt": 153},
      {"month_of_crash": 6, "hour_of_crash": 16, "crash_cnt": 167},
      {"month_of_crash": 6, "hour_of_crash": 17, "crash_cnt": 163},
      {"month_of_crash": 6, "hour_of_crash": 18, "crash_cnt": 161},
      {"month_of_crash": 6, "hour_of_crash": 19, "crash_cnt": 132},
      {"month_of_crash": 6, "hour_of_crash": 20, "crash_cnt": 156},
      {"month_of_crash": 6, "hour_of_crash": 21, "crash_cnt": 181},
      {"month_of_crash": 6, "hour_of_crash": 22, "crash_cnt": 163},
      {"month_of_crash": 6, "hour_of_crash": 23, "crash_cnt": 143},
      {"month_of_crash": 7, "hour_of_crash": 0, "crash_cnt": 144},
      {"month_of_crash": 7, "hour_of_crash": 1, "crash_cnt": 108},
      {"month_of_crash": 7, "hour_of_crash": 2, "crash_cnt": 142},
      {"month_of_crash": 7, "hour_of_crash": 3, "crash_cnt": 103},
      {"month_of_crash": 7, "hour_of_crash": 4, "crash_cnt": 87},
      {"month_of_crash": 7, "hour_of_crash": 5, "crash_cnt": 100},
      {"month_of_crash": 7, "hour_of_crash": 6, "crash_cnt": 80},
      {"month_of_crash": 7, "hour_of_crash": 7, "crash_cnt": 91},
      {"month_of_crash": 7, "hour_of_crash": 8, "crash_cnt": 65},
      {"month_of_crash": 7, "hour_of_crash": 9, "crash_cnt": 86},
      {"month_of_crash": 7, "hour_of_crash": 10, "crash_cnt": 84},
      {"month_of_crash": 7, "hour_of_crash": 11, "crash_cnt": 111},
      {"month_of_crash": 7, "hour_of_crash": 12, "crash_cnt": 121},
      {"month_of_crash": 7, "hour_of_crash": 13, "crash_cnt": 169},
      {"month_of_crash": 7, "hour_of_crash": 14, "crash_cnt": 156},
      {"month_of_crash": 7, "hour_of_crash": 15, "crash_cnt": 163},
      {"month_of_crash": 7, "hour_of_crash": 16, "crash_cnt": 160},
      {"month_of_crash": 7, "hour_of_crash": 17, "crash_cnt": 150},
      {"month_of_crash": 7, "hour_of_crash": 18, "crash_cnt": 155},
      {"month_of_crash": 7, "hour_of_crash": 19, "crash_cnt": 119},
      {"month_of_crash": 7, "hour_of_crash": 20, "crash_cnt": 142},
      {"month_of_crash": 7, "hour_of_crash": 21, "crash_cnt": 166},
      {"month_of_crash": 7, "hour_of_crash": 22, "crash_cnt": 159},
      {"month_of_crash": 7, "hour_of_crash": 23, "crash_cnt": 137},
      {"month_of_crash": 8, "hour_of_crash": 0, "crash_cnt": 122},
      {"month_of_crash": 8, "hour_of_crash": 1, "crash_cnt": 112},
      {"month_of_crash": 8, "hour_of_crash": 2, "crash_cnt": 123},
      {"month_of_crash": 8, "hour_of_crash": 3, "crash_cnt": 94},
      {"month_of_crash": 8, "hour_of_crash": 4, "crash_cnt": 83},
      {"month_of_crash": 8, "hour_of_crash": 5, "crash_cnt": 114},
      {"month_of_crash": 8, "hour_of_crash": 6, "crash_cnt": 117},
      {"month_of_crash": 8, "hour_of_crash": 7, "crash_cnt": 102},
      {"month_of_crash": 8, "hour_of_crash": 8, "crash_cnt": 93},
      {"month_of_crash": 8, "hour_of_crash": 9, "crash_cnt": 110},
      {"month_of_crash": 8, "hour_of_crash": 10, "crash_cnt": 91},
      {"month_of_crash": 8, "hour_of_crash": 11, "crash_cnt": 105},
      {"month_of_crash": 8, "hour_of_crash": 12, "crash_cnt": 100},
      {"month_of_crash": 8, "hour_of_crash": 13, "crash_cnt": 137},
      {"month_of_crash": 8, "hour_of_crash": 14, "crash_cnt": 146},
      {"month_of_crash": 8, "hour_of_crash": 15, "crash_cnt": 173},
      {"month_of_crash": 8, "hour_of_crash": 16, "crash_cnt": 168},
      {"month_of_crash": 8, "hour_of_crash": 17, "crash_cnt": 167},
      {"month_of_crash": 8, "hour_of_crash": 18, "crash_cnt": 143},
      {"month_of_crash": 8, "hour_of_crash": 19, "crash_cnt": 151},
      {"month_of_crash": 8, "hour_of_crash": 20, "crash_cnt": 192},
      {"month_of_crash": 8, "hour_of_crash": 21, "crash_cnt": 176},
      {"month_of_crash": 8, "hour_of_crash": 22, "crash_cnt": 150},
      {"month_of_crash": 8, "hour_of_crash": 23, "crash_cnt": 145},
      {"month_of_crash": 9, "hour_of_crash": 0, "crash_cnt": 98},
      {"month_of_crash": 9, "hour_of_crash": 1, "crash_cnt": 126},
      {"month_of_crash": 9, "hour_of_crash": 2, "crash_cnt": 121},
      {"month_of_crash": 9, "hour_of_crash": 3, "crash_cnt": 82},
      {"month_of_crash": 9, "hour_of_crash": 4, "crash_cnt": 77},
      {"month_of_crash": 9, "hour_of_crash": 5, "crash_cnt": 116},
      {"month_of_crash": 9, "hour_of_crash": 6, "crash_cnt": 129},
      {"month_of_crash": 9, "hour_of_crash": 7, "crash_cnt": 128},
      {"month_of_crash": 9, "hour_of_crash": 8, "crash_cnt": 89},
      {"month_of_crash": 9, "hour_of_crash": 9, "crash_cnt": 94},
      {"month_of_crash": 9, "hour_of_crash": 10, "crash_cnt": 91},
      {"month_of_crash": 9, "hour_of_crash": 11, "crash_cnt": 120},
      {"month_of_crash": 9, "hour_of_crash": 12, "crash_cnt": 125},
      {"month_of_crash": 9, "hour_of_crash": 13, "crash_cnt": 135},
      {"month_of_crash": 9, "hour_of_crash": 14, "crash_cnt": 158},
      {"month_of_crash": 9, "hour_of_crash": 15, "crash_cnt": 160},
      {"month_of_crash": 9, "hour_of_crash": 16, "crash_cnt": 179},
      {"month_of_crash": 9, "hour_of_crash": 17, "crash_cnt": 153},
      {"month_of_crash": 9, "hour_of_crash": 18, "crash_cnt": 141},
      {"month_of_crash": 9, "hour_of_crash": 19, "crash_cnt": 179},
      {"month_of_crash": 9, "hour_of_crash": 20, "crash_cnt": 204},
      {"month_of_crash": 9, "hour_of_crash": 21, "crash_cnt": 171},
      {"month_of_crash": 9, "hour_of_crash": 22, "crash_cnt": 139},
      {"month_of_crash": 9, "hour_of_crash": 23, "crash_cnt": 117},
      {"month_of_crash": 10, "hour_of_crash": 0, "crash_cnt": 125},
      {"month_of_crash": 10, "hour_of_crash": 1, "crash_cnt": 123},
      {"month_of_crash": 10, "hour_of_crash": 2, "crash_cnt": 139},
      {"month_of_crash": 10, "hour_of_crash": 3, "crash_cnt": 88},
      {"month_of_crash": 10, "hour_of_crash": 4, "crash_cnt": 80},
      {"month_of_crash": 10, "hour_of_crash": 5, "crash_cnt": 120},
      {"month_of_crash": 10, "hour_of_crash": 6, "crash_cnt": 158},
      {"month_of_crash": 10, "hour_of_crash": 7, "crash_cnt": 98},
      {"month_of_crash": 10, "hour_of_crash": 8, "crash_cnt": 84},
      {"month_of_crash": 10, "hour_of_crash": 9, "crash_cnt": 108},
      {"month_of_crash": 10, "hour_of_crash": 10, "crash_cnt": 104},
      {"month_of_crash": 10, "hour_of_crash": 11, "crash_cnt": 129},
      {"month_of_crash": 10, "hour_of_crash": 12, "crash_cnt": 106},
      {"month_of_crash": 10, "hour_of_crash": 13, "crash_cnt": 143},
      {"month_of_crash": 10, "hour_of_crash": 14, "crash_cnt": 123},
      {"month_of_crash": 10, "hour_of_crash": 15, "crash_cnt": 143},
      {"month_of_crash": 10, "hour_of_crash": 16, "crash_cnt": 163},
      {"month_of_crash": 10, "hour_of_crash": 17, "crash_cnt": 148},
      {"month_of_crash": 10, "hour_of_crash": 18, "crash_cnt": 159},
      {"month_of_crash": 10, "hour_of_crash": 19, "crash_cnt": 251},
      {"month_of_crash": 10, "hour_of_crash": 20, "crash_cnt": 200},
      {"month_of_crash": 10, "hour_of_crash": 21, "crash_cnt": 171},
      {"month_of_crash": 10, "hour_of_crash": 22, "crash_cnt": 173},
      {"month_of_crash": 10, "hour_of_crash": 23, "crash_cnt": 130},
      {"month_of_crash": 11, "hour_of_crash": 0, "crash_cnt": 118},
      {"month_of_crash": 11, "hour_of_crash": 1, "crash_cnt": 105},
      {"month_of_crash": 11, "hour_of_crash": 2, "crash_cnt": 97},
      {"month_of_crash": 11, "hour_of_crash": 3, "crash_cnt": 89},
      {"month_of_crash": 11, "hour_of_crash": 4, "crash_cnt": 58},
      {"month_of_crash": 11, "hour_of_crash": 5, "crash_cnt": 113},
      {"month_of_crash": 11, "hour_of_crash": 6, "crash_cnt": 132},
      {"month_of_crash": 11, "hour_of_crash": 7, "crash_cnt": 100},
      {"month_of_crash": 11, "hour_of_crash": 8, "crash_cnt": 86},
      {"month_of_crash": 11, "hour_of_crash": 9, "crash_cnt": 79},
      {"month_of_crash": 11, "hour_of_crash": 10, "crash_cnt": 98},
      {"month_of_crash": 11, "hour_of_crash": 11, "crash_cnt": 92},
      {"month_of_crash": 11, "hour_of_crash": 12, "crash_cnt": 109},
      {"month_of_crash": 11, "hour_of_crash": 13, "crash_cnt": 105},
      {"month_of_crash": 11, "hour_of_crash": 14, "crash_cnt": 145},
      {"month_of_crash": 11, "hour_of_crash": 15, "crash_cnt": 147},
      {"month_of_crash": 11, "hour_of_crash": 16, "crash_cnt": 170},
      {"month_of_crash": 11, "hour_of_crash": 17, "crash_cnt": 240},
      {"month_of_crash": 11, "hour_of_crash": 18, "crash_cnt": 247},
      {"month_of_crash": 11, "hour_of_crash": 19, "crash_cnt": 167},
      {"month_of_crash": 11, "hour_of_crash": 20, "crash_cnt": 142},
      {"month_of_crash": 11, "hour_of_crash": 21, "crash_cnt": 111},
      {"month_of_crash": 11, "hour_of_crash": 22, "crash_cnt": 125},
      {"month_of_crash": 11, "hour_of_crash": 23, "crash_cnt": 136},
      {"month_of_crash": 12, "hour_of_crash": 0, "crash_cnt": 100},
      {"month_of_crash": 12, "hour_of_crash": 1, "crash_cnt": 120},
      {"month_of_crash": 12, "hour_of_crash": 2, "crash_cnt": 101},
      {"month_of_crash": 12, "hour_of_crash": 3, "crash_cnt": 73},
      {"month_of_crash": 12, "hour_of_crash": 4, "crash_cnt": 59},
      {"month_of_crash": 12, "hour_of_crash": 5, "crash_cnt": 107},
      {"month_of_crash": 12, "hour_of_crash": 6, "crash_cnt": 125},
      {"month_of_crash": 12, "hour_of_crash": 7, "crash_cnt": 89},
      {"month_of_crash": 12, "hour_of_crash": 8, "crash_cnt": 69},
      {"month_of_crash": 12, "hour_of_crash": 9, "crash_cnt": 75},
      {"month_of_crash": 12, "hour_of_crash": 10, "crash_cnt": 74},
      {"month_of_crash": 12, "hour_of_crash": 11, "crash_cnt": 118},
      {"month_of_crash": 12, "hour_of_crash": 12, "crash_cnt": 120},
      {"month_of_crash": 12, "hour_of_crash": 13, "crash_cnt": 100},
      {"month_of_crash": 12, "hour_of_crash": 14, "crash_cnt": 120},
      {"month_of_crash": 12, "hour_of_crash": 15, "crash_cnt": 114},
      {"month_of_crash": 12, "hour_of_crash": 16, "crash_cnt": 139},
      {"month_of_crash": 12, "hour_of_crash": 17, "crash_cnt": 242},
      {"month_of_crash": 12, "hour_of_crash": 18, "crash_cnt": 218},
      {"month_of_crash": 12, "hour_of_crash": 19, "crash_cnt": 186},
      {"month_of_crash": 12, "hour_of_crash": 20, "crash_cnt": 151},
      {"month_of_crash": 12, "hour_of_crash": 21, "crash_cnt": 129},
      {"month_of_crash": 12, "hour_of_crash": 22, "crash_cnt": 129},
      {"month_of_crash": 12, "hour_of_crash": 23, "crash_cnt": 113}
    ]
  }
};
const controlRural =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-579b4809fe1ae1094e2ec266c70169f0"},
  "mark": "point",
  "encoding": {
    "tooltip": [
      {"type": "nominal", "field": "State"},
      {"type": "quantitative", "field": "Functioning Ratio (Rural)"},
      {"type": "quantitative", "field": "Absent Ratio (Rural)"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {
        "title": "Traffic Controls Properly Functioning Ratio (Rural Area)"
      },
      "field": "Functioning Ratio (Rural)"
    },
    "y": {
      "type": "quantitative",
      "axis": {"title": "Traffic Controls Absent Ratio (Rural Area)"},
      "field": "Absent Ratio (Rural)"
    }
  },
  "height": 300,
  "width": 500,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-579b4809fe1ae1094e2ec266c70169f0": [
      {
        "State": "Kentucky",
        "Functioning Ratio (Rural)": 0.37714987714987713,
        "Absent Ratio (Rural)": 0.6203931203931204
      },
      {
        "State": "Colorado",
        "Functioning Ratio (Rural)": 0.2138728323699422,
        "Absent Ratio (Rural)": 0.7861271676300579
      },
      {
        "State": "Illinois",
        "Functioning Ratio (Rural)": 0.21333333333333335,
        "Absent Ratio (Rural)": 0.7783333333333333
      },
      {
        "State": "Louisiana",
        "Functioning Ratio (Rural)": 0.20987654320987653,
        "Absent Ratio (Rural)": 0.7860082304526749
      },
      {
        "State": "Georgia",
        "Functioning Ratio (Rural)": 0.2064516129032258,
        "Absent Ratio (Rural)": 0.7935483870967742
      },
      {
        "State": "Indiana",
        "Functioning Ratio (Rural)": 0.1867007672634271,
        "Absent Ratio (Rural)": 0.8069053708439897
      },
      {
        "State": "Iowa",
        "Functioning Ratio (Rural)": 0.1724137931034483,
        "Absent Ratio (Rural)": 0.8226600985221675
      },
      {
        "State": "Delaware",
        "Functioning Ratio (Rural)": 0.1650485436893204,
        "Absent Ratio (Rural)": 0.8155339805825242
      },
      {
        "State": "Ohio",
        "Functioning Ratio (Rural)": 0.16032608695652173,
        "Absent Ratio (Rural)": 0.8369565217391305
      },
      {
        "State": "Michigan",
        "Functioning Ratio (Rural)": 0.15304347826086956,
        "Absent Ratio (Rural)": 0.8469565217391304
      },
      {
        "State": "Wyoming",
        "Functioning Ratio (Rural)": 0.15126050420168066,
        "Absent Ratio (Rural)": 0.8403361344537815
      },
      {
        "State": "Nebraska",
        "Functioning Ratio (Rural)": 0.1493212669683258,
        "Absent Ratio (Rural)": 0.8461538461538461
      },
      {
        "State": "Nevada",
        "Functioning Ratio (Rural)": 0.14685314685314685,
        "Absent Ratio (Rural)": 0.8531468531468531
      },
      {
        "State": "Florida",
        "Functioning Ratio (Rural)": 0.14509480626545754,
        "Absent Ratio (Rural)": 0.854080791426216
      },
      {
        "State": "Pennsylvania",
        "Functioning Ratio (Rural)": 0.13303769401330376,
        "Absent Ratio (Rural)": 0.8636363636363636
      },
      {
        "State": "Minnesota",
        "Functioning Ratio (Rural)": 0.13095238095238096,
        "Absent Ratio (Rural)": 0.8541666666666666
      },
      {
        "State": "Wisconsin",
        "Functioning Ratio (Rural)": 0.1303538175046555,
        "Absent Ratio (Rural)": 0.8584729981378026
      },
      {
        "State": "California",
        "Functioning Ratio (Rural)": 0.12618724559023067,
        "Absent Ratio (Rural)": 0.8697421981004071
      },
      {
        "State": "Maryland",
        "Functioning Ratio (Rural)": 0.12080536912751678,
        "Absent Ratio (Rural)": 0.8791946308724832
      },
      {
        "State": "Kansas",
        "Functioning Ratio (Rural)": 0.1192214111922141,
        "Absent Ratio (Rural)": 0.8807785888077859
      },
      {
        "State": "Arkansas",
        "Functioning Ratio (Rural)": 0.11836734693877551,
        "Absent Ratio (Rural)": 0.8714285714285714
      },
      {
        "State": "South Carolina",
        "Functioning Ratio (Rural)": 0.11442786069651742,
        "Absent Ratio (Rural)": 0.8843283582089553
      },
      {
        "State": "Oklahoma",
        "Functioning Ratio (Rural)": 0.10619469026548672,
        "Absent Ratio (Rural)": 0.8920353982300885
      },
      {
        "State": "Maine",
        "Functioning Ratio (Rural)": 0.10588235294117647,
        "Absent Ratio (Rural)": 0.8941176470588236
      },
      {
        "State": "South Dakota",
        "Functioning Ratio (Rural)": 0.09401709401709402,
        "Absent Ratio (Rural)": 0.905982905982906
      },
      {
        "State": "Hawaii",
        "Functioning Ratio (Rural)": 0.09375,
        "Absent Ratio (Rural)": 0.90625
      },
      {
        "State": "North Dakota",
        "Functioning Ratio (Rural)": 0.09230769230769231,
        "Absent Ratio (Rural)": 0.8846153846153846
      },
      {
        "State": "Virginia",
        "Functioning Ratio (Rural)": 0.0890302066772655,
        "Absent Ratio (Rural)": 0.9109697933227345
      },
      {
        "State": "Texas",
        "Functioning Ratio (Rural)": 0.08897126969416126,
        "Absent Ratio (Rural)": 0.9101019462465245
      },
      {
        "State": "Connecticut",
        "Functioning Ratio (Rural)": 0.08771929824561403,
        "Absent Ratio (Rural)": 0.9122807017543859
      },
      {
        "State": "Idaho",
        "Functioning Ratio (Rural)": 0.0873015873015873,
        "Absent Ratio (Rural)": 0.9126984126984127
      },
      {
        "State": "North Carolina",
        "Functioning Ratio (Rural)": 0.08726981585268215,
        "Absent Ratio (Rural)": 0.9127301841473179
      },
      {
        "State": "Alabama",
        "Functioning Ratio (Rural)": 0.08571428571428572,
        "Absent Ratio (Rural)": 0.9142857142857143
      },
      {
        "State": "Oregon",
        "Functioning Ratio (Rural)": 0.07598039215686274,
        "Absent Ratio (Rural)": 0.9240196078431373
      },
      {
        "State": "Missouri",
        "Functioning Ratio (Rural)": 0.07513661202185792,
        "Absent Ratio (Rural)": 0.9234972677595629
      },
      {
        "State": "Washington",
        "Functioning Ratio (Rural)": 0.07453416149068323,
        "Absent Ratio (Rural)": 0.9254658385093167
      },
      {
        "State": "Montana",
        "Functioning Ratio (Rural)": 0.07329842931937172,
        "Absent Ratio (Rural)": 0.9267015706806283
      },
      {
        "State": "Mississippi",
        "Functioning Ratio (Rural)": 0.07204610951008646,
        "Absent Ratio (Rural)": 0.9279538904899135
      },
      {
        "State": "Arizona",
        "Functioning Ratio (Rural)": 0.06887755102040816,
        "Absent Ratio (Rural)": 0.8928571428571429
      },
      {
        "State": "West Virginia",
        "Functioning Ratio (Rural)": 0.06635071090047394,
        "Absent Ratio (Rural)": 0.933649289099526
      },
      {
        "State": "New York",
        "Functioning Ratio (Rural)": 0.0631911532385466,
        "Absent Ratio (Rural)": 0.9368088467614534
      },
      {
        "State": "New Jersey",
        "Functioning Ratio (Rural)": 0.0625,
        "Absent Ratio (Rural)": 0.9375
      },
      {
        "State": "New Hampshire",
        "Functioning Ratio (Rural)": 0.05263157894736842,
        "Absent Ratio (Rural)": 0.9473684210526315
      },
      {
        "State": "Tennessee",
        "Functioning Ratio (Rural)": 0.051364365971107544,
        "Absent Ratio (Rural)": 0.9486356340288925
      },
      {
        "State": "Utah",
        "Functioning Ratio (Rural)": 0.039473684210526314,
        "Absent Ratio (Rural)": 0.9605263157894737
      },
      {
        "State": "New Mexico",
        "Functioning Ratio (Rural)": 0.03496503496503497,
        "Absent Ratio (Rural)": 0.958041958041958
      },
      {
        "State": "Alaska",
        "Functioning Ratio (Rural)": 0.01694915254237288,
        "Absent Ratio (Rural)": 0.9830508474576272
      },
      {
        "State": "Vermont",
        "Functioning Ratio (Rural)": 0.01639344262295082,
        "Absent Ratio (Rural)": 0.9836065573770492
      }
    ]
  }
};
const controlLocal =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-f66e4395af8ad4d3dd94f23b8d8b840a"},
  "mark": "point",
  "encoding": {
    "tooltip": [
      {"type": "nominal", "field": "State"},
      {"type": "quantitative", "field": "Functioning Ratio (Urban, Local)"},
      {"type": "quantitative", "field": "Absent Ratio (Urban, Local)"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {
        "title": "Traffic Controls Properly Functioning Ratio (Urban, Local)"
      },
      "field": "Functioning Ratio (Urban, Local)"
    },
    "y": {
      "type": "quantitative",
      "axis": {"title": "Traffic Controls Absent Ratio (Urban, Local)"},
      "field": "Absent Ratio (Urban, Local)"
    }
  },
  "height": 300,
  "width": 500,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-f66e4395af8ad4d3dd94f23b8d8b840a": [
      {
        "State": "Colorado",
        "Functioning Ratio (Urban, Local)": 0.4528301886792453,
        "Absent Ratio (Urban, Local)": 0.5471698113207547
      },
      {
        "State": "New Mexico",
        "Functioning Ratio (Urban, Local)": 0.45054945054945056,
        "Absent Ratio (Urban, Local)": 0.5494505494505495
      },
      {
        "State": "New York",
        "Functioning Ratio (Urban, Local)": 0.41452991452991456,
        "Absent Ratio (Urban, Local)": 0.5790598290598291
      },
      {
        "State": "Virginia",
        "Functioning Ratio (Urban, Local)": 0.40476190476190477,
        "Absent Ratio (Urban, Local)": 0.5714285714285714
      },
      {
        "State": "Nevada",
        "Functioning Ratio (Urban, Local)": 0.39106145251396646,
        "Absent Ratio (Urban, Local)": 0.6089385474860335
      },
      {
        "State": "Maryland",
        "Functioning Ratio (Urban, Local)": 0.3902439024390244,
        "Absent Ratio (Urban, Local)": 0.5853658536585366
      },
      {
        "State": "Arizona",
        "Functioning Ratio (Urban, Local)": 0.38305084745762713,
        "Absent Ratio (Urban, Local)": 0.6135593220338983
      },
      {
        "State": "Michigan",
        "Functioning Ratio (Urban, Local)": 0.382089552238806,
        "Absent Ratio (Urban, Local)": 0.6119402985074627
      },
      {
        "State": "Kansas",
        "Functioning Ratio (Urban, Local)": 0.38144329896907214,
        "Absent Ratio (Urban, Local)": 0.5979381443298969
      },
      {
        "State": "Pennsylvania",
        "Functioning Ratio (Urban, Local)": 0.38144329896907214,
        "Absent Ratio (Urban, Local)": 0.6082474226804123
      },
      {
        "State": "Utah",
        "Functioning Ratio (Urban, Local)": 0.38,
        "Absent Ratio (Urban, Local)": 0.62
      },
      {
        "State": "Illinois",
        "Functioning Ratio (Urban, Local)": 0.3697916666666667,
        "Absent Ratio (Urban, Local)": 0.609375
      },
      {
        "State": "California",
        "Functioning Ratio (Urban, Local)": 0.35566265060240965,
        "Absent Ratio (Urban, Local)": 0.6380722891566265
      },
      {
        "State": "Indiana",
        "Functioning Ratio (Urban, Local)": 0.3524590163934426,
        "Absent Ratio (Urban, Local)": 0.6475409836065574
      },
      {
        "State": "Minnesota",
        "Functioning Ratio (Urban, Local)": 0.35,
        "Absent Ratio (Urban, Local)": 0.6
      },
      {
        "State": "Missouri",
        "Functioning Ratio (Urban, Local)": 0.3487179487179487,
        "Absent Ratio (Urban, Local)": 0.6512820512820513
      },
      {
        "State": "Wisconsin",
        "Functioning Ratio (Urban, Local)": 0.34710743801652894,
        "Absent Ratio (Urban, Local)": 0.6528925619834711
      },
      {
        "State": "Kentucky",
        "Functioning Ratio (Urban, Local)": 0.3469387755102041,
        "Absent Ratio (Urban, Local)": 0.6530612244897959
      },
      {
        "State": "Washington",
        "Functioning Ratio (Urban, Local)": 0.33707865168539325,
        "Absent Ratio (Urban, Local)": 0.6573033707865169
      },
      {
        "State": "Alaska",
        "Functioning Ratio (Urban, Local)": 0.3235294117647059,
        "Absent Ratio (Urban, Local)": 0.6764705882352942
      },
      {
        "State": "Florida",
        "Functioning Ratio (Urban, Local)": 0.31767955801104975,
        "Absent Ratio (Urban, Local)": 0.6740331491712708
      },
      {
        "State": "Alabama",
        "Functioning Ratio (Urban, Local)": 0.3037037037037037,
        "Absent Ratio (Urban, Local)": 0.6962962962962963
      },
      {
        "State": "Oregon",
        "Functioning Ratio (Urban, Local)": 0.30097087378640774,
        "Absent Ratio (Urban, Local)": 0.6893203883495146
      },
      {
        "State": "Georgia",
        "Functioning Ratio (Urban, Local)": 0.2840909090909091,
        "Absent Ratio (Urban, Local)": 0.7045454545454546
      },
      {
        "State": "Nebraska",
        "Functioning Ratio (Urban, Local)": 0.28,
        "Absent Ratio (Urban, Local)": 0.72
      },
      {
        "State": "Iowa",
        "Functioning Ratio (Urban, Local)": 0.2714285714285714,
        "Absent Ratio (Urban, Local)": 0.7285714285714285
      },
      {
        "State": "Texas",
        "Functioning Ratio (Urban, Local)": 0.25302325581395346,
        "Absent Ratio (Urban, Local)": 0.7432558139534884
      },
      {
        "State": "Connecticut",
        "Functioning Ratio (Urban, Local)": 0.24,
        "Absent Ratio (Urban, Local)": 0.76
      },
      {
        "State": "Oklahoma",
        "Functioning Ratio (Urban, Local)": 0.2389937106918239,
        "Absent Ratio (Urban, Local)": 0.7232704402515723
      },
      {
        "State": "New Jersey",
        "Functioning Ratio (Urban, Local)": 0.23529411764705882,
        "Absent Ratio (Urban, Local)": 0.7647058823529411
      },
      {
        "State": "Louisiana",
        "Functioning Ratio (Urban, Local)": 0.21978021978021978,
        "Absent Ratio (Urban, Local)": 0.7142857142857143
      },
      {
        "State": "District of Columbia",
        "Functioning Ratio (Urban, Local)": 0.21212121212121213,
        "Absent Ratio (Urban, Local)": 0.7575757575757576
      },
      {
        "State": "North Carolina",
        "Functioning Ratio (Urban, Local)": 0.2054794520547945,
        "Absent Ratio (Urban, Local)": 0.773972602739726
      },
      {
        "State": "Ohio",
        "Functioning Ratio (Urban, Local)": 0.18340611353711792,
        "Absent Ratio (Urban, Local)": 0.8122270742358079
      },
      {
        "State": "Arkansas",
        "Functioning Ratio (Urban, Local)": 0.17073170731707318,
        "Absent Ratio (Urban, Local)": 0.8292682926829268
      },
      {
        "State": "Tennessee",
        "Functioning Ratio (Urban, Local)": 0.155,
        "Absent Ratio (Urban, Local)": 0.845
      },
      {
        "State": "Mississippi",
        "Functioning Ratio (Urban, Local)": 0.140625,
        "Absent Ratio (Urban, Local)": 0.859375
      }
    ]
  }
};
const rescueUrban =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-00c12168da2a307c5775f4ffe1bc8251"},
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "interval_type",
      "legend": {"title": "Interval Type"},
      "scale": {"range": ["#d73027", "#FFFFBF", "#98eab0"]},
      "sort": ["crash2notification", "notification2arrival", "arrival2hospital"]
    },
    "order": {"type": "nominal", "field": "order"},
    "tooltip": [
      {"type": "nominal", "field": "state_name"},
      {"type": "nominal", "field": "interval_type"},
      {"type": "quantitative", "aggregate": "sum", "field": "time"}
    ],
    "x": {"type": "nominal", "axis": {"title": "State"}, "field": "state_name"},
    "y": {
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {"title": "Time in minutes"},
      "field": "time"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.interval_type === 'crash2notification', 0, if(datum.interval_type === 'notification2arrival', 1, 2))",
      "as": "order"
    }
  ],
  "width": 600,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-00c12168da2a307c5775f4ffe1bc8251": [
      {
        "state_name": "Oregon",
        "interval_type": "crash2notification",
        "time": 2
      },
      {
        "state_name": "Oregon",
        "interval_type": "notification2arrival",
        "time": 8.217391304347826
      },
      {
        "state_name": "Oregon",
        "interval_type": "arrival2hospital",
        "time": 27.304347826086957
      },
      {
        "state_name": "South Dakota",
        "interval_type": "crash2notification",
        "time": 2
      },
      {
        "state_name": "South Dakota",
        "interval_type": "notification2arrival",
        "time": 6.5
      },
      {
        "state_name": "South Dakota",
        "interval_type": "arrival2hospital",
        "time": 22.25
      },
      {
        "state_name": "Wyoming",
        "interval_type": "crash2notification",
        "time": 3
      },
      {
        "state_name": "Wyoming",
        "interval_type": "notification2arrival",
        "time": 6.916666666666666
      },
      {
        "state_name": "Wyoming",
        "interval_type": "arrival2hospital",
        "time": 23.5
      },
      {
        "state_name": "West Virginia",
        "interval_type": "crash2notification",
        "time": 6.5
      },
      {
        "state_name": "West Virginia",
        "interval_type": "notification2arrival",
        "time": 11.499999999999998
      },
      {
        "state_name": "West Virginia",
        "interval_type": "arrival2hospital",
        "time": 30.11538461538462
      },
      {
        "state_name": "California",
        "interval_type": "crash2notification",
        "time": 9
      },
      {
        "state_name": "California",
        "interval_type": "notification2arrival",
        "time": 4.25
      },
      {
        "state_name": "California",
        "interval_type": "arrival2hospital",
        "time": 20
      },
      {
        "state_name": "North Dakota",
        "interval_type": "crash2notification",
        "time": 13.5
      },
      {
        "state_name": "North Dakota",
        "interval_type": "notification2arrival",
        "time": 4.333333333333333
      },
      {
        "state_name": "North Dakota",
        "interval_type": "arrival2hospital",
        "time": 25.333333333333332
      },
      {
        "state_name": "Vermont",
        "interval_type": "crash2notification",
        "time": 20
      },
      {
        "state_name": "Vermont",
        "interval_type": "notification2arrival",
        "time": 10.333333333333332
      },
      {
        "state_name": "Vermont",
        "interval_type": "arrival2hospital",
        "time": 42.66666666666667
      },
      {
        "state_name": "District of Columbia",
        "interval_type": "crash2notification",
        "time": 1.5
      },
      {
        "state_name": "District of Columbia",
        "interval_type": "notification2arrival",
        "time": 2.5
      },
      {
        "state_name": "District of Columbia",
        "interval_type": "arrival2hospital",
        "time": 13
      },
      {
        "state_name": "Montana",
        "interval_type": "crash2notification",
        "time": 2.1250000000000004
      },
      {
        "state_name": "Montana",
        "interval_type": "notification2arrival",
        "time": 6.375
      },
      {
        "state_name": "Montana",
        "interval_type": "arrival2hospital",
        "time": 37.25
      },
      {
        "state_name": "New Mexico",
        "interval_type": "crash2notification",
        "time": 5.000000000000002
      },
      {
        "state_name": "New Mexico",
        "interval_type": "notification2arrival",
        "time": 5.304347826086957
      },
      {
        "state_name": "New Mexico",
        "interval_type": "arrival2hospital",
        "time": 23.89855072463768
      },
      {
        "state_name": "Maryland",
        "interval_type": "crash2notification",
        "time": 6.258064516129033
      },
      {
        "state_name": "Maryland",
        "interval_type": "notification2arrival",
        "time": 9.516129032258062
      },
      {
        "state_name": "Maryland",
        "interval_type": "arrival2hospital",
        "time": 29.06451612903226
      },
      {
        "state_name": "Ohio",
        "interval_type": "crash2notification",
        "time": 12.767515923566878
      },
      {
        "state_name": "Ohio",
        "interval_type": "notification2arrival",
        "time": 7.10191082802548
      },
      {
        "state_name": "Ohio",
        "interval_type": "arrival2hospital",
        "time": 25.75159235668789
      },
      {
        "state_name": "Alabama",
        "interval_type": "crash2notification",
        "time": 6.76
      },
      {
        "state_name": "Alabama",
        "interval_type": "notification2arrival",
        "time": 7.3599999999999985
      },
      {
        "state_name": "Alabama",
        "interval_type": "arrival2hospital",
        "time": 28.040000000000003
      },
      {
        "state_name": "Oklahoma",
        "interval_type": "crash2notification",
        "time": 6.287356321839082
      },
      {
        "state_name": "Oklahoma",
        "interval_type": "notification2arrival",
        "time": 22.436781609195407
      },
      {
        "state_name": "Oklahoma",
        "interval_type": "arrival2hospital",
        "time": 31.597701149425273
      },
      {
        "state_name": "Rhode Island",
        "interval_type": "crash2notification",
        "time": 4.2666666666666675
      },
      {
        "state_name": "Rhode Island",
        "interval_type": "notification2arrival",
        "time": 5.333333333333333
      },
      {
        "state_name": "Rhode Island",
        "interval_type": "arrival2hospital",
        "time": 21.733333333333334
      },
      {
        "state_name": "Kansas",
        "interval_type": "crash2notification",
        "time": 21.39130434782609
      },
      {
        "state_name": "Kansas",
        "interval_type": "notification2arrival",
        "time": 5.5434782608695645
      },
      {
        "state_name": "Kansas",
        "interval_type": "arrival2hospital",
        "time": 20.673913043478258
      },
      {
        "state_name": "New Jersey",
        "interval_type": "crash2notification",
        "time": 13.059999999999997
      },
      {
        "state_name": "New Jersey",
        "interval_type": "notification2arrival",
        "time": 7.790000000000001
      },
      {
        "state_name": "New Jersey",
        "interval_type": "arrival2hospital",
        "time": 31.32
      },
      {
        "state_name": "Utah",
        "interval_type": "crash2notification",
        "time": 5.222222222222222
      },
      {
        "state_name": "Utah",
        "interval_type": "notification2arrival",
        "time": 7.055555555555557
      },
      {
        "state_name": "Utah",
        "interval_type": "arrival2hospital",
        "time": 27.94444444444444
      },
      {
        "state_name": "Pennsylvania",
        "interval_type": "crash2notification",
        "time": 3.605042016806723
      },
      {
        "state_name": "Pennsylvania",
        "interval_type": "notification2arrival",
        "time": 6.075630252100837
      },
      {
        "state_name": "Pennsylvania",
        "interval_type": "arrival2hospital",
        "time": 29.747899159663866
      },
      {
        "state_name": "Virginia",
        "interval_type": "crash2notification",
        "time": 27.646153846153847
      },
      {
        "state_name": "Virginia",
        "interval_type": "notification2arrival",
        "time": 8.307692307692307
      },
      {
        "state_name": "Virginia",
        "interval_type": "arrival2hospital",
        "time": 29.569230769230774
      },
      {
        "state_name": "Colorado",
        "interval_type": "crash2notification",
        "time": 2.0500000000000003
      },
      {
        "state_name": "Colorado",
        "interval_type": "notification2arrival",
        "time": 4.416666666666669
      },
      {
        "state_name": "Colorado",
        "interval_type": "arrival2hospital",
        "time": 22.916666666666664
      },
      {
        "state_name": "Nebraska",
        "interval_type": "crash2notification",
        "time": 3.6818181818181817
      },
      {
        "state_name": "Nebraska",
        "interval_type": "notification2arrival",
        "time": 4.454545454545455
      },
      {
        "state_name": "Nebraska",
        "interval_type": "arrival2hospital",
        "time": 20.09090909090909
      },
      {
        "state_name": "Missouri",
        "interval_type": "crash2notification",
        "time": 5.992647058823531
      },
      {
        "state_name": "Missouri",
        "interval_type": "notification2arrival",
        "time": 7.713235294117649
      },
      {
        "state_name": "Missouri",
        "interval_type": "arrival2hospital",
        "time": 25.617647058823522
      },
      {
        "state_name": "Louisiana",
        "interval_type": "crash2notification",
        "time": 9.740000000000002
      },
      {
        "state_name": "Louisiana",
        "interval_type": "notification2arrival",
        "time": 8.279999999999998
      },
      {
        "state_name": "Louisiana",
        "interval_type": "arrival2hospital",
        "time": 35.41333333333333
      },
      {
        "state_name": "Kentucky",
        "interval_type": "crash2notification",
        "time": 4.351648351648353
      },
      {
        "state_name": "Kentucky",
        "interval_type": "notification2arrival",
        "time": 6.56043956043956
      },
      {
        "state_name": "Kentucky",
        "interval_type": "arrival2hospital",
        "time": 26.813186813186817
      },
      {
        "state_name": "Maine",
        "interval_type": "crash2notification",
        "time": 4.882352941176471
      },
      {
        "state_name": "Maine",
        "interval_type": "notification2arrival",
        "time": 8.294117647058824
      },
      {
        "state_name": "Maine",
        "interval_type": "arrival2hospital",
        "time": 29.294117647058822
      },
      {
        "state_name": "Tennessee",
        "interval_type": "crash2notification",
        "time": 6.5714285714285685
      },
      {
        "state_name": "Tennessee",
        "interval_type": "notification2arrival",
        "time": 6.597402597402599
      },
      {
        "state_name": "Tennessee",
        "interval_type": "arrival2hospital",
        "time": 34.42857142857143
      },
      {
        "state_name": "Texas",
        "interval_type": "crash2notification",
        "time": 8.944244604316546
      },
      {
        "state_name": "Texas",
        "interval_type": "notification2arrival",
        "time": 8.417266187050359
      },
      {
        "state_name": "Texas",
        "interval_type": "arrival2hospital",
        "time": 27.642086330935243
      },
      {
        "state_name": "Wisconsin",
        "interval_type": "crash2notification",
        "time": 3.823529411764706
      },
      {
        "state_name": "Wisconsin",
        "interval_type": "notification2arrival",
        "time": 5
      },
      {
        "state_name": "Wisconsin",
        "interval_type": "arrival2hospital",
        "time": 33.58823529411765
      },
      {
        "state_name": "New York",
        "interval_type": "crash2notification",
        "time": 3.957894736842106
      },
      {
        "state_name": "New York",
        "interval_type": "notification2arrival",
        "time": 5.568421052631578
      },
      {
        "state_name": "New York",
        "interval_type": "arrival2hospital",
        "time": 27.936842105263143
      },
      {
        "state_name": "Minnesota",
        "interval_type": "crash2notification",
        "time": 2.473684210526316
      },
      {
        "state_name": "Minnesota",
        "interval_type": "notification2arrival",
        "time": 6.131578947368421
      },
      {
        "state_name": "Minnesota",
        "interval_type": "arrival2hospital",
        "time": 25.000000000000004
      },
      {
        "state_name": "New Hampshire",
        "interval_type": "crash2notification",
        "time": 1.1666666666666665
      },
      {
        "state_name": "New Hampshire",
        "interval_type": "notification2arrival",
        "time": 11.333333333333334
      },
      {
        "state_name": "New Hampshire",
        "interval_type": "arrival2hospital",
        "time": 24.666666666666668
      },
      {
        "state_name": "Alaska",
        "interval_type": "crash2notification",
        "time": 2.8333333333333335
      },
      {
        "state_name": "Alaska",
        "interval_type": "notification2arrival",
        "time": 6.333333333333333
      },
      {
        "state_name": "Alaska",
        "interval_type": "arrival2hospital",
        "time": 27.333333333333332
      },
      {
        "state_name": "Washington",
        "interval_type": "crash2notification",
        "time": 14.740740740740744
      },
      {
        "state_name": "Washington",
        "interval_type": "notification2arrival",
        "time": 16.59259259259259
      },
      {
        "state_name": "Washington",
        "interval_type": "arrival2hospital",
        "time": 45.51851851851852
      },
      {
        "state_name": "Nevada",
        "interval_type": "crash2notification",
        "time": 2.3650793650793647
      },
      {
        "state_name": "Nevada",
        "interval_type": "notification2arrival",
        "time": 6.063492063492066
      },
      {
        "state_name": "Nevada",
        "interval_type": "arrival2hospital",
        "time": 23.793650793650794
      },
      {
        "state_name": "South Carolina",
        "interval_type": "crash2notification",
        "time": 10.113636363636363
      },
      {
        "state_name": "South Carolina",
        "interval_type": "notification2arrival",
        "time": 9.034090909090914
      },
      {
        "state_name": "South Carolina",
        "interval_type": "arrival2hospital",
        "time": 23.727272727272716
      },
      {
        "state_name": "Connecticut",
        "interval_type": "crash2notification",
        "time": 3.958904109589041
      },
      {
        "state_name": "Connecticut",
        "interval_type": "notification2arrival",
        "time": 6.2465753424657535
      },
      {
        "state_name": "Connecticut",
        "interval_type": "arrival2hospital",
        "time": 27.26027397260274
      },
      {
        "state_name": "Massachusetts",
        "interval_type": "crash2notification",
        "time": 4.755102040816327
      },
      {
        "state_name": "Massachusetts",
        "interval_type": "notification2arrival",
        "time": 6.081632653061225
      },
      {
        "state_name": "Massachusetts",
        "interval_type": "arrival2hospital",
        "time": 30.05102040816326
      },
      {
        "state_name": "Delaware",
        "interval_type": "crash2notification",
        "time": 2.4705882352941178
      },
      {
        "state_name": "Delaware",
        "interval_type": "notification2arrival",
        "time": 4.352941176470588
      },
      {
        "state_name": "Delaware",
        "interval_type": "arrival2hospital",
        "time": 19.705882352941174
      },
      {
        "state_name": "Arkansas",
        "interval_type": "crash2notification",
        "time": 6.193548387096776
      },
      {
        "state_name": "Arkansas",
        "interval_type": "notification2arrival",
        "time": 6.516129032258063
      },
      {
        "state_name": "Arkansas",
        "interval_type": "arrival2hospital",
        "time": 27.58064516129032
      },
      {
        "state_name": "North Carolina",
        "interval_type": "crash2notification",
        "time": 12.247422680412365
      },
      {
        "state_name": "North Carolina",
        "interval_type": "notification2arrival",
        "time": 7.886597938144326
      },
      {
        "state_name": "North Carolina",
        "interval_type": "arrival2hospital",
        "time": 30.979381443298966
      },
      {
        "state_name": "Georgia",
        "interval_type": "crash2notification",
        "time": 10.719827586206899
      },
      {
        "state_name": "Georgia",
        "interval_type": "notification2arrival",
        "time": 8.288793103448276
      },
      {
        "state_name": "Georgia",
        "interval_type": "arrival2hospital",
        "time": 34.04741379310347
      },
      {
        "state_name": "Mississippi",
        "interval_type": "crash2notification",
        "time": 7.763157894736842
      },
      {
        "state_name": "Mississippi",
        "interval_type": "notification2arrival",
        "time": 8.526315789473685
      },
      {
        "state_name": "Mississippi",
        "interval_type": "arrival2hospital",
        "time": 31.97368421052631
      },
      {
        "state_name": "Iowa",
        "interval_type": "crash2notification",
        "time": 3.7333333333333334
      },
      {
        "state_name": "Iowa",
        "interval_type": "notification2arrival",
        "time": 6.1000000000000005
      },
      {
        "state_name": "Iowa",
        "interval_type": "arrival2hospital",
        "time": 21.96666666666667
      },
      {
        "state_name": "Arizona",
        "interval_type": "crash2notification",
        "time": 2.5384615384615374
      },
      {
        "state_name": "Arizona",
        "interval_type": "notification2arrival",
        "time": 5.2197802197802226
      },
      {
        "state_name": "Arizona",
        "interval_type": "arrival2hospital",
        "time": 22.961538461538463
      },
      {
        "state_name": "Hawaii",
        "interval_type": "crash2notification",
        "time": 3.999999999999999
      },
      {
        "state_name": "Hawaii",
        "interval_type": "notification2arrival",
        "time": 7
      },
      {
        "state_name": "Hawaii",
        "interval_type": "arrival2hospital",
        "time": 28.588235294117652
      }
    ]
  }
};
const rescueRural =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-8364efc43b1e0c9794a9f45c8929a614"},
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "interval_type",
      "legend": {"title": "Interval Type"},
      "scale": {"range": ["#d73027", "#FFFFBF", "#98eab0"]},
      "sort": ["crash2notification", "notification2arrival", "arrival2hospital"]
    },
    "order": {"type": "nominal", "field": "order"},
    "tooltip": [
      {"type": "nominal", "field": "state_name"},
      {"type": "nominal", "field": "interval_type"},
      {"type": "quantitative", "aggregate": "sum", "field": "time"}
    ],
    "x": {"type": "nominal", "axis": {"title": "State"}, "field": "state_name"},
    "y": {
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {"title": "Time in minutes"},
      "field": "time"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.interval_type === 'crash2notification', 0, if(datum.interval_type === 'notification2arrival', 1, 2))",
      "as": "order"
    }
  ],
  "width": 600,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-8364efc43b1e0c9794a9f45c8929a614": [
      {
        "state_name": "Massachusetts",
        "interval_type": "crash2notification",
        "time": 2
      },
      {
        "state_name": "Massachusetts",
        "interval_type": "notification2arrival",
        "time": 4
      },
      {
        "state_name": "Massachusetts",
        "interval_type": "arrival2hospital",
        "time": 24
      },
      {
        "state_name": "Connecticut",
        "interval_type": "crash2notification",
        "time": 4.75
      },
      {
        "state_name": "Connecticut",
        "interval_type": "notification2arrival",
        "time": 11.75
      },
      {
        "state_name": "Connecticut",
        "interval_type": "arrival2hospital",
        "time": 31.75
      },
      {
        "state_name": "Rhode Island",
        "interval_type": "crash2notification",
        "time": 6
      },
      {
        "state_name": "Rhode Island",
        "interval_type": "notification2arrival",
        "time": 7.75
      },
      {
        "state_name": "Rhode Island",
        "interval_type": "arrival2hospital",
        "time": 40.25
      },
      {
        "state_name": "Maryland",
        "interval_type": "crash2notification",
        "time": 6
      },
      {
        "state_name": "Maryland",
        "interval_type": "notification2arrival",
        "time": 9
      },
      {
        "state_name": "Maryland",
        "interval_type": "arrival2hospital",
        "time": 35.333333333333336
      },
      {
        "state_name": "Iowa",
        "interval_type": "crash2notification",
        "time": 8.03125
      },
      {
        "state_name": "Iowa",
        "interval_type": "notification2arrival",
        "time": 13.421874999999996
      },
      {
        "state_name": "Iowa",
        "interval_type": "arrival2hospital",
        "time": 33.20312500000001
      },
      {
        "state_name": "New Hampshire",
        "interval_type": "crash2notification",
        "time": 3.0000000000000004
      },
      {
        "state_name": "New Hampshire",
        "interval_type": "notification2arrival",
        "time": 12.333333333333336
      },
      {
        "state_name": "New Hampshire",
        "interval_type": "arrival2hospital",
        "time": 26.761904761904763
      },
      {
        "state_name": "Alabama",
        "interval_type": "crash2notification",
        "time": 9.635761589403973
      },
      {
        "state_name": "Alabama",
        "interval_type": "notification2arrival",
        "time": 15.158940397350985
      },
      {
        "state_name": "Alabama",
        "interval_type": "arrival2hospital",
        "time": 36.43046357615896
      },
      {
        "state_name": "Minnesota",
        "interval_type": "crash2notification",
        "time": 4.719298245614036
      },
      {
        "state_name": "Minnesota",
        "interval_type": "notification2arrival",
        "time": 10.649122807017541
      },
      {
        "state_name": "Minnesota",
        "interval_type": "arrival2hospital",
        "time": 37.333333333333336
      },
      {
        "state_name": "Kentucky",
        "interval_type": "crash2notification",
        "time": 4.776744186046513
      },
      {
        "state_name": "Kentucky",
        "interval_type": "notification2arrival",
        "time": 11.255813953488374
      },
      {
        "state_name": "Kentucky",
        "interval_type": "arrival2hospital",
        "time": 39.29767441860463
      },
      {
        "state_name": "Kansas",
        "interval_type": "crash2notification",
        "time": 12.63076923076923
      },
      {
        "state_name": "Kansas",
        "interval_type": "notification2arrival",
        "time": 12.153846153846159
      },
      {
        "state_name": "Kansas",
        "interval_type": "arrival2hospital",
        "time": 33.85384615384617
      },
      {
        "state_name": "Utah",
        "interval_type": "crash2notification",
        "time": 5.722222222222221
      },
      {
        "state_name": "Utah",
        "interval_type": "notification2arrival",
        "time": 17.111111111111114
      },
      {
        "state_name": "Utah",
        "interval_type": "arrival2hospital",
        "time": 55.30555555555555
      },
      {
        "state_name": "Arkansas",
        "interval_type": "crash2notification",
        "time": 6.224489795918367
      },
      {
        "state_name": "Arkansas",
        "interval_type": "notification2arrival",
        "time": 15.306122448979588
      },
      {
        "state_name": "Arkansas",
        "interval_type": "arrival2hospital",
        "time": 45.93877551020408
      },
      {
        "state_name": "Oregon",
        "interval_type": "crash2notification",
        "time": 12.194444444444445
      },
      {
        "state_name": "Oregon",
        "interval_type": "notification2arrival",
        "time": 21.611111111111114
      },
      {
        "state_name": "Oregon",
        "interval_type": "arrival2hospital",
        "time": 44.75
      },
      {
        "state_name": "Oklahoma",
        "interval_type": "crash2notification",
        "time": 14.393442622950818
      },
      {
        "state_name": "Oklahoma",
        "interval_type": "notification2arrival",
        "time": 19.24590163934426
      },
      {
        "state_name": "Oklahoma",
        "interval_type": "arrival2hospital",
        "time": 53.721311475409834
      },
      {
        "state_name": "Maine",
        "interval_type": "crash2notification",
        "time": 11.278688524590164
      },
      {
        "state_name": "Maine",
        "interval_type": "notification2arrival",
        "time": 9.967213114754093
      },
      {
        "state_name": "Maine",
        "interval_type": "arrival2hospital",
        "time": 35.24590163934426
      },
      {
        "state_name": "Arizona",
        "interval_type": "crash2notification",
        "time": 7.40983606557377
      },
      {
        "state_name": "Arizona",
        "interval_type": "notification2arrival",
        "time": 18.57377049180328
      },
      {
        "state_name": "Arizona",
        "interval_type": "arrival2hospital",
        "time": 60.278688524590144
      },
      {
        "state_name": "Tennessee",
        "interval_type": "crash2notification",
        "time": 19.08333333333334
      },
      {
        "state_name": "Tennessee",
        "interval_type": "notification2arrival",
        "time": 12.020833333333334
      },
      {
        "state_name": "Tennessee",
        "interval_type": "arrival2hospital",
        "time": 55.083333333333336
      },
      {
        "state_name": "West Virginia",
        "interval_type": "crash2notification",
        "time": 7.655172413793104
      },
      {
        "state_name": "West Virginia",
        "interval_type": "notification2arrival",
        "time": 14.206896551724139
      },
      {
        "state_name": "West Virginia",
        "interval_type": "arrival2hospital",
        "time": 38.93103448275862
      },
      {
        "state_name": "Hawaii",
        "interval_type": "crash2notification",
        "time": 2.5454545454545454
      },
      {
        "state_name": "Hawaii",
        "interval_type": "notification2arrival",
        "time": 12.363636363636363
      },
      {
        "state_name": "Hawaii",
        "interval_type": "arrival2hospital",
        "time": 36.27272727272727
      },
      {
        "state_name": "New Mexico",
        "interval_type": "crash2notification",
        "time": 10.931818181818182
      },
      {
        "state_name": "New Mexico",
        "interval_type": "notification2arrival",
        "time": 17.795454545454543
      },
      {
        "state_name": "New Mexico",
        "interval_type": "arrival2hospital",
        "time": 54.56818181818182
      },
      {
        "state_name": "Wyoming",
        "interval_type": "crash2notification",
        "time": 5.880952380952381
      },
      {
        "state_name": "Wyoming",
        "interval_type": "notification2arrival",
        "time": 19.928571428571423
      },
      {
        "state_name": "Wyoming",
        "interval_type": "arrival2hospital",
        "time": 46.49999999999999
      },
      {
        "state_name": "Vermont",
        "interval_type": "crash2notification",
        "time": 5.615384615384616
      },
      {
        "state_name": "Vermont",
        "interval_type": "notification2arrival",
        "time": 8.153846153846155
      },
      {
        "state_name": "Vermont",
        "interval_type": "arrival2hospital",
        "time": 42.15384615384616
      },
      {
        "state_name": "Virginia",
        "interval_type": "crash2notification",
        "time": 18.844155844155836
      },
      {
        "state_name": "Virginia",
        "interval_type": "notification2arrival",
        "time": 15.077922077922073
      },
      {
        "state_name": "Virginia",
        "interval_type": "arrival2hospital",
        "time": 49.597402597402606
      },
      {
        "state_name": "Alaska",
        "interval_type": "crash2notification",
        "time": 3.2142857142857144
      },
      {
        "state_name": "Alaska",
        "interval_type": "notification2arrival",
        "time": 10.928571428571429
      },
      {
        "state_name": "Alaska",
        "interval_type": "arrival2hospital",
        "time": 34.92857142857143
      },
      {
        "state_name": "North Dakota",
        "interval_type": "crash2notification",
        "time": 5.482758620689656
      },
      {
        "state_name": "North Dakota",
        "interval_type": "notification2arrival",
        "time": 12.896551724137929
      },
      {
        "state_name": "North Dakota",
        "interval_type": "arrival2hospital",
        "time": 41.48275862068965
      },
      {
        "state_name": "New Jersey",
        "interval_type": "crash2notification",
        "time": 4.882352941176471
      },
      {
        "state_name": "New Jersey",
        "interval_type": "notification2arrival",
        "time": 14.411764705882353
      },
      {
        "state_name": "New Jersey",
        "interval_type": "arrival2hospital",
        "time": 38.94117647058823
      },
      {
        "state_name": "Washington",
        "interval_type": "crash2notification",
        "time": 24.548387096774192
      },
      {
        "state_name": "Washington",
        "interval_type": "notification2arrival",
        "time": 23.483870967741936
      },
      {
        "state_name": "Washington",
        "interval_type": "arrival2hospital",
        "time": 59.35483870967741
      },
      {
        "state_name": "Louisiana",
        "interval_type": "crash2notification",
        "time": 6.883561643835617
      },
      {
        "state_name": "Louisiana",
        "interval_type": "notification2arrival",
        "time": 13.171232876712327
      },
      {
        "state_name": "Louisiana",
        "interval_type": "arrival2hospital",
        "time": 46.02054794520548
      },
      {
        "state_name": "Montana",
        "interval_type": "crash2notification",
        "time": 9.799999999999999
      },
      {
        "state_name": "Montana",
        "interval_type": "notification2arrival",
        "time": 14.96666666666667
      },
      {
        "state_name": "Montana",
        "interval_type": "arrival2hospital",
        "time": 45.91666666666667
      },
      {
        "state_name": "Pennsylvania",
        "interval_type": "crash2notification",
        "time": 15.471264367816097
      },
      {
        "state_name": "Pennsylvania",
        "interval_type": "notification2arrival",
        "time": 9.919540229885056
      },
      {
        "state_name": "Pennsylvania",
        "interval_type": "arrival2hospital",
        "time": 55.29885057471264
      },
      {
        "state_name": "New York",
        "interval_type": "crash2notification",
        "time": 7.159090909090907
      },
      {
        "state_name": "New York",
        "interval_type": "notification2arrival",
        "time": 13.215909090909088
      },
      {
        "state_name": "New York",
        "interval_type": "arrival2hospital",
        "time": 55.47727272727272
      },
      {
        "state_name": "Ohio",
        "interval_type": "crash2notification",
        "time": 11.115879828326179
      },
      {
        "state_name": "Ohio",
        "interval_type": "notification2arrival",
        "time": 12.347639484978545
      },
      {
        "state_name": "Ohio",
        "interval_type": "arrival2hospital",
        "time": 39.61802575107298
      },
      {
        "state_name": "Nevada",
        "interval_type": "crash2notification",
        "time": 9.333333333333334
      },
      {
        "state_name": "Nevada",
        "interval_type": "notification2arrival",
        "time": 21.22222222222222
      },
      {
        "state_name": "Nevada",
        "interval_type": "arrival2hospital",
        "time": 53.555555555555564
      },
      {
        "state_name": "Wisconsin",
        "interval_type": "crash2notification",
        "time": 3.6379310344827576
      },
      {
        "state_name": "Wisconsin",
        "interval_type": "notification2arrival",
        "time": 10.10344827586207
      },
      {
        "state_name": "Wisconsin",
        "interval_type": "arrival2hospital",
        "time": 37.41379310344827
      },
      {
        "state_name": "South Dakota",
        "interval_type": "crash2notification",
        "time": 7.275862068965516
      },
      {
        "state_name": "South Dakota",
        "interval_type": "notification2arrival",
        "time": 13.79310344827586
      },
      {
        "state_name": "South Dakota",
        "interval_type": "arrival2hospital",
        "time": 32.20689655172414
      },
      {
        "state_name": "South Carolina",
        "interval_type": "crash2notification",
        "time": 11.24175824175824
      },
      {
        "state_name": "South Carolina",
        "interval_type": "notification2arrival",
        "time": 13.285714285714286
      },
      {
        "state_name": "South Carolina",
        "interval_type": "arrival2hospital",
        "time": 29.527472527472522
      },
      {
        "state_name": "Georgia",
        "interval_type": "crash2notification",
        "time": 8.491666666666672
      },
      {
        "state_name": "Georgia",
        "interval_type": "notification2arrival",
        "time": 12.241666666666664
      },
      {
        "state_name": "Georgia",
        "interval_type": "arrival2hospital",
        "time": 44.566666666666656
      },
      {
        "state_name": "North Carolina",
        "interval_type": "crash2notification",
        "time": 9.24285714285714
      },
      {
        "state_name": "North Carolina",
        "interval_type": "notification2arrival",
        "time": 11.399999999999999
      },
      {
        "state_name": "North Carolina",
        "interval_type": "arrival2hospital",
        "time": 41.6
      },
      {
        "state_name": "Colorado",
        "interval_type": "crash2notification",
        "time": 16.428571428571434
      },
      {
        "state_name": "Colorado",
        "interval_type": "notification2arrival",
        "time": 12.71428571428571
      },
      {
        "state_name": "Colorado",
        "interval_type": "arrival2hospital",
        "time": 38.42857142857142
      },
      {
        "state_name": "Missouri",
        "interval_type": "crash2notification",
        "time": 15.429347826086957
      },
      {
        "state_name": "Missouri",
        "interval_type": "notification2arrival",
        "time": 15.706521739130432
      },
      {
        "state_name": "Missouri",
        "interval_type": "arrival2hospital",
        "time": 46.42391304347827
      },
      {
        "state_name": "Delaware",
        "interval_type": "crash2notification",
        "time": 3.2105263157894735
      },
      {
        "state_name": "Delaware",
        "interval_type": "notification2arrival",
        "time": 7.7894736842105265
      },
      {
        "state_name": "Delaware",
        "interval_type": "arrival2hospital",
        "time": 39.71052631578948
      },
      {
        "state_name": "Texas",
        "interval_type": "crash2notification",
        "time": 12.991869918699182
      },
      {
        "state_name": "Texas",
        "interval_type": "notification2arrival",
        "time": 17.36043360433604
      },
      {
        "state_name": "Texas",
        "interval_type": "arrival2hospital",
        "time": 45.609756097560975
      },
      {
        "state_name": "Mississippi",
        "interval_type": "crash2notification",
        "time": 8.11650485436893
      },
      {
        "state_name": "Mississippi",
        "interval_type": "notification2arrival",
        "time": 12.980582524271846
      },
      {
        "state_name": "Mississippi",
        "interval_type": "arrival2hospital",
        "time": 35.66990291262134
      },
      {
        "state_name": "Nebraska",
        "interval_type": "crash2notification",
        "time": 4.999999999999999
      },
      {
        "state_name": "Nebraska",
        "interval_type": "notification2arrival",
        "time": 11.159090909090908
      },
      {
        "state_name": "Nebraska",
        "interval_type": "arrival2hospital",
        "time": 28.090909090909086
      }
    ]
  }
};
const rescueEMS =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-cdf31b4d511a979a49c967863bcdfa4a"},
  "mark": "point",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "outlier",
      "legend": null,
      "scale": {"range": ["#2776d7", "#d73027"]}
    },
    "tooltip": [
      {"type": "nominal", "field": "State"},
      {"type": "quantitative", "field": "Total Response Time"},
      {"type": "quantitative", "field": "Number of EMS Stations"},
      {"type": "quantitative", "field": "Population"},
      {"type": "quantitative", "field": "EMS Stations Per Capita"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "EMS per capita"},
      "field": "EMS Stations Per Capita"
    },
    "y": {
      "type": "quantitative",
      "axis": {"title": "Average Rescue Response Time"},
      "field": "Total Response Time"
    }
  },
  "height": 300,
  "width": 600,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-cdf31b4d511a979a49c967863bcdfa4a": [
      {
        "State": "Oregon",
        "Total Response Time": 37.52173913043478,
        "Number of EMS Stations": 422,
        "Population": 3970239,
        "EMS Stations Per Capita": 0.00010629083035051542,
        "outlier": ""
      },
      {
        "State": "South Dakota",
        "Total Response Time": 30.75,
        "Number of EMS Stations": 237,
        "Population": 853175,
        "EMS Stations Per Capita": 0.0002777859173088757,
        "outlier": ""
      },
      {
        "State": "Wyoming",
        "Total Response Time": 33.416666666666664,
        "Number of EMS Stations": 173,
        "Population": 584153,
        "EMS Stations Per Capita": 0.0002961552880837726,
        "outlier": ""
      },
      {
        "State": "West Virginia",
        "Total Response Time": 48.11538461538461,
        "Number of EMS Stations": 512,
        "Population": 1850326,
        "EMS Stations Per Capita": 0.0002767079963206484,
        "outlier": ""
      },
      {
        "State": "California",
        "Total Response Time": 33.25,
        "Number of EMS Stations": 2813,
        "Population": 38802500,
        "EMS Stations Per Capita": 0.00007249532890921977,
        "outlier": ""
      },
      {
        "State": "North Dakota",
        "Total Response Time": 43.166666666666664,
        "Number of EMS Stations": 281,
        "Population": 739482,
        "EMS Stations Per Capita": 0.00037999572673844665,
        "outlier": ""
      },
      {
        "State": "Vermont",
        "Total Response Time": 73,
        "Number of EMS Stations": 56,
        "Population": 626562,
        "EMS Stations Per Capita": 0.00008937662992648773,
        "outlier": "Y"
      },
      {
        "State": "Montana",
        "Total Response Time": 45.75,
        "Number of EMS Stations": 193,
        "Population": 1023579,
        "EMS Stations Per Capita": 0.0001885540832705634,
        "outlier": ""
      },
      {
        "State": "New Mexico",
        "Total Response Time": 34.20289855072464,
        "Number of EMS Stations": 461,
        "Population": 2085572,
        "EMS Stations Per Capita": 0.00022104247659634864,
        "outlier": ""
      },
      {
        "State": "Maryland",
        "Total Response Time": 44.83870967741936,
        "Number of EMS Stations": 344,
        "Population": 5976407,
        "EMS Stations Per Capita": 0.00005755966753937609,
        "outlier": ""
      },
      {
        "State": "Ohio",
        "Total Response Time": 45.62101910828024,
        "Number of EMS Stations": 1514,
        "Population": 11594163,
        "EMS Stations Per Capita": 0.00013058294936857452,
        "outlier": ""
      },
      {
        "State": "Alabama",
        "Total Response Time": 42.15999999999999,
        "Number of EMS Stations": 762,
        "Population": 4849377,
        "EMS Stations Per Capita": 0.00015713358643801049,
        "outlier": ""
      },
      {
        "State": "Oklahoma",
        "Total Response Time": 60.32183908045976,
        "Number of EMS Stations": 635,
        "Population": 3878051,
        "EMS Stations Per Capita": 0.00016374204465077947,
        "outlier": ""
      },
      {
        "State": "Rhode Island",
        "Total Response Time": 31.333333333333336,
        "Number of EMS Stations": 90,
        "Population": 1055173,
        "EMS Stations Per Capita": 0.00008529407026146424,
        "outlier": ""
      },
      {
        "State": "Kansas",
        "Total Response Time": 47.60869565217391,
        "Number of EMS Stations": 211,
        "Population": 2904021,
        "EMS Stations Per Capita": 0.00007265787678532627,
        "outlier": ""
      },
      {
        "State": "New Jersey",
        "Total Response Time": 52.16999999999999,
        "Number of EMS Stations": 1090,
        "Population": 8938175,
        "EMS Stations Per Capita": 0.00012194883183647669,
        "outlier": ""
      },
      {
        "State": "Utah",
        "Total Response Time": 40.22222222222223,
        "Number of EMS Stations": 242,
        "Population": 2942902,
        "EMS Stations Per Capita": 0.00008223175627322962,
        "outlier": ""
      },
      {
        "State": "Pennsylvania",
        "Total Response Time": 39.428571428571445,
        "Number of EMS Stations": 2274,
        "Population": 12787209,
        "EMS Stations Per Capita": 0.00017783395891941706,
        "outlier": ""
      },
      {
        "State": "Virginia",
        "Total Response Time": 65.52307692307694,
        "Number of EMS Stations": 599,
        "Population": 8326289,
        "EMS Stations Per Capita": 0.00007194081300805197,
        "outlier": "Y"
      },
      {
        "State": "Colorado",
        "Total Response Time": 29.383333333333336,
        "Number of EMS Stations": 629,
        "Population": 5355866,
        "EMS Stations Per Capita": 0.00011744132508169547,
        "outlier": ""
      },
      {
        "State": "Nebraska",
        "Total Response Time": 28.22727272727273,
        "Number of EMS Stations": 355,
        "Population": 1881503,
        "EMS Stations Per Capita": 0.00018867894443963152,
        "outlier": ""
      },
      {
        "State": "Missouri",
        "Total Response Time": 39.323529411764696,
        "Number of EMS Stations": 1036,
        "Population": 6063589,
        "EMS Stations Per Capita": 0.0001708559072852728,
        "outlier": ""
      },
      {
        "State": "Louisiana",
        "Total Response Time": 53.43333333333333,
        "Number of EMS Stations": 908,
        "Population": 4649676,
        "EMS Stations Per Capita": 0.00019528242397964934,
        "outlier": ""
      },
      {
        "State": "Kentucky",
        "Total Response Time": 37.725274725274716,
        "Number of EMS Stations": 890,
        "Population": 4413457,
        "EMS Stations Per Capita": 0.00020165598078784953,
        "outlier": ""
      },
      {
        "State": "Maine",
        "Total Response Time": 42.470588235294116,
        "Number of EMS Stations": 200,
        "Population": 1330089,
        "EMS Stations Per Capita": 0.00015036587777208894,
        "outlier": ""
      },
      {
        "State": "Tennessee",
        "Total Response Time": 47.59740259740261,
        "Number of EMS Stations": 749,
        "Population": 6549352,
        "EMS Stations Per Capita": 0.0001143624590646525,
        "outlier": ""
      },
      {
        "State": "Texas",
        "Total Response Time": 45.00359712230215,
        "Number of EMS Stations": 1828,
        "Population": 26956958,
        "EMS Stations Per Capita": 0.0000678118057682918,
        "outlier": ""
      },
      {
        "State": "Wisconsin",
        "Total Response Time": 42.411764705882355,
        "Number of EMS Stations": 933,
        "Population": 5757564,
        "EMS Stations Per Capita": 0.00016204769933951234,
        "outlier": ""
      },
      {
        "State": "New York",
        "Total Response Time": 37.463157894736845,
        "Number of EMS Stations": 2659,
        "Population": 19746227,
        "EMS Stations Per Capita": 0.00013465863630555852,
        "outlier": ""
      },
      {
        "State": "Minnesota",
        "Total Response Time": 33.60526315789473,
        "Number of EMS Stations": 791,
        "Population": 5457173,
        "EMS Stations Per Capita": 0.00014494684335644115,
        "outlier": ""
      },
      {
        "State": "New Hampshire",
        "Total Response Time": 37.166666666666664,
        "Number of EMS Stations": 254,
        "Population": 1326813,
        "EMS Stations Per Capita": 0.00019143617073393162,
        "outlier": ""
      },
      {
        "State": "Alaska",
        "Total Response Time": 36.5,
        "Number of EMS Stations": 243,
        "Population": 736732,
        "EMS Stations Per Capita": 0.00032983500105872966,
        "outlier": ""
      },
      {
        "State": "Washington",
        "Total Response Time": 76.85185185185183,
        "Number of EMS Stations": 981,
        "Population": 7061530,
        "EMS Stations Per Capita": 0.0001389217350914037,
        "outlier": "Y"
      },
      {
        "State": "Nevada",
        "Total Response Time": 32.22222222222222,
        "Number of EMS Stations": 194,
        "Population": 2839099,
        "EMS Stations Per Capita": 0.00006833153757582952,
        "outlier": ""
      },
      {
        "State": "South Carolina",
        "Total Response Time": 42.875,
        "Number of EMS Stations": 428,
        "Population": 4832482,
        "EMS Stations Per Capita": 0.00008856732420317344,
        "outlier": ""
      },
      {
        "State": "Connecticut",
        "Total Response Time": 37.46575342465753,
        "Number of EMS Stations": 458,
        "Population": 3596677,
        "EMS Stations Per Capita": 0.00012733976389873208,
        "outlier": ""
      },
      {
        "State": "Massachusetts",
        "Total Response Time": 40.88775510204082,
        "Number of EMS Stations": 772,
        "Population": 6745408,
        "EMS Stations Per Capita": 0.00011444822907672894,
        "outlier": ""
      },
      {
        "State": "Delaware",
        "Total Response Time": 26.529411764705884,
        "Number of EMS Stations": 71,
        "Population": 935614,
        "EMS Stations Per Capita": 0.00007588599572045736,
        "outlier": ""
      },
      {
        "State": "Arkansas",
        "Total Response Time": 40.29032258064517,
        "Number of EMS Stations": 193,
        "Population": 2966369,
        "EMS Stations Per Capita": 0.00006506270797732852,
        "outlier": ""
      },
      {
        "State": "North Carolina",
        "Total Response Time": 51.113402061855645,
        "Number of EMS Stations": 1316,
        "Population": 9943964,
        "EMS Stations Per Capita": 0.0001323415893299694,
        "outlier": ""
      },
      {
        "State": "Georgia",
        "Total Response Time": 53.05603448275863,
        "Number of EMS Stations": 1432,
        "Population": 10097343,
        "EMS Stations Per Capita": 0.0001418194865718635,
        "outlier": ""
      },
      {
        "State": "Mississippi",
        "Total Response Time": 48.263157894736835,
        "Number of EMS Stations": 618,
        "Population": 2994079,
        "EMS Stations Per Capita": 0.00020640737936440554,
        "outlier": ""
      },
      {
        "State": "Iowa",
        "Total Response Time": 31.799999999999997,
        "Number of EMS Stations": 681,
        "Population": 3107126,
        "EMS Stations Per Capita": 0.00021917360287287995,
        "outlier": ""
      },
      {
        "State": "Arizona",
        "Total Response Time": 30.719780219780226,
        "Number of EMS Stations": 659,
        "Population": 6731484,
        "EMS Stations Per Capita": 0.00009789817520178314,
        "outlier": ""
      },
      {
        "State": "Hawaii",
        "Total Response Time": 39.588235294117645,
        "Number of EMS Stations": 80,
        "Population": 1419561,
        "EMS Stations Per Capita": 0.00005635545073441719,
        "outlier": ""
      }
    ]
  }
}
const weather =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-6f7dd293d15ad2a0241e26853e10d7eb"},
  "mark": "point",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "atmospheric_conditions_name",
      "legend": {"title": "Weather Condition"}
    },
    "tooltip": [
      {"type": "nominal", "field": "state_name"},
      {"type": "nominal", "field": "atmospheric_conditions_name"},
      {"type": "quantitative", "field": "cnt"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "Crash Count"},
      "field": "cnt"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": ""},
      "field": "atmospheric_conditions_name"
    }
  },
  "height": 300,
  "title": "Prevailing Adverse Weather Conditions Per State",
  "width": 400,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-6f7dd293d15ad2a0241e26853e10d7eb": [
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 12,
        "cnt": 15
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 8,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 4,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 2,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 6,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 1,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 9,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Alabama",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 5,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alabama",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Alabama",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Alabama",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Alabama",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Alabama",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Alabama",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Alabama",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alaska",
        "month_of_crash": 7,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alaska",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alaska",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Alaska",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alaska",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Alaska",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 12,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Arizona",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 8,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Arizona",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Arizona",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Arizona",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Arizona",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Arizona",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arizona",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 12,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 3,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 4,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 8,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 5,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Arkansas",
        "month_of_crash": 11,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 11,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 6,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Arkansas",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Arkansas",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Arkansas",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Arkansas",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Arkansas",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Arkansas",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Arkansas",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 12,
        "cnt": 48
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 3,
        "cnt": 32
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 1,
        "cnt": 25
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 10,
        "cnt": 22
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 11,
        "cnt": 19
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 4,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 11,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 12,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 5,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 1,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 2,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 2,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "California",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "California",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "California",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "California",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "California",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "California",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "California",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "California",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "California",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "California",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Colorado",
        "month_of_crash": 8,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Colorado",
        "month_of_crash": 3,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Colorado",
        "month_of_crash": 4,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Colorado",
        "month_of_crash": 5,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Colorado",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Colorado",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Colorado",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Colorado",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Colorado",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Colorado",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Colorado",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Colorado",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Colorado",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 9,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 7,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Connecticut",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 5,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Connecticut",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Connecticut",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Connecticut",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Connecticut",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Connecticut",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Connecticut",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Connecticut",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Connecticut",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Delaware",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Delaware",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Delaware",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Delaware",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Delaware",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Delaware",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Delaware",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Delaware",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "District of Columbia",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "District of Columbia",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "District of Columbia",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 1,
        "cnt": 33
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 8,
        "cnt": 32
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 6,
        "cnt": 22
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 12,
        "cnt": 21
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 3,
        "cnt": 13
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 2,
        "cnt": 13
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 12,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 10,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 9,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 5,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 7,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 1,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 2,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 4,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 10,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Florida",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Florida",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Florida",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 12,
        "cnt": 20
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 1,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 2,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 3,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 7,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 8,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 4,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 5,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 9,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 6,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Georgia",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Georgia",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Georgia",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Georgia",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Georgia",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Hawaii",
        "month_of_crash": 4,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Hawaii",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Hawaii",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Hawaii",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Hawaii",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Hawaii",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Idaho",
        "month_of_crash": 12,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Idaho",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Idaho",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Idaho",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Idaho",
        "month_of_crash": 5,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Idaho",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Idaho",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Idaho",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Idaho",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Idaho",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Idaho",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Idaho",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Idaho",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Idaho",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Idaho",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Idaho",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 4,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 5,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Illinois",
        "month_of_crash": 12,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Illinois",
        "month_of_crash": 1,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 8,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Illinois",
        "month_of_crash": 2,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 12,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 11,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 3,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 7,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 5,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 1,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 10,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 8,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 6,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Illinois",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Illinois",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Illinois",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Illinois",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Illinois",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Illinois",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Illinois",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Illinois",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Illinois",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 12,
        "cnt": 13
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 3,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 11,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 4,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 5,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 6,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 9,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Indiana",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 1,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Indiana",
        "month_of_crash": 2,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 2,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Indiana",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Indiana",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Indiana",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Indiana",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Indiana",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Indiana",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Indiana",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Indiana",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Indiana",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Indiana",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Indiana",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Indiana",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Indiana",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Indiana",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Indiana",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Iowa",
        "month_of_crash": 1,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 5,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Iowa",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Iowa",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Iowa",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Iowa",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Iowa",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Iowa",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Iowa",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Iowa",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Iowa",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Iowa",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Iowa",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Kansas",
        "month_of_crash": 4,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 9,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 11,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Kansas",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 6,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Kansas",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kansas",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Kansas",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kansas",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Kansas",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kansas",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Kansas",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Kansas",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kansas",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kansas",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kansas",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Kansas",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kansas",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kansas",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Kansas",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Kansas",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 12,
        "cnt": 15
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 8,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 5,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 4,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 7,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 2,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 10,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Kentucky",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kentucky",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 6,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kentucky",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Kentucky",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kentucky",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Kentucky",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Kentucky",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kentucky",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kentucky",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Kentucky",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Kentucky",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Kentucky",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 12,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 3,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 1,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 9,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 6,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Louisiana",
        "month_of_crash": 1,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 5,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Louisiana",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Louisiana",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Louisiana",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Louisiana",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Louisiana",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Louisiana",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Louisiana",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Louisiana",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 5,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 11,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 8,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Maine",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Maine",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Maine",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Maine",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Maine",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Maine",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maine",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 12,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 9,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 2,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 4,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 5,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 8,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Maryland",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Maryland",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Maryland",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Maryland",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Maryland",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Maryland",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Maryland",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Maryland",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Maryland",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Maryland",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Maryland",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Maryland",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 10,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 5,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 3,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Massachusetts",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Massachusetts",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Massachusetts",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Massachusetts",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Massachusetts",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Massachusetts",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Massachusetts",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Michigan",
        "month_of_crash": 12,
        "cnt": 19
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Michigan",
        "month_of_crash": 2,
        "cnt": 14
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 9,
        "cnt": 12
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 11,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Michigan",
        "month_of_crash": 1,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 10,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 4,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 5,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Michigan",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Michigan",
        "month_of_crash": 4,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 6,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Michigan",
        "month_of_crash": 11,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 1,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 8,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Michigan",
        "month_of_crash": 10,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 7,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Michigan",
        "month_of_crash": 6,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Michigan",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Michigan",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Michigan",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Michigan",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Michigan",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Michigan",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Michigan",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Michigan",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 3,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Minnesota",
        "month_of_crash": 12,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Minnesota",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Minnesota",
        "month_of_crash": 11,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 11,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 10,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Minnesota",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Minnesota",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 5,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Minnesota",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Minnesota",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Minnesota",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Minnesota",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Minnesota",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Minnesota",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Minnesota",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Minnesota",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Minnesota",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Minnesota",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Minnesota",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Minnesota",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Minnesota",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Minnesota",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 3,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 12,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 8,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 7,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 6,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 4,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Mississippi",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Mississippi",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Mississippi",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Mississippi",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Mississippi",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Mississippi",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Mississippi",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Mississippi",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Mississippi",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Mississippi",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Missouri",
        "month_of_crash": 12,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 5,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 7,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 8,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 10,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Missouri",
        "month_of_crash": 1,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Missouri",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Missouri",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Missouri",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Missouri",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Missouri",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Missouri",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Montana",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Montana",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Montana",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Montana",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Montana",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Montana",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Montana",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Montana",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Montana",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Nebraska",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nebraska",
        "month_of_crash": 5,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nebraska",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Nebraska",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nebraska",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nebraska",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Nebraska",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Nebraska",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Nevada",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nevada",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nevada",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nevada",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Nevada",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Nevada",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Hampshire",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Hampshire",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Hampshire",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Hampshire",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Hampshire",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New Hampshire",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Hampshire",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Hampshire",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Hampshire",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "New Hampshire",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 5,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 7,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New Jersey",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 10,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Jersey",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 8,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Jersey",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "New Jersey",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New Jersey",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Jersey",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New Jersey",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Jersey",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New Jersey",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New Jersey",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "New Jersey",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Mexico",
        "month_of_crash": 8,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Mexico",
        "month_of_crash": 12,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "New Mexico",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Mexico",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Mexico",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New Mexico",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "New Mexico",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "New Mexico",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Mexico",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Mexico",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Mexico",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New Mexico",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New Mexico",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "New Mexico",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 10,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New York",
        "month_of_crash": 12,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 9,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New York",
        "month_of_crash": 1,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 12,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 5,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 4,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 2,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New York",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 3,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New York",
        "month_of_crash": 4,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New York",
        "month_of_crash": 11,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 6,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 1,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "New York",
        "month_of_crash": 2,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "New York",
        "month_of_crash": 3,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "New York",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "New York",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New York",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New York",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New York",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "New York",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "New York",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 12,
        "cnt": 15
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 5,
        "cnt": 14
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 10,
        "cnt": 12
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 2,
        "cnt": 12
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 9,
        "cnt": 12
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 3,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 6,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 7,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 4,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "North Carolina",
        "month_of_crash": 1,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 8,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "North Carolina",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 1,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Carolina",
        "month_of_crash": 11,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "North Carolina",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "North Carolina",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "North Carolina",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "North Carolina",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "North Carolina",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "North Carolina",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "North Carolina",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Dakota",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "North Dakota",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "North Dakota",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "North Dakota",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 12,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 3,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Ohio",
        "month_of_crash": 12,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 5,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 2,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Ohio",
        "month_of_crash": 1,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 4,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 10,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Ohio",
        "month_of_crash": 2,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 9,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Ohio",
        "month_of_crash": 11,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Ohio",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Ohio",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Ohio",
        "month_of_crash": 6,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Ohio",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Ohio",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Ohio",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Ohio",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 6,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 4,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 8,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 5,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 11,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 10,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Oklahoma",
        "month_of_crash": 4,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Oklahoma",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Oklahoma",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Oklahoma",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Oklahoma",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oklahoma",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Oklahoma",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Oklahoma",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 11,
        "cnt": 15
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 10,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 1,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Oregon",
        "month_of_crash": 12,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Oregon",
        "month_of_crash": 1,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 4,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 6,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Oregon",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Oregon",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Oregon",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Oregon",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Oregon",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Oregon",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Oregon",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Oregon",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 5,
        "cnt": 16
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 2,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 11,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Pennsylvania",
        "month_of_crash": 2,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Pennsylvania",
        "month_of_crash": 12,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 4,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 10,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 9,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 6,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 8,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Pennsylvania",
        "month_of_crash": 1,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 10,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 3,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 9,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Pennsylvania",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Pennsylvania",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Pennsylvania",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Pennsylvania",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Pennsylvania",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Pennsylvania",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Rhode Island",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Rhode Island",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Rhode Island",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 5,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 12,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 2,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 9,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 1,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 3,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 4,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 6,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 8,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 11,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "South Carolina",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "South Carolina",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "South Carolina",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Carolina",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "South Carolina",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "South Carolina",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "South Carolina",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "South Carolina",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "South Dakota",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "South Dakota",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "South Dakota",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 12,
        "cnt": 14
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 2,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 8,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 6,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 4,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 3,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 5,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Tennessee",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 1,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Tennessee",
        "month_of_crash": 2,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 10,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Tennessee",
        "month_of_crash": 1,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Tennessee",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Tennessee",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Tennessee",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Tennessee",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Tennessee",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Tennessee",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Tennessee",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Tennessee",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Tennessee",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Tennessee",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Tennessee",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Tennessee",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 12,
        "cnt": 38
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 11,
        "cnt": 27
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 5,
        "cnt": 25
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 8,
        "cnt": 23
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 4,
        "cnt": 22
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 3,
        "cnt": 21
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 1,
        "cnt": 17
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 9,
        "cnt": 13
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 6,
        "cnt": 12
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 12,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 2,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 1,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 7,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 4,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 11,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 5,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Texas",
        "month_of_crash": 10,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 10,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Texas",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Texas",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Sand, Soil, Dirt",
        "state_name": "Texas",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Texas",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Texas",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Texas",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Utah",
        "month_of_crash": 5,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Utah",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Utah",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Utah",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Utah",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Utah",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Utah",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Utah",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Utah",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Utah",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Utah",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Utah",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Utah",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Utah",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Utah",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Vermont",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Vermont",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Vermont",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Vermont",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Vermont",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Vermont",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Freezing Rain or Drizzle",
        "state_name": "Vermont",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Vermont",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 5,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 2,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 1,
        "cnt": 8
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 4,
        "cnt": 7
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Virginia",
        "month_of_crash": 1,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 9,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 12,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 3,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 6,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 7,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 10,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Virginia",
        "month_of_crash": 5,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Virginia",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Virginia",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Virginia",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Virginia",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Virginia",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Virginia",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Virginia",
        "month_of_crash": 7,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Virginia",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Virginia",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Virginia",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 3,
        "cnt": 14
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 10,
        "cnt": 11
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 11,
        "cnt": 10
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 2,
        "cnt": 9
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 1,
        "cnt": 6
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Washington",
        "month_of_crash": 12,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 7,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 12,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Washington",
        "month_of_crash": 10,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 6,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Washington",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Washington",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Washington",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Washington",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Washington",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Washington",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 12,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 6,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 10,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 9,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 5,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 7,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 1,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "West Virginia",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "West Virginia",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "West Virginia",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "West Virginia",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "West Virginia",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "West Virginia",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "West Virginia",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "West Virginia",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "West Virginia",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wisconsin",
        "month_of_crash": 3,
        "cnt": 5
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 5,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wisconsin",
        "month_of_crash": 2,
        "cnt": 4
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 7,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wisconsin",
        "month_of_crash": 4,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 6,
        "cnt": 3
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wisconsin",
        "month_of_crash": 12,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Sleet, Hail",
        "state_name": "Wisconsin",
        "month_of_crash": 3,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 4,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 9,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 11,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Wisconsin",
        "month_of_crash": 2,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Severe Crosswinds",
        "state_name": "Wisconsin",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wisconsin",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Wisconsin",
        "month_of_crash": 8,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Wisconsin",
        "month_of_crash": 10,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Blowing Snow",
        "state_name": "Wisconsin",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Fog, Smog, Smoke",
        "state_name": "Wisconsin",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wisconsin",
        "month_of_crash": 1,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wyoming",
        "month_of_crash": 2,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wyoming",
        "month_of_crash": 5,
        "cnt": 2
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wyoming",
        "month_of_crash": 6,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wyoming",
        "month_of_crash": 11,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wyoming",
        "month_of_crash": 3,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wyoming",
        "month_of_crash": 5,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wyoming",
        "month_of_crash": 12,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Rain",
        "state_name": "Wyoming",
        "month_of_crash": 9,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wyoming",
        "month_of_crash": 4,
        "cnt": 1
      },
      {
        "atmospheric_conditions_name": "Snow",
        "state_name": "Wyoming",
        "month_of_crash": 10,
        "cnt": 1
      }
    ]
  }
};
const ped =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-20c922cfd6dd90632bb285b843b9d21f"},
  "mark": "point",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "manner_of_collision_name",
      "legend": {"title": "Manner of Collision"}
    },
    "tooltip": [
      {"type": "nominal", "field": "non_motorist_action_circumstances_name"},
      {"type": "nominal", "field": "manner_of_collision_name"},
      {"type": "quantitative", "field": "cnt"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "Crash Count"},
      "field": "cnt"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": ""},
      "field": "non_motorist_action_circumstances_name"
    }
  },
  "height": 300,
  "title": "",
  "width": 400,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-20c922cfd6dd90632bb285b843b9d21f": [
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Adjacent to Shoulder/Median",
        "manner_of_collision_name": "Sideswipe – Same Direction",
        "cnt": 18
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Adjacent to Shoulder/Median",
        "manner_of_collision_name": "Angle",
        "cnt": 15
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Adjacent to Shoulder/Median",
        "manner_of_collision_name": "Front-to-Rear",
        "cnt": 14
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Adjacent to Shoulder/Median",
        "manner_of_collision_name": "Sideswipe – Opposite Direction",
        "cnt": 4
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Adjacent to Shoulder/Median",
        "manner_of_collision_name": "Front-to-Front",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Cross Roadway",
        "manner_of_collision_name": "Angle",
        "cnt": 7
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Cross Roadway",
        "manner_of_collision_name": "Front-to-Rear",
        "cnt": 6
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Cross Roadway",
        "manner_of_collision_name": "Front-to-Front",
        "cnt": 2
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Disabled Vehicle Related",
        "manner_of_collision_name": "Front-to-Rear",
        "cnt": 52
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Disabled Vehicle Related",
        "manner_of_collision_name": "Sideswipe – Same Direction",
        "cnt": 30
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Disabled Vehicle Related",
        "manner_of_collision_name": "Angle",
        "cnt": 22
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Disabled Vehicle Related",
        "manner_of_collision_name": "Front-to-Front",
        "cnt": 3
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Disabled Vehicle Related",
        "manner_of_collision_name": "Other (End-Swipes and Others)",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Disabled Vehicle Related",
        "manner_of_collision_name": "Sideswipe – Opposite Direction",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Enter/Exit a Stopped Vehicle",
        "manner_of_collision_name": "Front-to-Rear",
        "cnt": 4
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Enter/Exit a Stopped Vehicle",
        "manner_of_collision_name": "Sideswipe – Same Direction",
        "cnt": 2
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Enter/Exit a Stopped Vehicle",
        "manner_of_collision_name": "Angle",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work/Play in Roadway",
        "manner_of_collision_name": "Front-to-Rear",
        "cnt": 20
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work/Play in Roadway",
        "manner_of_collision_name": "Angle",
        "cnt": 7
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work/Play in Roadway",
        "manner_of_collision_name": "Sideswipe – Same Direction",
        "cnt": 5
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work/Play in Roadway",
        "manner_of_collision_name": "Sideswipe – Opposite Direction",
        "cnt": 4
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work/Play in Roadway",
        "manner_of_collision_name": "Front-to-Front",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Jog/Run",
        "manner_of_collision_name": "Angle",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Move Along Roadway Against Traffic",
        "manner_of_collision_name": "Angle",
        "cnt": 3
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Move Along Roadway Against Traffic",
        "manner_of_collision_name": "Sideswipe – Opposite Direction",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Move Along Roadway With Traffic",
        "manner_of_collision_name": "Front-to-Rear",
        "cnt": 5
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Move Along Roadway With Traffic",
        "manner_of_collision_name": "Angle",
        "cnt": 3
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Move Along Roadway With Traffic",
        "manner_of_collision_name": "Front-to-Front",
        "cnt": 2
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Move Along Roadway unkn Direction",
        "manner_of_collision_name": "Angle",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Wait to Cross Roadway",
        "manner_of_collision_name": "Angle",
        "cnt": 6
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work in Trafficway",
        "manner_of_collision_name": "Sideswipe – Same Direction",
        "cnt": 4
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work in Trafficway",
        "manner_of_collision_name": "Front-to-Rear",
        "cnt": 2
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work in Trafficway",
        "manner_of_collision_name": "Angle",
        "cnt": 1
      },
      {
        "person_type_name": "Pedestrian",
        "non_motorist_action_circumstances_name": "Work in Trafficway",
        "manner_of_collision_name": "Front-to-Front",
        "cnt": 1
      }
    ]
  }
}
const pedestrain = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-51165335cba427a8aa5ca4a2550f7565"},
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
      {"type": "quantitative", "aggregate": "sum", "field": "count"},
      {"type": "nominal", "field": "person_type_name"},
      {"type": "nominal", "field": "injury_severity_name"}
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
      "axis": {"title": "Person type"},
      "field": "person_type_name"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.injury_severity_name === 'Fatal Injury (K)', 0,            if(datum.injury_severity_name === 'Suspected Serious Injury (A)', 1,            if(datum.injury_severity_name === 'Suspected Minor Injury (B)', 2,            if(datum.injury_severity_name === 'Possible Injury (C)', 3,            if(datum.injury_severity_name === 'Injured, Severity Unknown (U) (Since 1978)', 4,            if(datum.injury_severity_name === 'No Apparent Injury (O)', 5, 6))))))",
      "as": "order"
    }
  ],
  "width": DEFAULT_GRAPH_WIDTH_MEDIUM,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-51165335cba427a8aa5ca4a2550f7565": [
      {
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 23715
      },
      {
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 14231
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 6821
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 6607
      },
      {
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 6080
      },
      {
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 5026
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 4586
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4240
      },
      {
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4153
      },
      {
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 3941
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 3375
      },
      {
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 848
      },
      {
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 199
      },
      {
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 176
      },
      {
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 175
      },
      {
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 130
      },
      {
        "person_type_name": "Driver of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 129
      },
      {
        "person_type_name": "Passenger of a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 102
      },
      {
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 77
      },
      {
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Possible Injury (C)",
        "count": 76
      },
      {
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 60
      },
      {
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 54
      },
      {
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 42
      },
      {
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 28
      },
      {
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 22
      },
      {
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 18
      },
      {
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 17
      },
      {
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 15
      },
      {
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 15
      },
      {
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 10
      },
      {
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 10
      },
      {
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 9
      },
      {
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 9
      },
      {
        "person_type_name": "Pedestrian",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 8
      },
      {
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 7
      },
      {
        "person_type_name": "Pedestrian",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 7
      },
      {
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 6
      },
      {
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 6
      },
      {
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Possible Injury (C)",
        "count": 5
      },
      {
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 5
      },
      {
        "person_type_name": "Bicyclist",
        "injury_severity_name": "Possible Injury (C)",
        "count": 4
      },
      {
        "person_type_name": "Other Cyclist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4
      },
      {
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "person_type_name": "Persons In/On Buildings (Since 2007)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 4
      },
      {
        "person_type_name": "Unknown Occupant Type in a Motor Vehicle In-Transport",
        "injury_severity_name": "Possible Injury (C)",
        "count": 4
      },
      {
        "person_type_name": "Bicyclist",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 2
      },
      {
        "person_type_name": "Occupant of a Motor Vehicle Not In-Transport",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "person_type_name": "Occupant of a Non-Motor Vehicle Transport Device",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1
      },
      {
        "person_type_name": "Other Cyclist",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "person_type_name": "Person on Personal Conveyances (Since 2007)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "person_type_name": "Unknown Type of Non-Motorist",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "person_type_name": "Unknown Type of Non-Motorist",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      }
    ]
  }
};
const overspeed = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-e8609c4e3c7c3a6b5ae4f8973b85d5c0"},
  "mark": "point",
  "encoding": {
    "order": {"type": "nominal", "field": "order"},
    "tooltip": [
      {"type": "nominal", "field": "overspeed_range"},
      {"type": "quantitative", "field": "avg_fatality_percent"},
      {"type": "quantitative", "field": "crash_count"},
      {"type": "quantitative", "field": "avg_overspeed_amount"}
    ],
    "x": {
      "type": "nominal",
      "axis": {"title": "Overspeeding amount (MPH) at time of crash"},
      "field": "overspeed_range"
    },
    "y": {
      "type": "quantitative",
      "axis": {"title": "Average fatality percentage in the vehicle"},
      "field": "avg_fatality_percent"
    }
  },
  "width": 400,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-e8609c4e3c7c3a6b5ae4f8973b85d5c0": [
      {
        "avg_fatality_percent": 41.2325433313135,
        "crash_count": 1098,
        "avg_overspeed_amount": 7,
        "overspeed_range": "05-10"
      },
      {
        "avg_fatality_percent": 60.965862215292304,
        "crash_count": 786,
        "avg_overspeed_amount": 17,
        "overspeed_range": "10-20"
      },
      {
        "avg_fatality_percent": 59.30419109593792,
        "crash_count": 993,
        "avg_overspeed_amount": 24.500000000000004,
        "overspeed_range": "20-30"
      },
      {
        "avg_fatality_percent": 53.907824074074085,
        "crash_count": 840,
        "avg_overspeed_amount": 12,
        "overspeed_range": "10-15"
      },
      {
        "avg_fatality_percent": 61.24423244793614,
        "crash_count": 576,
        "avg_overspeed_amount": 34.5,
        "overspeed_range": "30-40"
      },
      {
        "avg_fatality_percent": 65.65896642850255,
        "crash_count": 368,
        "avg_overspeed_amount": 44.5,
        "overspeed_range": "40-50"
      },
      {
        "avg_fatality_percent": 32.43730925842995,
        "crash_count": 372,
        "avg_overspeed_amount": 2.5,
        "overspeed_range": "05 and under"
      },
      {
        "avg_fatality_percent": 64.13125061151376,
        "crash_count": 287,
        "avg_overspeed_amount": 69.94594594594595,
        "overspeed_range": "50 and above"
      }
    ]
  }
};
const seatingposition = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-cdef64a86ddba2842534563a5ed29c9f"},
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
      {"type": "nominal", "field": "seating_position_name"},
      {"type": "nominal", "field": "injury_severity_name"}
    ],
    "x": {
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {"title": "Ratio in all types of injuries"},
      "field": "injury_count",
      "stack": "normalize"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": "Seating Position"},
      "field": "seating_position_name"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.injury_severity_name === 'Fatal Injury (K)', 0,            if(datum.injury_severity_name === 'Suspected Serious Injury (A)', 1,            if(datum.injury_severity_name === 'Suspected Minor Injury (B)', 2,            if(datum.injury_severity_name === 'Possible Injury (C)', 3,            if(datum.injury_severity_name === 'Injured, Severity Unknown (U) (Since 1978)', 4,            if(datum.injury_severity_name === 'No Apparent Injury (O)', 5, 6))))))",
      "as": "order"
    }
  ],
  "width": DEFAULT_GRAPH_WIDTH_MEDIUM,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-cdef64a86ddba2842534563a5ed29c9f": [
      {
        "seating_position_name": "Fourth Seat – Left Side",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Fourth Seat – Left Side",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 3
      },
      {
        "seating_position_name": "Fourth Seat – Left Side",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 2
      },
      {
        "seating_position_name": "Fourth Seat – Middle",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 2
      },
      {
        "seating_position_name": "Fourth Seat – Middle",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Fourth Seat – Middle",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Fourth Seat – Middle",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 5
      },
      {
        "seating_position_name": "Fourth Seat – Right Side",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Fourth Seat – Right Side",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Fourth Seat – Right Side",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Fourth Seat – Right Side",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 2
      },
      {
        "seating_position_name": "Fourth Seat – Right Side",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Front Seat – Left Side (Driver's Side)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 5048
      },
      {
        "seating_position_name": "Front Seat – Left Side (Driver's Side)",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 23747
      },
      {
        "seating_position_name": "Front Seat – Left Side (Driver's Side)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 4163
      },
      {
        "seating_position_name": "Front Seat – Left Side (Driver's Side)",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 3962
      },
      {
        "seating_position_name": "Front Seat – Left Side (Driver's Side)",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 14315
      },
      {
        "seating_position_name": "Front Seat – Left Side (Driver's Side)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 129
      },
      {
        "seating_position_name": "Front Seat – Middle",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 54
      },
      {
        "seating_position_name": "Front Seat – Middle",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 52
      },
      {
        "seating_position_name": "Front Seat – Middle",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 72
      },
      {
        "seating_position_name": "Front Seat – Middle",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 36
      },
      {
        "seating_position_name": "Front Seat – Middle",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 58
      },
      {
        "seating_position_name": "Front Seat – Middle",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Front Seat – Right Side",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 3235
      },
      {
        "seating_position_name": "Front Seat – Right Side",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 1509
      },
      {
        "seating_position_name": "Front Seat – Right Side",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 4014
      },
      {
        "seating_position_name": "Front Seat – Right Side",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 2082
      },
      {
        "seating_position_name": "Front Seat – Right Side",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 45
      },
      {
        "seating_position_name": "Front Seat – Right Side",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 2206
      },
      {
        "seating_position_name": "Not a Motor Vehicle Occupant (2005-Later)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 7
      },
      {
        "seating_position_name": "Not a Motor Vehicle Occupant (2005-Later)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 243
      },
      {
        "seating_position_name": "Not a Motor Vehicle Occupant (2005-Later)",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 94
      },
      {
        "seating_position_name": "Not a Motor Vehicle Occupant (2005-Later)",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 18
      },
      {
        "seating_position_name": "Not a Motor Vehicle Occupant (2005-Later)",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 7139
      },
      {
        "seating_position_name": "Not a Motor Vehicle Occupant (2005-Later)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 154
      },
      {
        "seating_position_name": "Riding on Vehicle Exterior",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 7
      },
      {
        "seating_position_name": "Riding on Vehicle Exterior",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 2
      },
      {
        "seating_position_name": "Riding on Vehicle Exterior",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 21
      },
      {
        "seating_position_name": "Riding on Vehicle Exterior",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 7
      },
      {
        "seating_position_name": "Riding on Vehicle Exterior",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 63
      },
      {
        "seating_position_name": "Second Seat – Left Side",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 15
      },
      {
        "seating_position_name": "Second Seat – Left Side",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 739
      },
      {
        "seating_position_name": "Second Seat – Left Side",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 1082
      },
      {
        "seating_position_name": "Second Seat – Left Side",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 499
      },
      {
        "seating_position_name": "Second Seat – Left Side",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 945
      },
      {
        "seating_position_name": "Second Seat – Left Side",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 731
      },
      {
        "seating_position_name": "Second Seat – Middle",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 246
      },
      {
        "seating_position_name": "Second Seat – Middle",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 392
      },
      {
        "seating_position_name": "Second Seat – Middle",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 250
      },
      {
        "seating_position_name": "Second Seat – Middle",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 251
      },
      {
        "seating_position_name": "Second Seat – Middle",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 4
      },
      {
        "seating_position_name": "Second Seat – Middle",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 197
      },
      {
        "seating_position_name": "Second Seat – Right Side",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 595
      },
      {
        "seating_position_name": "Second Seat – Right Side",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 1185
      },
      {
        "seating_position_name": "Second Seat – Right Side",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 654
      },
      {
        "seating_position_name": "Second Seat – Right Side",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 724
      },
      {
        "seating_position_name": "Second Seat – Right Side",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 832
      },
      {
        "seating_position_name": "Second Seat – Right Side",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 20
      },
      {
        "seating_position_name": "Sleeper Section of Cab (Truck)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 13
      },
      {
        "seating_position_name": "Sleeper Section of Cab (Truck)",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 78
      },
      {
        "seating_position_name": "Sleeper Section of Cab (Truck)",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 15
      },
      {
        "seating_position_name": "Sleeper Section of Cab (Truck)",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 15
      },
      {
        "seating_position_name": "Sleeper Section of Cab (Truck)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 13
      },
      {
        "seating_position_name": "Third Seat – Left Side",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 45
      },
      {
        "seating_position_name": "Third Seat – Left Side",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 38
      },
      {
        "seating_position_name": "Third Seat – Left Side",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 52
      },
      {
        "seating_position_name": "Third Seat – Left Side",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 67
      },
      {
        "seating_position_name": "Third Seat – Left Side",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 51
      },
      {
        "seating_position_name": "Third Seat – Middle",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 22
      },
      {
        "seating_position_name": "Third Seat – Middle",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Third Seat – Middle",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 16
      },
      {
        "seating_position_name": "Third Seat – Middle",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 36
      },
      {
        "seating_position_name": "Third Seat – Middle",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 22
      },
      {
        "seating_position_name": "Third Seat – Middle",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 30
      },
      {
        "seating_position_name": "Third Seat – Right Side",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 64
      },
      {
        "seating_position_name": "Third Seat – Right Side",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "injury_count": 1
      },
      {
        "seating_position_name": "Third Seat – Right Side",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 43
      },
      {
        "seating_position_name": "Third Seat – Right Side",
        "injury_severity_name": "Possible Injury (C)",
        "injury_count": 46
      },
      {
        "seating_position_name": "Third Seat – Right Side",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 33
      },
      {
        "seating_position_name": "Third Seat – Right Side",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "injury_count": 62
      },
      {
        "seating_position_name": "Trailing Unit",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "injury_count": 10
      },
      {
        "seating_position_name": "Trailing Unit",
        "injury_severity_name": "Fatal Injury (K)",
        "injury_count": 12
      },
      {
        "seating_position_name": "Trailing Unit",
        "injury_severity_name": "No Apparent Injury (O)",
        "injury_count": 8
      }
    ]
  }
};
const driverCircumstance =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-5af4ae394a17be542a806d6723114eeb"},
  "mark": "bar",
  "encoding": {
    "color": {
      "condition": {"value": "orange", "test": "(datum.Count > 3000)"},
      "value": "steelblue"
    },
    "tooltip": [
      {"type": "nominal", "field": "Event"},
      {"type": "quantitative", "field": "Count"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "Crash Count"},
      "field": "Count"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": ""},
      "field": "Event",
      "sort": {"op": "sum", "field": "Count", "order": "descending"}
    }
  },
  "title": "",
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-5af4ae394a17be542a806d6723114eeb": [
      {"Count": 6931, "Event": "Alcohol Involved"},
      {"Count": 3598, "Event": "Drug Involved"},
      {"Count": 731, "Event": "Asleep or Fatigued"},
      {"Count": 678, "Event": "Physical Impairment"},
      {"Count": 624, "Event": "Ill, Blackout"},
      {"Count": 477, "Event": "Distracted by Cellular Phone"},
      {"Count": 446, "Event": "Obscured by Rain, Snow, Fog"},
      {"Count": 254, "Event": "Obscured by Reflected Glare"},
      {"Count": 216, "Event": "Obscured by Other Moving Vehicle"},
      {"Count": 212, "Event": "Distracted by Outside Events"},
      {"Count": 181, "Event": "Distracted by By Other Occupants"},
      {"Count": 158, "Event": "Obscured by Curve, Hill"},
      {"Count": 152, "Event": "Depressed, Angry, Disturbed"}
    ]
  }
};
const light =
{
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-6dbda72fc8152a0ce121c7ee2418c499"},
  "mark": "circle",
  "encoding": {
    "color": {"type": "quantitative", "aggregate": "sum", "field": "count"},
    "size": {
      "type": "quantitative",
      "aggregate": "sum",
      "field": "count",
      "title": "Crash Count"
    },
    "tooltip": [
      {"type": "quantitative", "field": "month_of_crash"},
      {"type": "quantitative", "field": "hour_of_crash"},
      {"type": "quantitative", "field": "count"}
    ],
    "x": {
      "type": "ordinal",
      "axis": {"title": "Hour of Crash"},
      "field": "hour_of_crash"
    },
    "y": {
      "type": "ordinal",
      "axis": {"title": "Month of Crash"},
      "field": "month_of_crash"
    }
  },
  "title": "Crashes with Light Condition: Dark, Not Lighted",
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-6dbda72fc8152a0ce121c7ee2418c499": [
      {"month_of_crash": 1, "hour_of_crash": 0, "count": 44},
      {"month_of_crash": 1, "hour_of_crash": 1, "count": 37},
      {"month_of_crash": 1, "hour_of_crash": 2, "count": 39},
      {"month_of_crash": 1, "hour_of_crash": 3, "count": 52},
      {"month_of_crash": 1, "hour_of_crash": 4, "count": 34},
      {"month_of_crash": 1, "hour_of_crash": 5, "count": 46},
      {"month_of_crash": 1, "hour_of_crash": 6, "count": 40},
      {"month_of_crash": 1, "hour_of_crash": 7, "count": 15},
      {"month_of_crash": 1, "hour_of_crash": 8, "count": 4},
      {"month_of_crash": 1, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 1, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 1, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 1, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 1, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 1, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 1, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 1, "hour_of_crash": 16, "count": 3},
      {"month_of_crash": 1, "hour_of_crash": 17, "count": 36},
      {"month_of_crash": 1, "hour_of_crash": 18, "count": 91},
      {"month_of_crash": 1, "hour_of_crash": 19, "count": 76},
      {"month_of_crash": 1, "hour_of_crash": 20, "count": 67},
      {"month_of_crash": 1, "hour_of_crash": 21, "count": 63},
      {"month_of_crash": 1, "hour_of_crash": 22, "count": 42},
      {"month_of_crash": 1, "hour_of_crash": 23, "count": 60},
      {"month_of_crash": 2, "hour_of_crash": 0, "count": 55},
      {"month_of_crash": 2, "hour_of_crash": 1, "count": 37},
      {"month_of_crash": 2, "hour_of_crash": 2, "count": 47},
      {"month_of_crash": 2, "hour_of_crash": 3, "count": 38},
      {"month_of_crash": 2, "hour_of_crash": 4, "count": 33},
      {"month_of_crash": 2, "hour_of_crash": 5, "count": 46},
      {"month_of_crash": 2, "hour_of_crash": 6, "count": 45},
      {"month_of_crash": 2, "hour_of_crash": 7, "count": 4},
      {"month_of_crash": 2, "hour_of_crash": 8, "count": 1},
      {"month_of_crash": 2, "hour_of_crash": 9, "count": 2},
      {"month_of_crash": 2, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 2, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 2, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 2, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 2, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 2, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 2, "hour_of_crash": 16, "count": 0},
      {"month_of_crash": 2, "hour_of_crash": 17, "count": 12},
      {"month_of_crash": 2, "hour_of_crash": 18, "count": 69},
      {"month_of_crash": 2, "hour_of_crash": 19, "count": 82},
      {"month_of_crash": 2, "hour_of_crash": 20, "count": 59},
      {"month_of_crash": 2, "hour_of_crash": 21, "count": 63},
      {"month_of_crash": 2, "hour_of_crash": 22, "count": 64},
      {"month_of_crash": 2, "hour_of_crash": 23, "count": 62},
      {"month_of_crash": 3, "hour_of_crash": 0, "count": 60},
      {"month_of_crash": 3, "hour_of_crash": 1, "count": 46},
      {"month_of_crash": 3, "hour_of_crash": 2, "count": 58},
      {"month_of_crash": 3, "hour_of_crash": 3, "count": 44},
      {"month_of_crash": 3, "hour_of_crash": 4, "count": 39},
      {"month_of_crash": 3, "hour_of_crash": 5, "count": 46},
      {"month_of_crash": 3, "hour_of_crash": 6, "count": 40},
      {"month_of_crash": 3, "hour_of_crash": 7, "count": 7},
      {"month_of_crash": 3, "hour_of_crash": 8, "count": 2},
      {"month_of_crash": 3, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 10, "count": 1},
      {"month_of_crash": 3, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 16, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 17, "count": 0},
      {"month_of_crash": 3, "hour_of_crash": 18, "count": 27},
      {"month_of_crash": 3, "hour_of_crash": 19, "count": 57},
      {"month_of_crash": 3, "hour_of_crash": 20, "count": 107},
      {"month_of_crash": 3, "hour_of_crash": 21, "count": 74},
      {"month_of_crash": 3, "hour_of_crash": 22, "count": 70},
      {"month_of_crash": 3, "hour_of_crash": 23, "count": 69},
      {"month_of_crash": 4, "hour_of_crash": 0, "count": 63},
      {"month_of_crash": 4, "hour_of_crash": 1, "count": 50},
      {"month_of_crash": 4, "hour_of_crash": 2, "count": 49},
      {"month_of_crash": 4, "hour_of_crash": 3, "count": 52},
      {"month_of_crash": 4, "hour_of_crash": 4, "count": 36},
      {"month_of_crash": 4, "hour_of_crash": 5, "count": 51},
      {"month_of_crash": 4, "hour_of_crash": 6, "count": 20},
      {"month_of_crash": 4, "hour_of_crash": 7, "count": 4},
      {"month_of_crash": 4, "hour_of_crash": 8, "count": 2},
      {"month_of_crash": 4, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 4, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 4, "hour_of_crash": 11, "count": 1},
      {"month_of_crash": 4, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 4, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 4, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 4, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 4, "hour_of_crash": 16, "count": 1},
      {"month_of_crash": 4, "hour_of_crash": 17, "count": 0},
      {"month_of_crash": 4, "hour_of_crash": 18, "count": 1},
      {"month_of_crash": 4, "hour_of_crash": 19, "count": 14},
      {"month_of_crash": 4, "hour_of_crash": 20, "count": 84},
      {"month_of_crash": 4, "hour_of_crash": 21, "count": 79},
      {"month_of_crash": 4, "hour_of_crash": 22, "count": 94},
      {"month_of_crash": 4, "hour_of_crash": 23, "count": 65},
      {"month_of_crash": 5, "hour_of_crash": 0, "count": 68},
      {"month_of_crash": 5, "hour_of_crash": 1, "count": 66},
      {"month_of_crash": 5, "hour_of_crash": 2, "count": 71},
      {"month_of_crash": 5, "hour_of_crash": 3, "count": 49},
      {"month_of_crash": 5, "hour_of_crash": 4, "count": 46},
      {"month_of_crash": 5, "hour_of_crash": 5, "count": 36},
      {"month_of_crash": 5, "hour_of_crash": 6, "count": 19},
      {"month_of_crash": 5, "hour_of_crash": 7, "count": 3},
      {"month_of_crash": 5, "hour_of_crash": 8, "count": 4},
      {"month_of_crash": 5, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 16, "count": 2},
      {"month_of_crash": 5, "hour_of_crash": 17, "count": 1},
      {"month_of_crash": 5, "hour_of_crash": 18, "count": 0},
      {"month_of_crash": 5, "hour_of_crash": 19, "count": 10},
      {"month_of_crash": 5, "hour_of_crash": 20, "count": 67},
      {"month_of_crash": 5, "hour_of_crash": 21, "count": 103},
      {"month_of_crash": 5, "hour_of_crash": 22, "count": 90},
      {"month_of_crash": 5, "hour_of_crash": 23, "count": 82},
      {"month_of_crash": 6, "hour_of_crash": 0, "count": 62},
      {"month_of_crash": 6, "hour_of_crash": 1, "count": 71},
      {"month_of_crash": 6, "hour_of_crash": 2, "count": 62},
      {"month_of_crash": 6, "hour_of_crash": 3, "count": 56},
      {"month_of_crash": 6, "hour_of_crash": 4, "count": 51},
      {"month_of_crash": 6, "hour_of_crash": 5, "count": 24},
      {"month_of_crash": 6, "hour_of_crash": 6, "count": 9},
      {"month_of_crash": 6, "hour_of_crash": 7, "count": 1},
      {"month_of_crash": 6, "hour_of_crash": 8, "count": 3},
      {"month_of_crash": 6, "hour_of_crash": 9, "count": 1},
      {"month_of_crash": 6, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 16, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 17, "count": 1},
      {"month_of_crash": 6, "hour_of_crash": 18, "count": 0},
      {"month_of_crash": 6, "hour_of_crash": 19, "count": 3},
      {"month_of_crash": 6, "hour_of_crash": 20, "count": 32},
      {"month_of_crash": 6, "hour_of_crash": 21, "count": 92},
      {"month_of_crash": 6, "hour_of_crash": 22, "count": 84},
      {"month_of_crash": 6, "hour_of_crash": 23, "count": 81},
      {"month_of_crash": 7, "hour_of_crash": 0, "count": 86},
      {"month_of_crash": 7, "hour_of_crash": 1, "count": 52},
      {"month_of_crash": 7, "hour_of_crash": 2, "count": 82},
      {"month_of_crash": 7, "hour_of_crash": 3, "count": 61},
      {"month_of_crash": 7, "hour_of_crash": 4, "count": 48},
      {"month_of_crash": 7, "hour_of_crash": 5, "count": 37},
      {"month_of_crash": 7, "hour_of_crash": 6, "count": 9},
      {"month_of_crash": 7, "hour_of_crash": 7, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 8, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 10, "count": 1},
      {"month_of_crash": 7, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 16, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 17, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 18, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 19, "count": 0},
      {"month_of_crash": 7, "hour_of_crash": 20, "count": 31},
      {"month_of_crash": 7, "hour_of_crash": 21, "count": 94},
      {"month_of_crash": 7, "hour_of_crash": 22, "count": 85},
      {"month_of_crash": 7, "hour_of_crash": 23, "count": 81},
      {"month_of_crash": 8, "hour_of_crash": 0, "count": 65},
      {"month_of_crash": 8, "hour_of_crash": 1, "count": 68},
      {"month_of_crash": 8, "hour_of_crash": 2, "count": 66},
      {"month_of_crash": 8, "hour_of_crash": 3, "count": 55},
      {"month_of_crash": 8, "hour_of_crash": 4, "count": 53},
      {"month_of_crash": 8, "hour_of_crash": 5, "count": 47},
      {"month_of_crash": 8, "hour_of_crash": 6, "count": 25},
      {"month_of_crash": 8, "hour_of_crash": 7, "count": 7},
      {"month_of_crash": 8, "hour_of_crash": 8, "count": 4},
      {"month_of_crash": 8, "hour_of_crash": 9, "count": 1},
      {"month_of_crash": 8, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 8, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 8, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 8, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 8, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 8, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 8, "hour_of_crash": 16, "count": 1},
      {"month_of_crash": 8, "hour_of_crash": 17, "count": 0},
      {"month_of_crash": 8, "hour_of_crash": 18, "count": 1},
      {"month_of_crash": 8, "hour_of_crash": 19, "count": 5},
      {"month_of_crash": 8, "hour_of_crash": 20, "count": 75},
      {"month_of_crash": 8, "hour_of_crash": 21, "count": 97},
      {"month_of_crash": 8, "hour_of_crash": 22, "count": 93},
      {"month_of_crash": 8, "hour_of_crash": 23, "count": 84},
      {"month_of_crash": 9, "hour_of_crash": 0, "count": 59},
      {"month_of_crash": 9, "hour_of_crash": 1, "count": 78},
      {"month_of_crash": 9, "hour_of_crash": 2, "count": 78},
      {"month_of_crash": 9, "hour_of_crash": 3, "count": 53},
      {"month_of_crash": 9, "hour_of_crash": 4, "count": 46},
      {"month_of_crash": 9, "hour_of_crash": 5, "count": 64},
      {"month_of_crash": 9, "hour_of_crash": 6, "count": 55},
      {"month_of_crash": 9, "hour_of_crash": 7, "count": 6},
      {"month_of_crash": 9, "hour_of_crash": 8, "count": 2},
      {"month_of_crash": 9, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 16, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 17, "count": 0},
      {"month_of_crash": 9, "hour_of_crash": 18, "count": 4},
      {"month_of_crash": 9, "hour_of_crash": 19, "count": 52},
      {"month_of_crash": 9, "hour_of_crash": 20, "count": 109},
      {"month_of_crash": 9, "hour_of_crash": 21, "count": 95},
      {"month_of_crash": 9, "hour_of_crash": 22, "count": 76},
      {"month_of_crash": 9, "hour_of_crash": 23, "count": 68},
      {"month_of_crash": 10, "hour_of_crash": 0, "count": 64},
      {"month_of_crash": 10, "hour_of_crash": 1, "count": 70},
      {"month_of_crash": 10, "hour_of_crash": 2, "count": 84},
      {"month_of_crash": 10, "hour_of_crash": 3, "count": 46},
      {"month_of_crash": 10, "hour_of_crash": 4, "count": 42},
      {"month_of_crash": 10, "hour_of_crash": 5, "count": 78},
      {"month_of_crash": 10, "hour_of_crash": 6, "count": 75},
      {"month_of_crash": 10, "hour_of_crash": 7, "count": 9},
      {"month_of_crash": 10, "hour_of_crash": 8, "count": 3},
      {"month_of_crash": 10, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 10, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 10, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 10, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 10, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 10, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 10, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 10, "hour_of_crash": 16, "count": 1},
      {"month_of_crash": 10, "hour_of_crash": 17, "count": 6},
      {"month_of_crash": 10, "hour_of_crash": 18, "count": 35},
      {"month_of_crash": 10, "hour_of_crash": 19, "count": 119},
      {"month_of_crash": 10, "hour_of_crash": 20, "count": 106},
      {"month_of_crash": 10, "hour_of_crash": 21, "count": 86},
      {"month_of_crash": 10, "hour_of_crash": 22, "count": 99},
      {"month_of_crash": 10, "hour_of_crash": 23, "count": 72},
      {"month_of_crash": 11, "hour_of_crash": 0, "count": 70},
      {"month_of_crash": 11, "hour_of_crash": 1, "count": 53},
      {"month_of_crash": 11, "hour_of_crash": 2, "count": 55},
      {"month_of_crash": 11, "hour_of_crash": 3, "count": 59},
      {"month_of_crash": 11, "hour_of_crash": 4, "count": 32},
      {"month_of_crash": 11, "hour_of_crash": 5, "count": 75},
      {"month_of_crash": 11, "hour_of_crash": 6, "count": 53},
      {"month_of_crash": 11, "hour_of_crash": 7, "count": 7},
      {"month_of_crash": 11, "hour_of_crash": 8, "count": 1},
      {"month_of_crash": 11, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 11, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 11, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 11, "hour_of_crash": 12, "count": 1},
      {"month_of_crash": 11, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 11, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 11, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 11, "hour_of_crash": 16, "count": 5},
      {"month_of_crash": 11, "hour_of_crash": 17, "count": 69},
      {"month_of_crash": 11, "hour_of_crash": 18, "count": 136},
      {"month_of_crash": 11, "hour_of_crash": 19, "count": 92},
      {"month_of_crash": 11, "hour_of_crash": 20, "count": 84},
      {"month_of_crash": 11, "hour_of_crash": 21, "count": 49},
      {"month_of_crash": 11, "hour_of_crash": 22, "count": 66},
      {"month_of_crash": 11, "hour_of_crash": 23, "count": 79},
      {"month_of_crash": 12, "hour_of_crash": 0, "count": 62},
      {"month_of_crash": 12, "hour_of_crash": 1, "count": 77},
      {"month_of_crash": 12, "hour_of_crash": 2, "count": 59},
      {"month_of_crash": 12, "hour_of_crash": 3, "count": 35},
      {"month_of_crash": 12, "hour_of_crash": 4, "count": 38},
      {"month_of_crash": 12, "hour_of_crash": 5, "count": 58},
      {"month_of_crash": 12, "hour_of_crash": 6, "count": 55},
      {"month_of_crash": 12, "hour_of_crash": 7, "count": 10},
      {"month_of_crash": 12, "hour_of_crash": 8, "count": 2},
      {"month_of_crash": 12, "hour_of_crash": 9, "count": 0},
      {"month_of_crash": 12, "hour_of_crash": 10, "count": 0},
      {"month_of_crash": 12, "hour_of_crash": 11, "count": 0},
      {"month_of_crash": 12, "hour_of_crash": 12, "count": 0},
      {"month_of_crash": 12, "hour_of_crash": 13, "count": 0},
      {"month_of_crash": 12, "hour_of_crash": 14, "count": 0},
      {"month_of_crash": 12, "hour_of_crash": 15, "count": 0},
      {"month_of_crash": 12, "hour_of_crash": 16, "count": 8},
      {"month_of_crash": 12, "hour_of_crash": 17, "count": 89},
      {"month_of_crash": 12, "hour_of_crash": 18, "count": 116},
      {"month_of_crash": 12, "hour_of_crash": 19, "count": 97},
      {"month_of_crash": 12, "hour_of_crash": 20, "count": 87},
      {"month_of_crash": 12, "hour_of_crash": 21, "count": 71},
      {"month_of_crash": 12, "hour_of_crash": 22, "count": 74},
      {"month_of_crash": 12, "hour_of_crash": 23, "count": 63}
    ]
  }
};
const vehicleBodyType = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-f12efd0844c051951835728d415a943b"},
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
      {"type": "nominal", "field": "body_type_name"},
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
      "axis": {"title": "Vehicle body type"},
      "field": "body_type_name"
    }
  },
  "transform": [
    {
      "calculate": "if(datum.injury_severity_name === 'Fatal Injury (K)', 0,            if(datum.injury_severity_name === 'Suspected Serious Injury (A)', 1,            if(datum.injury_severity_name === 'Suspected Minor Injury (B)', 2,            if(datum.injury_severity_name === 'Possible Injury (C)', 3,            if(datum.injury_severity_name === 'Injured, Severity Unknown (U) (Since 1978)', 4,            if(datum.injury_severity_name === 'No Apparent Injury (O)', 5, 6))))))",
      "as": "order"
    }
  ],
  "width": DEFAULT_GRAPH_WIDTH_MEDIUM,
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-f12efd0844c051951835728d415a943b": [
      {
        "body_type_name": "2-Door Sedan/Hardtop/Coupe",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 447
      },
      {
        "body_type_name": "2-Door Sedan/Hardtop/Coupe",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 387
      },
      {
        "body_type_name": "2-Door Sedan/Hardtop/Coupe",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 8
      },
      {
        "body_type_name": "2-Door Sedan/Hardtop/Coupe",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 647
      },
      {
        "body_type_name": "2-Door Sedan/Hardtop/Coupe",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1636
      },
      {
        "body_type_name": "2-Door Sedan/Hardtop/Coupe",
        "injury_severity_name": "Possible Injury (C)",
        "count": 258
      },
      {
        "body_type_name": "3-Door Coupe",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 4
      },
      {
        "body_type_name": "3-Door Coupe",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 16
      },
      {
        "body_type_name": "3-Door Coupe",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "body_type_name": "3-Door Coupe",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "body_type_name": "3-Door/2-Door Hatchback",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 90
      },
      {
        "body_type_name": "3-Door/2-Door Hatchback",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 6
      },
      {
        "body_type_name": "3-Door/2-Door Hatchback",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 478
      },
      {
        "body_type_name": "3-Door/2-Door Hatchback",
        "injury_severity_name": "Possible Injury (C)",
        "count": 49
      },
      {
        "body_type_name": "3-Door/2-Door Hatchback",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 93
      },
      {
        "body_type_name": "3-Door/2-Door Hatchback",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 148
      },
      {
        "body_type_name": "4-Door Sedan/Hardtop",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 9674
      },
      {
        "body_type_name": "4-Door Sedan/Hardtop",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2690
      },
      {
        "body_type_name": "4-Door Sedan/Hardtop",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 5404
      },
      {
        "body_type_name": "4-Door Sedan/Hardtop",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 2715
      },
      {
        "body_type_name": "4-Door Sedan/Hardtop",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2052
      },
      {
        "body_type_name": "4-Door Sedan/Hardtop",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 80
      },
      {
        "body_type_name": "5-Door/4-Door Hatchback",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 153
      },
      {
        "body_type_name": "5-Door/4-Door Hatchback",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 320
      },
      {
        "body_type_name": "5-Door/4-Door Hatchback",
        "injury_severity_name": "Possible Injury (C)",
        "count": 127
      },
      {
        "body_type_name": "5-Door/4-Door Hatchback",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 145
      },
      {
        "body_type_name": "5-Door/4-Door Hatchback",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 5
      },
      {
        "body_type_name": "5-Door/4-Door Hatchback",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 465
      },
      {
        "body_type_name": "ATV (All-Terrain Vehicle; Includes 3 or 4 Wheels)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 23
      },
      {
        "body_type_name": "ATV (All-Terrain Vehicle; Includes 3 or 4 Wheels)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 45
      },
      {
        "body_type_name": "ATV (All-Terrain Vehicle; Includes 3 or 4 Wheels)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 354
      },
      {
        "body_type_name": "ATV (All-Terrain Vehicle; Includes 3 or 4 Wheels)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 37
      },
      {
        "body_type_name": "ATV (All-Terrain Vehicle; Includes 3 or 4 Wheels)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 17
      },
      {
        "body_type_name": "Auto-Based Pickup",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 3
      },
      {
        "body_type_name": "Auto-Based Pickup",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Auto-Based Pickup",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 14
      },
      {
        "body_type_name": "Cab Chassis-Based (Includes Light Stake, Light Dump, Light Tow, Rescue\nVehicles)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 86
      },
      {
        "body_type_name": "Cab Chassis-Based (Includes Light Stake, Light Dump, Light Tow, Rescue\nVehicles)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 24
      },
      {
        "body_type_name": "Cab Chassis-Based (Includes Light Stake, Light Dump, Light Tow, Rescue\nVehicles)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 26
      },
      {
        "body_type_name": "Cab Chassis-Based (Includes Light Stake, Light Dump, Light Tow, Rescue\nVehicles)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 77
      },
      {
        "body_type_name": "Cab Chassis-Based (Includes Light Stake, Light Dump, Light Tow, Rescue\nVehicles)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 28
      },
      {
        "body_type_name": "Camper or Motorhome, Unknown Truck Type",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "body_type_name": "Camper or Motorhome, Unknown Truck Type",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3
      },
      {
        "body_type_name": "Camper or Motorhome, Unknown Truck Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 8
      },
      {
        "body_type_name": "Camper or Motorhome, Unknown Truck Type",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "body_type_name": "Camper or Motorhome, Unknown Truck Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 14
      },
      {
        "body_type_name": "Compact Pickup (Gross Vehicle Weight, GVWR, < 4,500 lbs)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "body_type_name": "Compact Pickup (Gross Vehicle Weight, GVWR, < 4,500 lbs)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 235
      },
      {
        "body_type_name": "Compact Pickup (Gross Vehicle Weight, GVWR, < 4,500 lbs)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1086
      },
      {
        "body_type_name": "Compact Pickup (Gross Vehicle Weight, GVWR, < 4,500 lbs)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 158
      },
      {
        "body_type_name": "Compact Pickup (Gross Vehicle Weight, GVWR, < 4,500 lbs)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 270
      },
      {
        "body_type_name": "Compact Pickup (Gross Vehicle Weight, GVWR, < 4,500 lbs)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 474
      },
      {
        "body_type_name": "Compact Utility (ANSI D-16 Utility Vehicle Categories “Small” and “Midsize”)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1399
      },
      {
        "body_type_name": "Compact Utility (ANSI D-16 Utility Vehicle Categories “Small” and “Midsize”)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 2767
      },
      {
        "body_type_name": "Compact Utility (ANSI D-16 Utility Vehicle Categories “Small” and “Midsize”)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 41
      },
      {
        "body_type_name": "Compact Utility (ANSI D-16 Utility Vehicle Categories “Small” and “Midsize”)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1086
      },
      {
        "body_type_name": "Compact Utility (ANSI D-16 Utility Vehicle Categories “Small” and “Midsize”)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1314
      },
      {
        "body_type_name": "Compact Utility (ANSI D-16 Utility Vehicle Categories “Small” and “Midsize”)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 3330
      },
      {
        "body_type_name": "Construction Equipment Other Than Trucks (Includes Graders)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 15
      },
      {
        "body_type_name": "Construction Equipment Other Than Trucks (Includes Graders)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Construction Equipment Other Than Trucks (Includes Graders)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "body_type_name": "Construction Equipment Other Than Trucks (Includes Graders)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4
      },
      {
        "body_type_name": "Construction Equipment Other Than Trucks (Includes Graders)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1
      },
      {
        "body_type_name": "Convertible (Excludes Sunroof, T-Bar)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 259
      },
      {
        "body_type_name": "Convertible (Excludes Sunroof, T-Bar)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 35
      },
      {
        "body_type_name": "Convertible (Excludes Sunroof, T-Bar)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "body_type_name": "Convertible (Excludes Sunroof, T-Bar)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 88
      },
      {
        "body_type_name": "Convertible (Excludes Sunroof, T-Bar)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 57
      },
      {
        "body_type_name": "Convertible (Excludes Sunroof, T-Bar)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 68
      },
      {
        "body_type_name": "Cross-Country/Intercity Bus (i.e., Greyhound)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "body_type_name": "Cross-Country/Intercity Bus (i.e., Greyhound)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 9
      },
      {
        "body_type_name": "Cross-Country/Intercity Bus (i.e., Greyhound)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 31
      },
      {
        "body_type_name": "Cross-Country/Intercity Bus (i.e., Greyhound)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 10
      },
      {
        "body_type_name": "Cross-Country/Intercity Bus (i.e., Greyhound)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 25
      },
      {
        "body_type_name": "Cross-Country/Intercity Bus (i.e., Greyhound)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 45
      },
      {
        "body_type_name": "Farm Equipment Other Than Trucks",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Farm Equipment Other Than Trucks",
        "injury_severity_name": "Possible Injury (C)",
        "count": 6
      },
      {
        "body_type_name": "Farm Equipment Other Than Trucks",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 11
      },
      {
        "body_type_name": "Farm Equipment Other Than Trucks",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 50
      },
      {
        "body_type_name": "Farm Equipment Other Than Trucks",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 38
      },
      {
        "body_type_name": "Golf Cart (Since 2012)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "body_type_name": "Golf Cart (Since 2012)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "body_type_name": "Golf Cart (Since 2012)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 33
      },
      {
        "body_type_name": "Golf Cart (Since 2012)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 4
      },
      {
        "body_type_name": "Golf Cart (Since 2012)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 23
      },
      {
        "body_type_name": "Hatchback, Number of Doors Unknown",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "body_type_name": "Hatchback, Number of Doors Unknown",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "body_type_name": "Large Limousine – More Than Four Side Doors or Stretch Chassis",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "body_type_name": "Large Limousine – More Than Four Side Doors or Stretch Chassis",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "body_type_name": "Large Limousine – More Than Four Side Doors or Stretch Chassis",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "body_type_name": "Large Limousine – More Than Four Side Doors or Stretch Chassis",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 4
      },
      {
        "body_type_name": "Large Utility (ANSI D-16 Utility Vehicle Categories “Full Size” and “Large”)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 491
      },
      {
        "body_type_name": "Large Utility (ANSI D-16 Utility Vehicle Categories “Full Size” and “Large”)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 11
      },
      {
        "body_type_name": "Large Utility (ANSI D-16 Utility Vehicle Categories “Full Size” and “Large”)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 559
      },
      {
        "body_type_name": "Large Utility (ANSI D-16 Utility Vehicle Categories “Full Size” and “Large”)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 966
      },
      {
        "body_type_name": "Large Utility (ANSI D-16 Utility Vehicle Categories “Full Size” and “Large”)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1362
      },
      {
        "body_type_name": "Large Utility (ANSI D-16 Utility Vehicle Categories “Full Size” and “Large”)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 644
      },
      {
        "body_type_name": "Large Van – Includes Van-Based Buses",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 5
      },
      {
        "body_type_name": "Large Van – Includes Van-Based Buses",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 268
      },
      {
        "body_type_name": "Large Van – Includes Van-Based Buses",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 217
      },
      {
        "body_type_name": "Large Van – Includes Van-Based Buses",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 154
      },
      {
        "body_type_name": "Large Van – Includes Van-Based Buses",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 405
      },
      {
        "body_type_name": "Large Van – Includes Van-Based Buses",
        "injury_severity_name": "Possible Injury (C)",
        "count": 193
      },
      {
        "body_type_name": "Low Speed Vehicle (LSV)/Neighborhood Electric Vehicle (NEV)\n(Since 2011)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "body_type_name": "Low Speed Vehicle (LSV)/Neighborhood Electric Vehicle (NEV)\n(Since 2011)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 3
      },
      {
        "body_type_name": "Medium/Heavy Pickup (GVWR > 10,000 lbs)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 35
      },
      {
        "body_type_name": "Medium/Heavy Pickup (GVWR > 10,000 lbs)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 39
      },
      {
        "body_type_name": "Medium/Heavy Pickup (GVWR > 10,000 lbs)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 27
      },
      {
        "body_type_name": "Medium/Heavy Pickup (GVWR > 10,000 lbs)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 3
      },
      {
        "body_type_name": "Medium/Heavy Pickup (GVWR > 10,000 lbs)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 23
      },
      {
        "body_type_name": "Medium/Heavy Pickup (GVWR > 10,000 lbs)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 132
      },
      {
        "body_type_name": "Medium/Heavy Truck-Based Motorhome",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 34
      },
      {
        "body_type_name": "Medium/Heavy Truck-Based Motorhome",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 5
      },
      {
        "body_type_name": "Medium/Heavy Truck-Based Motorhome",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 7
      },
      {
        "body_type_name": "Medium/Heavy Truck-Based Motorhome",
        "injury_severity_name": "Possible Injury (C)",
        "count": 8
      },
      {
        "body_type_name": "Medium/Heavy Truck-Based Motorhome",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 10
      },
      {
        "body_type_name": "Minivan",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 8
      },
      {
        "body_type_name": "Minivan",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1014
      },
      {
        "body_type_name": "Minivan",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 540
      },
      {
        "body_type_name": "Minivan",
        "injury_severity_name": "Possible Injury (C)",
        "count": 378
      },
      {
        "body_type_name": "Minivan",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 951
      },
      {
        "body_type_name": "Minivan",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 443
      },
      {
        "body_type_name": "Moped (Motorized Bicycle)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Moped (Motorized Bicycle)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "body_type_name": "Moped (Motorized Bicycle)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 134
      },
      {
        "body_type_name": "Moped (Motorized Bicycle)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3
      },
      {
        "body_type_name": "Moped (Motorized Bicycle)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "body_type_name": "Motorcycle",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 341
      },
      {
        "body_type_name": "Motorcycle",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 86
      },
      {
        "body_type_name": "Motorcycle",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 9
      },
      {
        "body_type_name": "Motorcycle",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4972
      },
      {
        "body_type_name": "Motorcycle",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 184
      },
      {
        "body_type_name": "Motorcycle",
        "injury_severity_name": "Possible Injury (C)",
        "count": 68
      },
      {
        "body_type_name": "Not Reported",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "body_type_name": "Off-Road Motorcycle (2-Wheel)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "body_type_name": "Off-Road Motorcycle (2-Wheel)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1
      },
      {
        "body_type_name": "Off-Road Motorcycle (2-Wheel)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 5
      },
      {
        "body_type_name": "Off-Road Motorcycle (2-Wheel)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 52
      },
      {
        "body_type_name": "Other Bus Type",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 89
      },
      {
        "body_type_name": "Other Bus Type",
        "injury_severity_name": "Possible Injury (C)",
        "count": 62
      },
      {
        "body_type_name": "Other Bus Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 10
      },
      {
        "body_type_name": "Other Bus Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 27
      },
      {
        "body_type_name": "Other Bus Type",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 49
      },
      {
        "body_type_name": "Other Motored Cycle Type (Mini-Bikes, Motor Scooters, Pocket Motorcycles,\nPocket Bikes) (Since 2008)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1
      },
      {
        "body_type_name": "Other Motored Cycle Type (Mini-Bikes, Motor Scooters, Pocket Motorcycles,\nPocket Bikes) (Since 2008)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 117
      },
      {
        "body_type_name": "Other Motored Cycle Type (Mini-Bikes, Motor Scooters, Pocket Motorcycles,\nPocket Bikes) (Since 2008)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "body_type_name": "Other Motored Cycle Type (Mini-Bikes, Motor Scooters, Pocket Motorcycles,\nPocket Bikes) (Since 2008)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "body_type_name": "Other Motored Cycle Type (Mini-Bikes, Motor Scooters, Pocket Motorcycles,\nPocket Bikes) (Since 2008)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 3
      },
      {
        "body_type_name": "Other Van Type (Hi-Cube Van)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 6
      },
      {
        "body_type_name": "Other Van Type (Hi-Cube Van)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 13
      },
      {
        "body_type_name": "Other Van Type (Hi-Cube Van)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 5
      },
      {
        "body_type_name": "Other Van Type (Hi-Cube Van)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3
      },
      {
        "body_type_name": "Other Vehicle Type (Includes Go-Cart, Fork-Lift, City Street Sweeper,\nDune/Swamp Buggy, Golf Cart)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 68
      },
      {
        "body_type_name": "Other Vehicle Type (Includes Go-Cart, Fork-Lift, City Street Sweeper,\nDune/Swamp Buggy, Golf Cart)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 8
      },
      {
        "body_type_name": "Other Vehicle Type (Includes Go-Cart, Fork-Lift, City Street Sweeper,\nDune/Swamp Buggy, Golf Cart)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 6
      },
      {
        "body_type_name": "Other Vehicle Type (Includes Go-Cart, Fork-Lift, City Street Sweeper,\nDune/Swamp Buggy, Golf Cart)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 16
      },
      {
        "body_type_name": "Other Vehicle Type (Includes Go-Cart, Fork-Lift, City Street Sweeper,\nDune/Swamp Buggy, Golf Cart)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 33
      },
      {
        "body_type_name": "Other or Unknown Automobile Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 58
      },
      {
        "body_type_name": "Other or Unknown Automobile Type",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 13
      },
      {
        "body_type_name": "Other or Unknown Automobile Type",
        "injury_severity_name": "Possible Injury (C)",
        "count": 7
      },
      {
        "body_type_name": "Other or Unknown Automobile Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 53
      },
      {
        "body_type_name": "Other or Unknown Automobile Type",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 11
      },
      {
        "body_type_name": "Pickup with Slide-In Camper",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 14
      },
      {
        "body_type_name": "Pickup with Slide-In Camper",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 16
      },
      {
        "body_type_name": "Pickup with Slide-In Camper",
        "injury_severity_name": "Possible Injury (C)",
        "count": 3
      },
      {
        "body_type_name": "Pickup with Slide-In Camper",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 5
      },
      {
        "body_type_name": "Pickup with Slide-In Camper",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 4
      },
      {
        "body_type_name": "School Bus",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "body_type_name": "School Bus",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 63
      },
      {
        "body_type_name": "School Bus",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 11
      },
      {
        "body_type_name": "School Bus",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 10
      },
      {
        "body_type_name": "School Bus",
        "injury_severity_name": "Possible Injury (C)",
        "count": 127
      },
      {
        "body_type_name": "School Bus",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 76
      },
      {
        "body_type_name": "Sedan/Hardtop, Number of Doors Unknown",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 4
      },
      {
        "body_type_name": "Sedan/Hardtop, Number of Doors Unknown",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 6
      },
      {
        "body_type_name": "Single Unit Straight Truck or Cab-Chassis (GVWR Unknown) (Since 2011)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 178
      },
      {
        "body_type_name": "Single Unit Straight Truck or Cab-Chassis (GVWR Unknown) (Since 2011)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 15
      },
      {
        "body_type_name": "Single Unit Straight Truck or Cab-Chassis (GVWR Unknown) (Since 2011)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 39
      },
      {
        "body_type_name": "Single Unit Straight Truck or Cab-Chassis (GVWR Unknown) (Since 2011)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 35
      },
      {
        "body_type_name": "Single Unit Straight Truck or Cab-Chassis (GVWR Unknown) (Since 2011)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 50
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (10,000 lbs < GVWR <=\n19,500 lbs) (Since 2011)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 32
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (10,000 lbs < GVWR <=\n19,500 lbs) (Since 2011)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 27
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (10,000 lbs < GVWR <=\n19,500 lbs) (Since 2011)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 153
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (10,000 lbs < GVWR <=\n19,500 lbs) (Since 2011)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 39
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (10,000 lbs < GVWR <=\n19,500 lbs) (Since 2011)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 1
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (10,000 lbs < GVWR <=\n19,500 lbs) (Since 2011)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 46
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (19,500 lbs < GVWR <=\n26,000 lbs) (Since 2011)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 30
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (19,500 lbs < GVWR <=\n26,000 lbs) (Since 2011)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 23
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (19,500 lbs < GVWR <=\n26,000 lbs) (Since 2011)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 44
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (19,500 lbs < GVWR <=\n26,000 lbs) (Since 2011)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 13
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (19,500 lbs < GVWR <=\n26,000 lbs) (Since 2011)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (19,500 lbs < GVWR <=\n26,000 lbs) (Since 2011)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 120
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (GVWR > 26,000 lbs) (Since 2011)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 79
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (GVWR > 26,000 lbs) (Since 2011)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 76
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (GVWR > 26,000 lbs) (Since 2011)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 54
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (GVWR > 26,000 lbs) (Since 2011)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 346
      },
      {
        "body_type_name": "Single-Unit Straight Truck or Cab-Chassis (GVWR > 26,000 lbs) (Since 2011)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 29
      },
      {
        "body_type_name": "Snowmobile",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "body_type_name": "Snowmobile",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Snowmobile",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 16
      },
      {
        "body_type_name": "Standard Pickup",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 28
      },
      {
        "body_type_name": "Standard Pickup",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1092
      },
      {
        "body_type_name": "Standard Pickup",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 3451
      },
      {
        "body_type_name": "Standard Pickup",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1155
      },
      {
        "body_type_name": "Standard Pickup",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 3377
      },
      {
        "body_type_name": "Standard Pickup",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1556
      },
      {
        "body_type_name": "Station Wagon (Excluding Van and Truck-Based)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 11
      },
      {
        "body_type_name": "Station Wagon (Excluding Van and Truck-Based)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 281
      },
      {
        "body_type_name": "Station Wagon (Excluding Van and Truck-Based)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 943
      },
      {
        "body_type_name": "Station Wagon (Excluding Van and Truck-Based)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 324
      },
      {
        "body_type_name": "Station Wagon (Excluding Van and Truck-Based)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 397
      },
      {
        "body_type_name": "Station Wagon (Excluding Van and Truck-Based)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 838
      },
      {
        "body_type_name": "Step Van",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "body_type_name": "Step Van",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 3
      },
      {
        "body_type_name": "Step Van",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "body_type_name": "Step Van or Walk-In Van",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 5
      },
      {
        "body_type_name": "Step Van or Walk-In Van",
        "injury_severity_name": "Possible Injury (C)",
        "count": 4
      },
      {
        "body_type_name": "Step Van or Walk-In Van",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 11
      },
      {
        "body_type_name": "Step Van or Walk-In Van",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 11
      },
      {
        "body_type_name": "Step Van or Walk-In Van",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 9
      },
      {
        "body_type_name": "Three-Wheel Motorcycle/Moped- Not All-Terrain Vehicle",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 12
      },
      {
        "body_type_name": "Three-Wheel Motorcycle/Moped- Not All-Terrain Vehicle",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 44
      },
      {
        "body_type_name": "Three-Wheel Motorcycle/Moped- Not All-Terrain Vehicle",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1
      },
      {
        "body_type_name": "Three-Wheel Motorcycle/Moped- Not All-Terrain Vehicle",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 1
      },
      {
        "body_type_name": "Transit Bus (City Bus)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 115
      },
      {
        "body_type_name": "Transit Bus (City Bus)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 14
      },
      {
        "body_type_name": "Transit Bus (City Bus)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 67
      },
      {
        "body_type_name": "Transit Bus (City Bus)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 87
      },
      {
        "body_type_name": "Transit Bus (City Bus)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 7
      },
      {
        "body_type_name": "Transit Bus (City Bus)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 5
      },
      {
        "body_type_name": "Truck/Tractor (Cab Only, or with Any Number of Trailing Units: Any Weight)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 295
      },
      {
        "body_type_name": "Truck/Tractor (Cab Only, or with Any Number of Trailing Units: Any Weight)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 108
      },
      {
        "body_type_name": "Truck/Tractor (Cab Only, or with Any Number of Trailing Units: Any Weight)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "body_type_name": "Truck/Tractor (Cab Only, or with Any Number of Trailing Units: Any Weight)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 2010
      },
      {
        "body_type_name": "Truck/Tractor (Cab Only, or with Any Number of Trailing Units: Any Weight)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 472
      },
      {
        "body_type_name": "Truck/Tractor (Cab Only, or with Any Number of Trailing Units: Any Weight)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 268
      },
      {
        "body_type_name": "Unknown (Pickup Style) Light Conventional Truck Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 11
      },
      {
        "body_type_name": "Unknown (Pickup Style) Light Conventional Truck Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 13
      },
      {
        "body_type_name": "Unknown (Pickup Style) Light Conventional Truck Type",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 6
      },
      {
        "body_type_name": "Unknown Body Type",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 6
      },
      {
        "body_type_name": "Unknown Body Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 67
      },
      {
        "body_type_name": "Unknown Body Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 332
      },
      {
        "body_type_name": "Unknown Body Type",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 7
      },
      {
        "body_type_name": "Unknown Body Type",
        "injury_severity_name": "Possible Injury (C)",
        "count": 9
      },
      {
        "body_type_name": "Unknown Body Type",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 4
      },
      {
        "body_type_name": "Unknown Bus Type",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "body_type_name": "Unknown Bus Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 6
      },
      {
        "body_type_name": "Unknown Light Truck Type (Since 2013)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3
      },
      {
        "body_type_name": "Unknown Light Truck Type (Since 2013)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "body_type_name": "Unknown Light Truck Type (Since 2013)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 7
      },
      {
        "body_type_name": "Unknown Light Truck Type (Since 2013)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 6
      },
      {
        "body_type_name": "Unknown Light Truck Type (Since 2013)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "body_type_name": "Unknown Light-Vehicle Type (Automobile, Utility Vehicle, Van or Light Truck)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 1
      },
      {
        "body_type_name": "Unknown Light-Vehicle Type (Automobile, Utility Vehicle, Van or Light Truck)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 2
      },
      {
        "body_type_name": "Unknown Light-Vehicle Type (Automobile, Utility Vehicle, Van or Light Truck)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 13
      },
      {
        "body_type_name": "Unknown Light-Vehicle Type (Automobile, Utility Vehicle, Van or Light Truck)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 6
      },
      {
        "body_type_name": "Unknown Light-Vehicle Type (Automobile, Utility Vehicle, Van or Light Truck)",
        "injury_severity_name": "Injured, Severity Unknown (U) (Since 1978)",
        "count": 2
      },
      {
        "body_type_name": "Unknown Light-Vehicle Type (Automobile, Utility Vehicle, Van or Light Truck)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 14
      },
      {
        "body_type_name": "Unknown Medium/Heavy Truck Type",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 3
      },
      {
        "body_type_name": "Unknown Medium/Heavy Truck Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 27
      },
      {
        "body_type_name": "Unknown Medium/Heavy Truck Type",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 9
      },
      {
        "body_type_name": "Unknown Medium/Heavy Truck Type",
        "injury_severity_name": "Possible Injury (C)",
        "count": 7
      },
      {
        "body_type_name": "Unknown Medium/Heavy Truck Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 6
      },
      {
        "body_type_name": "Unknown Motored Cycle Type",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Unknown Motored Cycle Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 19
      },
      {
        "body_type_name": "Unknown Truck Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 5
      },
      {
        "body_type_name": "Unknown Van Type",
        "injury_severity_name": "Possible Injury (C)",
        "count": 2
      },
      {
        "body_type_name": "Unknown Van Type",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 6
      },
      {
        "body_type_name": "Unknown Van Type",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 3
      },
      {
        "body_type_name": "Unknown Van Type",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 32
      },
      {
        "body_type_name": "Unknown Van Type",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 9
      },
      {
        "body_type_name": "Unknown if Single-Unit or Combination-Unit Heavy Truck (GVWR >\n26,000 lbs.)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 1
      },
      {
        "body_type_name": "Unknown if Single-Unit or Combination-Unit Heavy Truck (GVWR >\n26,000 lbs.)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 5
      },
      {
        "body_type_name": "Unknown if Single-Unit or Combination-Unit Heavy Truck (GVWR >\n26,000 lbs.)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 4
      },
      {
        "body_type_name": "Unknown if Single-Unit or Combination-Unit Medium Truck (10,000 lbs <\nGVWR < 26,000 lbs)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 3
      },
      {
        "body_type_name": "Unknown if Single-Unit or Combination-Unit Medium Truck (10,000 lbs <\nGVWR < 26,000 lbs)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 1
      },
      {
        "body_type_name": "Unknown if Single-Unit or Combination-Unit Medium Truck (10,000 lbs <\nGVWR < 26,000 lbs)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Unknown if Single-Unit or Combination-Unit Medium Truck (10,000 lbs <\nGVWR < 26,000 lbs)",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 9
      },
      {
        "body_type_name": "Utility Station Wagon",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 70
      },
      {
        "body_type_name": "Utility Station Wagon",
        "injury_severity_name": "Possible Injury (C)",
        "count": 81
      },
      {
        "body_type_name": "Utility Station Wagon",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 173
      },
      {
        "body_type_name": "Utility Station Wagon",
        "injury_severity_name": "No Apparent Injury (O)",
        "count": 160
      },
      {
        "body_type_name": "Utility Station Wagon",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 126
      },
      {
        "body_type_name": "Van-Based Bus GVWR > 10,000 lbs. (Since 2011)",
        "injury_severity_name": "Suspected Minor Injury (B)",
        "count": 7
      },
      {
        "body_type_name": "Van-Based Bus GVWR > 10,000 lbs. (Since 2011)",
        "injury_severity_name": "Suspected Serious Injury (A)",
        "count": 1
      },
      {
        "body_type_name": "Van-Based Bus GVWR > 10,000 lbs. (Since 2011)",
        "injury_severity_name": "Fatal Injury (K)",
        "count": 3
      },
      {
        "body_type_name": "Van-Based Bus GVWR > 10,000 lbs. (Since 2011)",
        "injury_severity_name": "Possible Injury (C)",
        "count": 5
      }
    ]
  }
};
const commonCausesWithSpeedingHighlighted =
  {
  "title": "Top 10 most-common critical pre-crash events in fatal crashes",
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-c2d091d6bc118aa15de38c3fadc223c8"},
  "mark": "bar",
  "encoding": {
    "color": {
      "condition": {"value": "orange", "test": "(datum.cnt === 2679)"},
      "value": "steelblue"
    },
    "tooltip": [
      {"type": "nominal", "field": "critical_event_precrash_name"},
      {"type": "quantitative", "field": "cnt"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "Crash Count"},
      "field": "cnt"
    },
    "y": {
      "type": "nominal",
      "axis": {"title": ""},
      "field": "critical_event_precrash_name",
      "sort": {"op": "sum", "field": "cnt", "order": "descending"}
    }
  },
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-c2d091d6bc118aa15de38c3fadc223c8": [
      {
        "critical_event_precrash_name": "From Opposite Direction Over Left Lane Line",
        "cnt": 6215
      },
      {
        "critical_event_precrash_name": "Off the Edge of the Road on the Right Side",
        "cnt": 5415
      },
      {"critical_event_precrash_name": "Pedestrian in Road", "cnt": 5408},
      {
        "critical_event_precrash_name": "Over the Lane Line on Left Side of Travel Lane",
        "cnt": 3695
      },
      {
        "critical_event_precrash_name": "Off the Edge of the Road on the Left Side",
        "cnt": 3617
      },
      {
        "critical_event_precrash_name": "Traveling In Same Direction with Higher Speed",
        "cnt": 3132
      },
      {
        "critical_event_precrash_name": "Crossing Over (Passing Through) Intersection",
        "cnt": 2798
      },
      {
        "critical_event_precrash_name": "Traveling Too Fast For Conditions",
        "cnt": 2679
      },
      {"critical_event_precrash_name": "Turning Left at Junction", "cnt": 2585},
      {
        "critical_event_precrash_name": "From Crossing Street, Across Path",
        "cnt": 2329
      }
    ]
  }
};
const weatherTime = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-6d5a7b07fa3a856c2501b880708838d8"},
  "mark": "circle",
  "encoding": {
    "color": {"type": "quantitative", "aggregate": "sum", "field": "count"},
    "size": {
      "type": "quantitative",
      "aggregate": "sum",
      "field": "count",
      "title": "Crash Count"
    },
    "tooltip": [
      {"type": "quantitative", "field": "month_of_crash"},
      {"type": "quantitative", "field": "hour_of_crash"},
      {"type": "quantitative", "field": "count"}
    ],
    "x": {
      "type": "ordinal",
      "axis": {"title": "Hour of Crash"},
      "field": "hour_of_crash"
    },
    "y": {
      "type": "ordinal",
      "axis": {"title": "Month of Crash"},
      "field": "month_of_crash"
    }
  },
  "title": "Atmospheric condition: adverse weather",
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-6d5a7b07fa3a856c2501b880708838d8": [
      {"month_of_crash": 1, "hour_of_crash": 0, "count": 13},
      {"month_of_crash": 1, "hour_of_crash": 1, "count": 7},
      {"month_of_crash": 1, "hour_of_crash": 2, "count": 14},
      {"month_of_crash": 1, "hour_of_crash": 3, "count": 11},
      {"month_of_crash": 1, "hour_of_crash": 4, "count": 12},
      {"month_of_crash": 1, "hour_of_crash": 5, "count": 14},
      {"month_of_crash": 1, "hour_of_crash": 6, "count": 12},
      {"month_of_crash": 1, "hour_of_crash": 7, "count": 15},
      {"month_of_crash": 1, "hour_of_crash": 8, "count": 15},
      {"month_of_crash": 1, "hour_of_crash": 9, "count": 7},
      {"month_of_crash": 1, "hour_of_crash": 10, "count": 8},
      {"month_of_crash": 1, "hour_of_crash": 11, "count": 11},
      {"month_of_crash": 1, "hour_of_crash": 12, "count": 9},
      {"month_of_crash": 1, "hour_of_crash": 13, "count": 12},
      {"month_of_crash": 1, "hour_of_crash": 14, "count": 14},
      {"month_of_crash": 1, "hour_of_crash": 15, "count": 9},
      {"month_of_crash": 1, "hour_of_crash": 16, "count": 7},
      {"month_of_crash": 1, "hour_of_crash": 17, "count": 15},
      {"month_of_crash": 1, "hour_of_crash": 18, "count": 23},
      {"month_of_crash": 1, "hour_of_crash": 19, "count": 11},
      {"month_of_crash": 1, "hour_of_crash": 20, "count": 21},
      {"month_of_crash": 1, "hour_of_crash": 21, "count": 21},
      {"month_of_crash": 1, "hour_of_crash": 22, "count": 16},
      {"month_of_crash": 1, "hour_of_crash": 23, "count": 13},
      {"month_of_crash": 2, "hour_of_crash": 0, "count": 5},
      {"month_of_crash": 2, "hour_of_crash": 1, "count": 7},
      {"month_of_crash": 2, "hour_of_crash": 2, "count": 6},
      {"month_of_crash": 2, "hour_of_crash": 3, "count": 3},
      {"month_of_crash": 2, "hour_of_crash": 4, "count": 4},
      {"month_of_crash": 2, "hour_of_crash": 5, "count": 8},
      {"month_of_crash": 2, "hour_of_crash": 6, "count": 14},
      {"month_of_crash": 2, "hour_of_crash": 7, "count": 9},
      {"month_of_crash": 2, "hour_of_crash": 8, "count": 15},
      {"month_of_crash": 2, "hour_of_crash": 9, "count": 12},
      {"month_of_crash": 2, "hour_of_crash": 10, "count": 9},
      {"month_of_crash": 2, "hour_of_crash": 11, "count": 11},
      {"month_of_crash": 2, "hour_of_crash": 12, "count": 18},
      {"month_of_crash": 2, "hour_of_crash": 13, "count": 6},
      {"month_of_crash": 2, "hour_of_crash": 14, "count": 11},
      {"month_of_crash": 2, "hour_of_crash": 15, "count": 14},
      {"month_of_crash": 2, "hour_of_crash": 16, "count": 12},
      {"month_of_crash": 2, "hour_of_crash": 17, "count": 14},
      {"month_of_crash": 2, "hour_of_crash": 18, "count": 26},
      {"month_of_crash": 2, "hour_of_crash": 19, "count": 19},
      {"month_of_crash": 2, "hour_of_crash": 20, "count": 24},
      {"month_of_crash": 2, "hour_of_crash": 21, "count": 13},
      {"month_of_crash": 2, "hour_of_crash": 22, "count": 10},
      {"month_of_crash": 2, "hour_of_crash": 23, "count": 7},
      {"month_of_crash": 3, "hour_of_crash": 0, "count": 15},
      {"month_of_crash": 3, "hour_of_crash": 1, "count": 11},
      {"month_of_crash": 3, "hour_of_crash": 2, "count": 11},
      {"month_of_crash": 3, "hour_of_crash": 3, "count": 12},
      {"month_of_crash": 3, "hour_of_crash": 4, "count": 8},
      {"month_of_crash": 3, "hour_of_crash": 5, "count": 10},
      {"month_of_crash": 3, "hour_of_crash": 6, "count": 13},
      {"month_of_crash": 3, "hour_of_crash": 7, "count": 14},
      {"month_of_crash": 3, "hour_of_crash": 8, "count": 10},
      {"month_of_crash": 3, "hour_of_crash": 9, "count": 7},
      {"month_of_crash": 3, "hour_of_crash": 10, "count": 11},
      {"month_of_crash": 3, "hour_of_crash": 11, "count": 9},
      {"month_of_crash": 3, "hour_of_crash": 12, "count": 7},
      {"month_of_crash": 3, "hour_of_crash": 13, "count": 11},
      {"month_of_crash": 3, "hour_of_crash": 14, "count": 7},
      {"month_of_crash": 3, "hour_of_crash": 15, "count": 11},
      {"month_of_crash": 3, "hour_of_crash": 16, "count": 9},
      {"month_of_crash": 3, "hour_of_crash": 17, "count": 11},
      {"month_of_crash": 3, "hour_of_crash": 18, "count": 16},
      {"month_of_crash": 3, "hour_of_crash": 19, "count": 24},
      {"month_of_crash": 3, "hour_of_crash": 20, "count": 19},
      {"month_of_crash": 3, "hour_of_crash": 21, "count": 11},
      {"month_of_crash": 3, "hour_of_crash": 22, "count": 16},
      {"month_of_crash": 3, "hour_of_crash": 23, "count": 13},
      {"month_of_crash": 4, "hour_of_crash": 0, "count": 10},
      {"month_of_crash": 4, "hour_of_crash": 1, "count": 11},
      {"month_of_crash": 4, "hour_of_crash": 2, "count": 11},
      {"month_of_crash": 4, "hour_of_crash": 3, "count": 7},
      {"month_of_crash": 4, "hour_of_crash": 4, "count": 7},
      {"month_of_crash": 4, "hour_of_crash": 5, "count": 10},
      {"month_of_crash": 4, "hour_of_crash": 6, "count": 10},
      {"month_of_crash": 4, "hour_of_crash": 7, "count": 13},
      {"month_of_crash": 4, "hour_of_crash": 8, "count": 10},
      {"month_of_crash": 4, "hour_of_crash": 9, "count": 9},
      {"month_of_crash": 4, "hour_of_crash": 10, "count": 9},
      {"month_of_crash": 4, "hour_of_crash": 11, "count": 8},
      {"month_of_crash": 4, "hour_of_crash": 12, "count": 10},
      {"month_of_crash": 4, "hour_of_crash": 13, "count": 5},
      {"month_of_crash": 4, "hour_of_crash": 14, "count": 7},
      {"month_of_crash": 4, "hour_of_crash": 15, "count": 12},
      {"month_of_crash": 4, "hour_of_crash": 16, "count": 12},
      {"month_of_crash": 4, "hour_of_crash": 17, "count": 16},
      {"month_of_crash": 4, "hour_of_crash": 18, "count": 6},
      {"month_of_crash": 4, "hour_of_crash": 19, "count": 6},
      {"month_of_crash": 4, "hour_of_crash": 20, "count": 13},
      {"month_of_crash": 4, "hour_of_crash": 21, "count": 14},
      {"month_of_crash": 4, "hour_of_crash": 22, "count": 14},
      {"month_of_crash": 4, "hour_of_crash": 23, "count": 12},
      {"month_of_crash": 5, "hour_of_crash": 0, "count": 13},
      {"month_of_crash": 5, "hour_of_crash": 1, "count": 14},
      {"month_of_crash": 5, "hour_of_crash": 2, "count": 22},
      {"month_of_crash": 5, "hour_of_crash": 3, "count": 4},
      {"month_of_crash": 5, "hour_of_crash": 4, "count": 7},
      {"month_of_crash": 5, "hour_of_crash": 5, "count": 13},
      {"month_of_crash": 5, "hour_of_crash": 6, "count": 16},
      {"month_of_crash": 5, "hour_of_crash": 7, "count": 2},
      {"month_of_crash": 5, "hour_of_crash": 8, "count": 15},
      {"month_of_crash": 5, "hour_of_crash": 9, "count": 11},
      {"month_of_crash": 5, "hour_of_crash": 10, "count": 4},
      {"month_of_crash": 5, "hour_of_crash": 11, "count": 9},
      {"month_of_crash": 5, "hour_of_crash": 12, "count": 7},
      {"month_of_crash": 5, "hour_of_crash": 13, "count": 14},
      {"month_of_crash": 5, "hour_of_crash": 14, "count": 5},
      {"month_of_crash": 5, "hour_of_crash": 15, "count": 14},
      {"month_of_crash": 5, "hour_of_crash": 16, "count": 8},
      {"month_of_crash": 5, "hour_of_crash": 17, "count": 9},
      {"month_of_crash": 5, "hour_of_crash": 18, "count": 12},
      {"month_of_crash": 5, "hour_of_crash": 19, "count": 5},
      {"month_of_crash": 5, "hour_of_crash": 20, "count": 13},
      {"month_of_crash": 5, "hour_of_crash": 21, "count": 15},
      {"month_of_crash": 5, "hour_of_crash": 22, "count": 11},
      {"month_of_crash": 5, "hour_of_crash": 23, "count": 5},
      {"month_of_crash": 6, "hour_of_crash": 0, "count": 7},
      {"month_of_crash": 6, "hour_of_crash": 1, "count": 1},
      {"month_of_crash": 6, "hour_of_crash": 2, "count": 3},
      {"month_of_crash": 6, "hour_of_crash": 3, "count": 4},
      {"month_of_crash": 6, "hour_of_crash": 4, "count": 6},
      {"month_of_crash": 6, "hour_of_crash": 5, "count": 6},
      {"month_of_crash": 6, "hour_of_crash": 6, "count": 7},
      {"month_of_crash": 6, "hour_of_crash": 7, "count": 1},
      {"month_of_crash": 6, "hour_of_crash": 8, "count": 5},
      {"month_of_crash": 6, "hour_of_crash": 9, "count": 2},
      {"month_of_crash": 6, "hour_of_crash": 10, "count": 2},
      {"month_of_crash": 6, "hour_of_crash": 11, "count": 3},
      {"month_of_crash": 6, "hour_of_crash": 12, "count": 4},
      {"month_of_crash": 6, "hour_of_crash": 13, "count": 8},
      {"month_of_crash": 6, "hour_of_crash": 14, "count": 12},
      {"month_of_crash": 6, "hour_of_crash": 15, "count": 7},
      {"month_of_crash": 6, "hour_of_crash": 16, "count": 14},
      {"month_of_crash": 6, "hour_of_crash": 17, "count": 7},
      {"month_of_crash": 6, "hour_of_crash": 18, "count": 8},
      {"month_of_crash": 6, "hour_of_crash": 19, "count": 3},
      {"month_of_crash": 6, "hour_of_crash": 20, "count": 12},
      {"month_of_crash": 6, "hour_of_crash": 21, "count": 9},
      {"month_of_crash": 6, "hour_of_crash": 22, "count": 3},
      {"month_of_crash": 6, "hour_of_crash": 23, "count": 8},
      {"month_of_crash": 7, "hour_of_crash": 0, "count": 5},
      {"month_of_crash": 7, "hour_of_crash": 1, "count": 7},
      {"month_of_crash": 7, "hour_of_crash": 2, "count": 5},
      {"month_of_crash": 7, "hour_of_crash": 3, "count": 4},
      {"month_of_crash": 7, "hour_of_crash": 4, "count": 6},
      {"month_of_crash": 7, "hour_of_crash": 5, "count": 6},
      {"month_of_crash": 7, "hour_of_crash": 6, "count": 4},
      {"month_of_crash": 7, "hour_of_crash": 7, "count": 3},
      {"month_of_crash": 7, "hour_of_crash": 8, "count": 6},
      {"month_of_crash": 7, "hour_of_crash": 9, "count": 3},
      {"month_of_crash": 7, "hour_of_crash": 10, "count": 3},
      {"month_of_crash": 7, "hour_of_crash": 11, "count": 4},
      {"month_of_crash": 7, "hour_of_crash": 12, "count": 5},
      {"month_of_crash": 7, "hour_of_crash": 13, "count": 5},
      {"month_of_crash": 7, "hour_of_crash": 14, "count": 5},
      {"month_of_crash": 7, "hour_of_crash": 15, "count": 8},
      {"month_of_crash": 7, "hour_of_crash": 16, "count": 7},
      {"month_of_crash": 7, "hour_of_crash": 17, "count": 4},
      {"month_of_crash": 7, "hour_of_crash": 18, "count": 7},
      {"month_of_crash": 7, "hour_of_crash": 19, "count": 2},
      {"month_of_crash": 7, "hour_of_crash": 20, "count": 5},
      {"month_of_crash": 7, "hour_of_crash": 21, "count": 5},
      {"month_of_crash": 7, "hour_of_crash": 22, "count": 9},
      {"month_of_crash": 7, "hour_of_crash": 23, "count": 6},
      {"month_of_crash": 8, "hour_of_crash": 0, "count": 5},
      {"month_of_crash": 8, "hour_of_crash": 1, "count": 1},
      {"month_of_crash": 8, "hour_of_crash": 2, "count": 7},
      {"month_of_crash": 8, "hour_of_crash": 3, "count": 7},
      {"month_of_crash": 8, "hour_of_crash": 4, "count": 7},
      {"month_of_crash": 8, "hour_of_crash": 5, "count": 6},
      {"month_of_crash": 8, "hour_of_crash": 6, "count": 7},
      {"month_of_crash": 8, "hour_of_crash": 7, "count": 3},
      {"month_of_crash": 8, "hour_of_crash": 8, "count": 5},
      {"month_of_crash": 8, "hour_of_crash": 9, "count": 3},
      {"month_of_crash": 8, "hour_of_crash": 10, "count": 4},
      {"month_of_crash": 8, "hour_of_crash": 11, "count": 4},
      {"month_of_crash": 8, "hour_of_crash": 12, "count": 7},
      {"month_of_crash": 8, "hour_of_crash": 13, "count": 12},
      {"month_of_crash": 8, "hour_of_crash": 14, "count": 10},
      {"month_of_crash": 8, "hour_of_crash": 15, "count": 16},
      {"month_of_crash": 8, "hour_of_crash": 16, "count": 8},
      {"month_of_crash": 8, "hour_of_crash": 17, "count": 11},
      {"month_of_crash": 8, "hour_of_crash": 18, "count": 14},
      {"month_of_crash": 8, "hour_of_crash": 19, "count": 12},
      {"month_of_crash": 8, "hour_of_crash": 20, "count": 12},
      {"month_of_crash": 8, "hour_of_crash": 21, "count": 13},
      {"month_of_crash": 8, "hour_of_crash": 22, "count": 11},
      {"month_of_crash": 8, "hour_of_crash": 23, "count": 8},
      {"month_of_crash": 9, "hour_of_crash": 0, "count": 5},
      {"month_of_crash": 9, "hour_of_crash": 1, "count": 7},
      {"month_of_crash": 9, "hour_of_crash": 2, "count": 6},
      {"month_of_crash": 9, "hour_of_crash": 3, "count": 4},
      {"month_of_crash": 9, "hour_of_crash": 4, "count": 5},
      {"month_of_crash": 9, "hour_of_crash": 5, "count": 8},
      {"month_of_crash": 9, "hour_of_crash": 6, "count": 19},
      {"month_of_crash": 9, "hour_of_crash": 7, "count": 8},
      {"month_of_crash": 9, "hour_of_crash": 8, "count": 8},
      {"month_of_crash": 9, "hour_of_crash": 9, "count": 7},
      {"month_of_crash": 9, "hour_of_crash": 10, "count": 2},
      {"month_of_crash": 9, "hour_of_crash": 11, "count": 4},
      {"month_of_crash": 9, "hour_of_crash": 12, "count": 12},
      {"month_of_crash": 9, "hour_of_crash": 13, "count": 5},
      {"month_of_crash": 9, "hour_of_crash": 14, "count": 9},
      {"month_of_crash": 9, "hour_of_crash": 15, "count": 13},
      {"month_of_crash": 9, "hour_of_crash": 16, "count": 12},
      {"month_of_crash": 9, "hour_of_crash": 17, "count": 9},
      {"month_of_crash": 9, "hour_of_crash": 18, "count": 8},
      {"month_of_crash": 9, "hour_of_crash": 19, "count": 11},
      {"month_of_crash": 9, "hour_of_crash": 20, "count": 13},
      {"month_of_crash": 9, "hour_of_crash": 21, "count": 9},
      {"month_of_crash": 9, "hour_of_crash": 22, "count": 9},
      {"month_of_crash": 9, "hour_of_crash": 23, "count": 8},
      {"month_of_crash": 10, "hour_of_crash": 0, "count": 12},
      {"month_of_crash": 10, "hour_of_crash": 1, "count": 7},
      {"month_of_crash": 10, "hour_of_crash": 2, "count": 9},
      {"month_of_crash": 10, "hour_of_crash": 3, "count": 8},
      {"month_of_crash": 10, "hour_of_crash": 4, "count": 7},
      {"month_of_crash": 10, "hour_of_crash": 5, "count": 15},
      {"month_of_crash": 10, "hour_of_crash": 6, "count": 14},
      {"month_of_crash": 10, "hour_of_crash": 7, "count": 7},
      {"month_of_crash": 10, "hour_of_crash": 8, "count": 9},
      {"month_of_crash": 10, "hour_of_crash": 9, "count": 9},
      {"month_of_crash": 10, "hour_of_crash": 10, "count": 6},
      {"month_of_crash": 10, "hour_of_crash": 11, "count": 5},
      {"month_of_crash": 10, "hour_of_crash": 12, "count": 5},
      {"month_of_crash": 10, "hour_of_crash": 13, "count": 3},
      {"month_of_crash": 10, "hour_of_crash": 14, "count": 8},
      {"month_of_crash": 10, "hour_of_crash": 15, "count": 8},
      {"month_of_crash": 10, "hour_of_crash": 16, "count": 7},
      {"month_of_crash": 10, "hour_of_crash": 17, "count": 5},
      {"month_of_crash": 10, "hour_of_crash": 18, "count": 8},
      {"month_of_crash": 10, "hour_of_crash": 19, "count": 14},
      {"month_of_crash": 10, "hour_of_crash": 20, "count": 6},
      {"month_of_crash": 10, "hour_of_crash": 21, "count": 11},
      {"month_of_crash": 10, "hour_of_crash": 22, "count": 17},
      {"month_of_crash": 10, "hour_of_crash": 23, "count": 3},
      {"month_of_crash": 11, "hour_of_crash": 0, "count": 9},
      {"month_of_crash": 11, "hour_of_crash": 1, "count": 4},
      {"month_of_crash": 11, "hour_of_crash": 2, "count": 9},
      {"month_of_crash": 11, "hour_of_crash": 3, "count": 9},
      {"month_of_crash": 11, "hour_of_crash": 4, "count": 3},
      {"month_of_crash": 11, "hour_of_crash": 5, "count": 15},
      {"month_of_crash": 11, "hour_of_crash": 6, "count": 18},
      {"month_of_crash": 11, "hour_of_crash": 7, "count": 16},
      {"month_of_crash": 11, "hour_of_crash": 8, "count": 10},
      {"month_of_crash": 11, "hour_of_crash": 9, "count": 6},
      {"month_of_crash": 11, "hour_of_crash": 10, "count": 8},
      {"month_of_crash": 11, "hour_of_crash": 11, "count": 7},
      {"month_of_crash": 11, "hour_of_crash": 12, "count": 8},
      {"month_of_crash": 11, "hour_of_crash": 13, "count": 8},
      {"month_of_crash": 11, "hour_of_crash": 14, "count": 7},
      {"month_of_crash": 11, "hour_of_crash": 15, "count": 8},
      {"month_of_crash": 11, "hour_of_crash": 16, "count": 10},
      {"month_of_crash": 11, "hour_of_crash": 17, "count": 26},
      {"month_of_crash": 11, "hour_of_crash": 18, "count": 23},
      {"month_of_crash": 11, "hour_of_crash": 19, "count": 15},
      {"month_of_crash": 11, "hour_of_crash": 20, "count": 10},
      {"month_of_crash": 11, "hour_of_crash": 21, "count": 9},
      {"month_of_crash": 11, "hour_of_crash": 22, "count": 9},
      {"month_of_crash": 11, "hour_of_crash": 23, "count": 11},
      {"month_of_crash": 12, "hour_of_crash": 0, "count": 17},
      {"month_of_crash": 12, "hour_of_crash": 1, "count": 28},
      {"month_of_crash": 12, "hour_of_crash": 2, "count": 14},
      {"month_of_crash": 12, "hour_of_crash": 3, "count": 12},
      {"month_of_crash": 12, "hour_of_crash": 4, "count": 13},
      {"month_of_crash": 12, "hour_of_crash": 5, "count": 29},
      {"month_of_crash": 12, "hour_of_crash": 6, "count": 27},
      {"month_of_crash": 12, "hour_of_crash": 7, "count": 27},
      {"month_of_crash": 12, "hour_of_crash": 8, "count": 17},
      {"month_of_crash": 12, "hour_of_crash": 9, "count": 18},
      {"month_of_crash": 12, "hour_of_crash": 10, "count": 14},
      {"month_of_crash": 12, "hour_of_crash": 11, "count": 17},
      {"month_of_crash": 12, "hour_of_crash": 12, "count": 23},
      {"month_of_crash": 12, "hour_of_crash": 13, "count": 12},
      {"month_of_crash": 12, "hour_of_crash": 14, "count": 18},
      {"month_of_crash": 12, "hour_of_crash": 15, "count": 13},
      {"month_of_crash": 12, "hour_of_crash": 16, "count": 20},
      {"month_of_crash": 12, "hour_of_crash": 17, "count": 42},
      {"month_of_crash": 12, "hour_of_crash": 18, "count": 32},
      {"month_of_crash": 12, "hour_of_crash": 19, "count": 28},
      {"month_of_crash": 12, "hour_of_crash": 20, "count": 23},
      {"month_of_crash": 12, "hour_of_crash": 21, "count": 16},
      {"month_of_crash": 12, "hour_of_crash": 22, "count": 26},
      {"month_of_crash": 12, "hour_of_crash": 23, "count": 25}
    ]
  }
};
const commonCausesWithPedestrainsHighlighted = {
  "config": {"view": {"width": 400, "height": 300}},
  "data": {"name": "data-c2d091d6bc118aa15de38c3fadc223c8"},
  "title": "Top 10 most-common critical pre-crash events in fatal crashes",
  "mark": "bar",
  "encoding": {
    "color": {
      "condition": {"value": "orange", "test": "(datum.cnt === 5408)"},
      "value": "steelblue"
    },
    "tooltip": [
      {"type": "nominal", "field": "critical_event_precrash_name"},
      {"type": "quantitative", "field": "cnt"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"title": "Crash Count"},
      "field": "cnt"
    },
    "y": {

      "type": "nominal",
      "axis": {"title": ""},
      "field": "critical_event_precrash_name",
      "sort": {"op": "sum", "field": "cnt", "order": "descending"}
    }
  },
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
  "datasets": {
    "data-c2d091d6bc118aa15de38c3fadc223c8": [
      {
        "critical_event_precrash_name": "From Opposite Direction Over Left Lane Line",
        "cnt": 6215
      },
      {
        "critical_event_precrash_name": "Off the Edge of the Road on the Right Side",
        "cnt": 5415
      },
      {"critical_event_precrash_name": "Pedestrian in Road", "cnt": 5408},
      {
        "critical_event_precrash_name": "Over the Lane Line on Left Side of Travel Lane",
        "cnt": 3695
      },
      {
        "critical_event_precrash_name": "Off the Edge of the Road on the Left Side",
        "cnt": 3617
      },
      {
        "critical_event_precrash_name": "Traveling In Same Direction with Higher Speed",
        "cnt": 3132
      },
      {
        "critical_event_precrash_name": "Crossing Over (Passing Through) Intersection",
        "cnt": 2798
      },
      {
        "critical_event_precrash_name": "Traveling Too Fast For Conditions",
        "cnt": 2679
      },
      {"critical_event_precrash_name": "Turning Left at Junction", "cnt": 2585},
      {
        "critical_event_precrash_name": "From Crossing Street, Across Path",
        "cnt": 2329
      }
    ]
  }
};
vegaEmbed("#passengerRestraintUse", passengerRestraintUse);
vegaEmbed("#alcohol", alcohol);
vegaEmbed("#drug", drug);
vegaEmbed("#ejection", ejection);
vegaEmbed("#fatalityRateByCounty", fatalityRateByCounty);
vegaEmbed("#vehicleModelYear", vehicleModelYear);
vegaEmbed("#vehicleAge", vehicleAge);
vegaEmbed("#airbagDeployment", airbagDeployment);
vegaEmbed("#speeding", speeding);
vegaEmbed("#dangerousTime", dangerousTime);
vegaEmbed("#controlRural", controlRural);
vegaEmbed("#controlLocal", controlLocal);
vegaEmbed("#rescueUrban", rescueUrban);
vegaEmbed("#rescueRural", rescueRural);
vegaEmbed("#rescueEMS", rescueEMS);
vegaEmbed("#weather", weather);
vegaEmbed("#ped", ped);
vegaEmbed("#pedestrain", pedestrain);
vegaEmbed("#overspeed", overspeed);
vegaEmbed("#seatingposition", seatingposition);
vegaEmbed("#driverCircumstance", driverCircumstance);
vegaEmbed("#light", light);
vegaEmbed("#weatherTime", weatherTime);
vegaEmbed("#vehicleBodyType", vehicleBodyType);
vegaEmbed("#commonCausesWithSpeedingHighlighted", commonCausesWithSpeedingHighlighted);
vegaEmbed("#commonCausesWithPedestrainsHighlighted", commonCausesWithPedestrainsHighlighted);
