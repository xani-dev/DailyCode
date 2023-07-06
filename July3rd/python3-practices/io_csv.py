import csv

from pprint import pprint


with open('color_srgb.csv') as csv_file:
    rows = csv.reader(csv_file)
    for row in rows:
        if row[1].__contains__('#FF'):
            print(row)


# def write_csv(output_file, row_list):
#     with open(output_file, mode='w', newline='') as colors_file:
#         color_writer = csv.writer(colors_file, delimiter=',', quotechar='"')
#         for row in row_list:
#             color_writer.writerow(row)


# def main():
#     rows = []
#     read_csv(color_srgb='color_srgb.csv', row_list=rows)
#     # write_csv(output_file='colors_output.csv', row_list=rows)
#     pprint(row)


# main()
