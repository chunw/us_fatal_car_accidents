import math
import numpy as np
import matplotlib.pyplot as plt
from collections import Counter
import csv
import os

# File paths
YEAR = 2016
ROOT = '../data/nhtsa_traffic_fatalities'
OUTPUT_FILE_ALL = '../data/all-{}.csv'.format(YEAR)
OUTPUT_FILE_TILESET = '../data/all-{}-tileset.csv'.format(YEAR)
OUTPUT_FILE_CASE_NUMBERS = '../data/all-CASENUMBERS-{}.txt'.format(YEAR)
OUTPUT_FILE_ATTRS = '../data/all-ATTRIBUTES-{}.txt'.format(YEAR)

# tried to use OUTPUT_FILE_ATTRS for plotting all attributes,
# but this was not accepted by Mapbox (invalid CSV error)
# so had to handpick a few features to plot
OUTPUT_FILE_ATTRS_TILESET = '../data/tileset-ATTRIBUTES-{}.txt'.format(YEAR)

# Data processing results
data_map = {}
attribute_set = set()
out_header = [] # header for the merged CSV file, built from attribute_set
all_consecutive_numbers = []

def walk_dir():
    dir = '{}/{}'.format(ROOT, YEAR)
    print("Walking through files in {}".format(dir))
    for dirpath, dnames, fnames in os.walk(dir):
        for f in fnames:
            handle_file(f, os.path.join(dirpath, f))

def handle_file(fname, fpath, verbose = False):
    print("")
    print('parsing {}'.format(fpath))
    row_count = 0
    csv_headers = None
    with open(fpath) as csvfile:
        reader = csv.DictReader(csvfile, skipinitialspace=True)
        try:
            for row in reader:
                row_count += 1
                # get headers in this CSV file
                if row_count == 1:
                    csv_headers = list(row.keys())
                    if verbose:
                        print(csv_headers)
                # store data in data map, indexed by consecutive_number
                consecutive_number = row["consecutive_number"]
                if consecutive_number not in data_map:
                    data_map[consecutive_number] = {}
                for col in csv_headers:
                    attribute_set.add(col)
                    data_map[consecutive_number][col] = row[col]
        except:
            print('cannot handle file {}'.format(fpath))


def filter_data_map():
    return {k: v for k, v in data_map.items() if float(v['longitude']) > -360 and float(v['longitude']) < 360}

def write_output_all_data(verbose = False):
    with open(OUTPUT_FILE_ALL, 'w') as outfile:
        if verbose:
            print(out_header)
        writer = csv.DictWriter(outfile, fieldnames=out_header)
        writer.writeheader()
        for consecutive_number in data_map:
            data = data_map[consecutive_number]
            writer.writerow(data) #format: writer.writerow({'first_name': 'Lovely', 'last_name': 'Spam'})

def write_output_tileset_data(verbose = False):
    with open(OUTPUT_FILE_TILESET, 'w') as outfile:
        out_header = read_tileset_header() #For tileset data we only need a subset of all available attributes of the accidents
        writer = csv.DictWriter(outfile, fieldnames=out_header)
        writer.writeheader()
        for consecutive_number in data_map:
            data = data_map[consecutive_number]
            data_to_write = {}
            for col in out_header:
                if col in data:
                    data_to_write[col] = data[col]
            writer.writerow(data_to_write)

def write_case_numbers(verbose = False):
    with open(OUTPUT_FILE_CASE_NUMBERS, 'w') as outfile:
        print(all_consecutive_numbers)
        for c in all_consecutive_numbers:
            print(c)
            outfile.write(c+'\n')

def write_attributes():
    with open(OUTPUT_FILE_ATTRS, 'w') as outfile:
        for a in list(attribute_set):
            outfile.write(a+'\n')

def test(test_case_number = "450651"):
    print(data_map[test_case_number]) # print out an example accident record from data map

def read_tileset_header():
    with open(OUTPUT_FILE_ATTRS_TILESET) as f:
        content = f.readlines()
        content = [x.strip() for x in content]
    return content

if __name__ == "__main__":
    walk_dir()
    data_map = filter_data_map() # NOTE: some data points have illegal geo coordinates, filter these out.
    all_consecutive_numbers = list(data_map.keys())
    out_header = list(attribute_set)
    print("Found a total of {} cases, with {} attributes for each case".format(len(all_consecutive_numbers), len(list(attribute_set))))
    #test()
    #write_attributes()
    #write_case_numbers()
    #write_output_all_data()
    write_output_tileset_data()
