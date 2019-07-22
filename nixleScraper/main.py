from urllib.request import urlopen
import csv
from bs4 import BeautifulSoup
# specify the url
NIXLE_URL = 'https://local.nixle.com/university-of-california-police-department-berkeley/'
page = urlopen(NIXLE_URL)
soup = BeautifulSoup(page, 'html.parser')

# scrape priority, time, headline
# TODO scrape 'More...' url
# TODO open the More url and scrape info within
list_priority = soup.select('.priority')
list_time = soup.select('.time')
list_headline = soup.select('.headline_agency')

count = len(list_headline)

list_priority_text = [None] * count
list_time_text = [None] * count
list_headline_text = [None] * count
list_headline_link = [None] * count
content_text = [None] * count

for i in range(count):
  list_priority_text[i] = list_priority[i].find(text=True)
  list_time_text[i] = list_time[i].find(text=True)
  list_headline_text[i] = list_headline[i].find(text=True)
  list_headline_link[i] = list_headline[i].find('a').get('href')
  
  page2 = urlopen('https://local.nixle.com' + list_headline_link[i])
  soup2 = BeautifulSoup(page2, 'html.parser')

  content = soup2.select('#alert-body')
  content_text[i] = content[0].find_all(text=True)

  #print(content_text[i])


# print(list_priority)
# print(list_time)
# print(list_headline)
print(list_priority_text)
print(list_time_text)
print(list_headline_text)

with open('latest.csv', 'w') as csv_file:
  writer = csv.writer(csv_file)
  writer.writerow([ 'priority', 'headline', 'time_ago', 'link', 'content' ])
  for i in range(count):
    writer.writerow([ list_priority_text[i], list_headline_text[i], list_time_text[i], list_headline_link[i], content_text[i] ])
