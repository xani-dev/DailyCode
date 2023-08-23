from bs4 import BeautifulSoup
import requests

# set up the html parser
page_to_scrape = requests.get('https://quotes.toscrape.com/')
soup = BeautifulSoup(page_to_scrape.text, 'html.parser')

#  scrape for quotes, include the author 
quotes = soup.find_all('span', attrs={ 'class': 'text'})
authors = soup.find_all('small', attrs={'class':'author'})

# print quotes and authors
for quote in quotes:
    print(quote.text)

for author in authors:
    print(author.text)
