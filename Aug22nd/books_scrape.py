# Objective: scrape this URL: http://books.toscrape.com/ and find the average price of a Horror genre book.
from bs4 import BeautifulSoup
import requests

# set up the html parser
page_to_scrape = requests.get('https://books.toscrape.com/catalogue/category/books/horror_31/index.html')
soup = BeautifulSoup(page_to_scrape.text, 'html.parser')

# scrape for horror books
hb_prices = soup.find_all('p', attrs={'class':'price_color'})

prices = []

for price in hb_prices: 
    cost = float(price.text[2:])
    prices.append(cost)

# print(prices)

def average_price(list):
    return sum(list)/len(list)

print('Average price is = ', round(average_price(prices), 2))     