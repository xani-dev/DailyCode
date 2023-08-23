#Objective 2. find all Young Adult books under 20 (GBP): http://books.toscrape.com/catalogue/category/books/young-adult_21/index.html
from bs4 import BeautifulSoup
import requests

from urllib.parse import urljoin

# url definition
url = 'http://books.toscrape.com/catalogue/category/books/young-adult_21/index.html'

while True:
    # set up the html parser
    page_to_scrape = requests.get(url)
    soup = BeautifulSoup(page_to_scrape.text, 'html.parser')    
    next_button = soup.select_one('li.next')
     
     # scrape for books under 20 in this category 
    book_prices = soup.find_all('p', attrs={'class':'price_color'})
    for price in book_prices: 
        cost = float(price.text[2:])
        if cost <= 20:
            title = soup.find_all('h3>a')
            print(title, cost)

    # Find the next page to scrape in the pagination.
    next_page_element = soup.select_one('li.next > a')
    if next_page_element:
        next_page_url = next_page_element.get('href')
        url = urljoin(url, next_page_url)
        print(url)
    else:
        break
    
    

