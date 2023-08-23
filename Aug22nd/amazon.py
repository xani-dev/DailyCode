# Your mission, should you choose to accept it, is to create a web crawler to steal data
# from our largest competitor, Amazon.com. Our global keyboard monopoly is at risk.
# We need you, our brightest programmer, to achieve the following:

# Objectives:
# 1. Obtain the average price (in USD) for "cute keyboards" on Amazon.com - https://www.amazon.com/keyboard-cute/s?k=keyboard+cute
# 2. Filter these results so that only actual keyboards (or keyboard-mouse combos)
#  are included in the pricing.
# 3. Find out how many of these (filtered results) have FREE delivery within 5 days.
# 4. Create a list of these filtered results, including their name, price and star.
#  - Save this list as a CSV file and send it to me, your CTO, Dhruv on Teams.

# https://www.datacamp.com/tutorial/amazon-web-scraping-using-beautifulsoup

from bs4 import BeautifulSoup
import requests

HEADERS = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0", "Accept-Encoding":"gzip, deflate", "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "DNT":"1","Connection":"close", "Upgrade-Insecure-Requests":"1"}



request = requests.get('https://www.amazon.com/keyboard-cute/s?k=keyboard+cute', headers=HEADERS)
content = request.content
soup = BeautifulSoup(content, features='html.parser')
# print(soup)


prices = soup.find_all('span', attrs={'class':'a-price'})
# prices = soup.find_all('span', attrs={'class':'a-offscreen'})

for price in prices:
    print(price.text)

# def scrape_amzn():
    
#     pass

# print(scrape_amzn())