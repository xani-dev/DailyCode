import csv

from pprint import pprint

def read_csv(input_file, row_list):
    with open(color_srgb) as csv_file:
        rows = csv.reader(csv_file, delimiter=',')
        for rows in rows:
            row_list.append(row)