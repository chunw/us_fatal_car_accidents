import math
import numpy as np
import matplotlib.pyplot as plt
from collections import Counter
import csv
import os
import urllib.request
import json
import re

# Example API call to get county code based on input geo coordinates
# https://geo.fcc.gov/api/census/#!/area/get_area
lon = -122.17558889
lat = 37.71816111
url = "https://geo.fcc.gov/api/census/area?lat={}%09%20&lon={}%09&format=json".format(lat, lon)
contents = urllib.request.urlopen(url).read()
contents = str(contents)
index = contents.index('county_fips') + len('county_fips')
county_code = contents[index+3:index+8]
print(county_code)
