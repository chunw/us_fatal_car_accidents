import math
import numpy as np
import matplotlib.pyplot as plt
from collections import Counter
import csv
import os

# File paths
YEAR = 2016
OUTPUT_FILE_ATTRS_TILESET = '../data/tileset-ATTRIBUTES-{}.txt'.format(YEAR)

if __name__ == "__main__":
    with open(OUTPUT_FILE_ATTRS_TILESET) as f:
        content = f.readlines()
        content = [x.strip() for x in content]
    print(content)
