import math
import numpy as np
import matplotlib.pyplot as plt
from collections import Counter
import csv
import os
import urllib.request
import json
import re

# This script scrapes U.S. county population data
# from a Wiki page in HTML format, and combines the
# big query result of fatality data by county. Then
# it writes the data into a CSV file for visualization.

INPUT_POP = './data/county/county_pop.html'
INPUT_COUNTY_CODE = './data/county/US_county_codes.csv'
INPUT_FATALITIES = './data/county/fatality_lat_lon_result.csv'
OUTPUT = './data/county/county_fatality_data.csv'
OUTPUT_viz = './data/county/county_fatality_data_viz.csv'
OUTPUT_latlon_county = './data/county/latlon_county.csv'
data = []
latlon_county_map = {}
county_code_map = {}

def parse_county_code(x):
    marker = '<td style="text-align:center;">'
    if x.startswith(marker):
        return x[len(marker):]
    else:
        return None

def parse_hyperlink_line(x):
    # input e.g.
    # <td><a href="/en/Alabama" title="Alabama" class="int-link">Alabama</a>
    return x.split('>')[-2].split('</a')[0].upper()

def parse_county_name_and_state(x):
    marker = '<td><a href="'
    if x.startswith(marker):
        return parse_hyperlink_line(x)
    else:
        return None

def parse_county_population(x):
    marker = '<td style="text-align:right;">'
    if x.startswith(marker):
        return x[len(marker):]
    else:
        return None

def format_population(str):
    # convert comma separated string to a number
    splits = str.split(",")
    rtn = ''
    for s in splits:
        rtn += s
    return rtn


def process_county_data():
    # 1. save the county codes used by FARS into a map
    with open(INPUT_COUNTY_CODE) as csvfile:
        reader = csv.DictReader(csvfile, skipinitialspace=True)
        for row in reader:
            county_code = row["County Code"]
            county_name = row["County Name"]
            county_code_map[county_name] = int(county_code)
    #print(county_code_map)

    # 2. scrape county population data
    with open(INPUT_POP) as f:
        content = f.readlines()
        content = [x.strip() for x in content]

        # save to population data map
        data_index = 0
        for x in content:
            if x.endswith('</sup>'):
                continue
            county_code = parse_county_code(x)
            if county_code:
                data.append({'code': county_code, 'code_fars': '', 'name': '', 'state': '', 'population': -1, 'data': -1})
                continue
            county_name_or_state = parse_county_name_and_state(x)
            if county_name_or_state:
                # check if this is county name or State
                if data[-1]['name']:
                    data[-1]['state'] = county_name_or_state
                else:
                    county_name = county_name_or_state.split(' COUNTY')[0]
                    data[-1]['name'] = county_name
                    try:
                        data[-1]['code_fars'] = county_code_map[county_name]
                    except:
                        pass
                continue
            county_population = parse_county_population(x)
            if county_population:
                data[-1]['population'] = int(format_population(county_population))
                data_index += 1

    #print(data)
    # 3. combine with fatality big query results
    with open(INPUT_FATALITIES) as csvfile:
        reader = csv.DictReader(csvfile, skipinitialspace=True)
        row_count = 0
        for row in reader:
            row_count += 1
            if row_count > 0:
                lat = row["latitude"]
                lon = row['longitude']
                count = row["count"]
                try:
                    if int(count) > 0:
                        # Get county code based on input geo coordinates
                        # API ref: https://geo.fcc.gov/api/census/#!/area/get_area
                        url = "https://geo.fcc.gov/api/census/area?lat={}%09%20&lon={}%09&format=json".format(lat, lon)
                        contents = urllib.request.urlopen(url).read()
                        contents = str(contents)
                        index = contents.index('county_fips') + len('county_fips')
                        county_code = contents[index+3:index+8]

                        latlon_county_map_key = (lat, lon)
                        if latlon_county_map_key not in latlon_county_map:
                            latlon_county_map[latlon_county_map_key] = county_code

                        print("county: {}, count: {}".format(county_code, count))

                        # find this county in data map and save its data
                        for x in data:
                            if int(x['code']) == int(county_code):
                                x['data'] = int(count) if x['data'] < 0 else x['data'] + int(count)
                                print("x['data'] = {}".format(x['data']))
                                print("")
                except:
                    continue

        # 4. write to csv file
        has_data_county_count = 0
        with open(OUTPUT, 'w') as outfile:
                out_header = ['county_code', 'county_code_fars', 'county_name', 'state', 'county_population', 'fatality', 'fatality_rate_percent']
                writer = csv.DictWriter(outfile, fieldnames=out_header)
                writer.writeheader()
                for x in data:
                    if x['population'] > 0:
                        has_data_county_count += 1
                        data_to_write = {
                            'county_code': int(x['code']),
                            'county_code_fars': x['code_fars'],
                            'county_name': x['name'].lower().capitalize(),
                            'state': x['state'].lower().capitalize(),
                            'county_population': x['population'],
                            'fatality': x['data'],
                            'fatality_rate_percent': round(100 * (x['data'] / x['population']), 3)
                        }
                        writer.writerow(data_to_write)

        print('There are {} counties (out of {}) that have fatality data'.format(has_data_county_count, len(data)))

        # 5. write latlon_county_map to csv file
        with open(OUTPUT_latlon_county, 'w') as outfile:
                out_header = ['lat', 'lon', 'county_code']
                writer = csv.DictWriter(outfile, fieldnames=out_header)
                writer.writeheader()
                for x in latlon_county_map:
                    data_to_write = {
                        'lat': x[0],
                        'lon': x[1],
                        'county_code': latlon_county_map[x]
                    }
                    writer.writerow(data_to_write)

def process_county_viz_data():
    data_map = []
    with open(OUTPUT) as csvfile:
        reader = csv.DictReader(csvfile, skipinitialspace=True)
        for row in reader:
            county_code = row["county_code"]
            county_name = row['county_name']
            state = row["state"]
            county_population = int(row['county_population'])
            fatality = int(row['fatality'])
            if fatality < 0:
                fatality = 0
            if county_population <= 0:
                continue
            percent = round(fatality / county_population * 100, 3) # raw percentage
            rate = round(fatality / county_population * 100000, 1) # Calculate number of Deaths per 100000 Population
            data_map.append({
                'County code': county_code,
                'County': county_name,
                'Census area': state.upper(),
                'County population': county_population,
                'Fatalities': fatality,
                'Fatality rate (%)': percent,
                'Fatalities per 100,000 Population': rate
            })

    with open(OUTPUT_viz, 'w') as outfile:
            out_header = ['County code',
            'County',
            'Census area',
            'County population',
            'Fatalities',
            'Fatality rate (%)',
            'Fatalities per 100,000 Population']
            writer = csv.DictWriter(outfile, fieldnames=out_header)
            writer.writeheader()
            for x in data_map:
                writer.writerow(x)

def main():
#    process_county_data()
    process_county_viz_data()


if __name__ == "__main__":
    main()
