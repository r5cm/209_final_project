from urllib.request import urlopen
import csv
import re
from datetime import datetime
from bs4 import BeautifulSoup


import googlemaps
from datetime import datetime

file = open("keyfile", "r") 
key = file.read()
print(key)

gmaps = googlemaps.Client(key=key)

def getaddress(raw):
    """
    Look up an address in Berkeley. 
    """
    return gmaps.geocode(str(raw) + ", Berkeley, CA")

def latlng_from_gm_address(gm):
    if(not gm):
        return None
    
    return "(" + \
    str(gm[0]["geometry"]["location"]["lat"]) + ", " + \
    str(gm[0]["geometry"]["location"]["lng"]) + ")"

def formatted_from_gm_address(gm):
    if(not gm):
        return None
    
    return str(gm[0]["formatted_address"])



# specify the url
NIXLE_URL = 'https://local.nixle.com/university-of-california-police-department-berkeley/?page=3'
#?page=2
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
title = [None] * count
address = [None] * count
case = [None] * count
date = [None] * count
clean_address = [None] * count
latlng = [None] * count

for i in range(count):
  list_priority_text[i] = list_priority[i].find(text=True)
  list_time_text[i] = list_time[i].find(text=True)
  list_headline_text[i] = list_headline[i].find(text=True)
  list_headline_link[i] = list_headline[i].find('a').get('href')
  
  page2 = urlopen('https://local.nixle.com' + list_headline_link[i])
  soup2 = BeautifulSoup(page2, 'html.parser')

  date_content = soup2.select("dl.clearfix")
  date_raw = date_content[0].find_all(text=True)[1]

  date_raw = re.sub(":: ", "", date_raw)
  date_raw = re.sub("th", "", date_raw)
  date_raw = re.sub("nd", "", date_raw)
  date_raw = re.sub("st", "", date_raw)
  date_raw = re.sub("rd", "", date_raw)
  date_raw = re.sub("\.", "", date_raw)
  date_raw = re.sub("^[A-Z][a-z]+\s", "", date_raw)
  date_raw = re.sub("\s[A-Z]{3}$", "", date_raw)
  date_raw = date_raw.upper()

  date_obj = datetime.strptime(date_raw, '%B %d, %Y %H:%M %p')

  date[i] = str(date_obj)

  content = soup2.select('#alert-body')
  content_text_raw = content[0].find_all(text=True)

  content_text[i] = []

  title[i] = False
  address[i] = False
  case[i] = False
  case_no = False


  k = 0
  for j, line in enumerate(content_text_raw):
    if(re.search("^[\\n\\r\\xa0]+$", line) 
        or re.search("Please note this message may", line) 
        or re.search("WHAT IS THIS NOTICE", line)):

        continue

    line = re.sub("\n", "", line)
    line = re.sub("\r", "", line)


    dept_line = (not re.search("Police Department", line, re.IGNORECASE) and line != "Criminal Investigation Bureau" and not re.search("24 Hours", line) and not re.search("\(510\)", line) and not re.search("510\-",line))

    if(not case[i] and len(line) < 30 and k < 10 and dept_line and re.search("#", line) and re.search("case", line, re.IGNORECASE)):
        case[i] = line    
    elif(not title[i] and len(line) < 50 and k < 6 and dept_line and not re.search("department", line, re.IGNORECASE)):
        title[i] = line
    elif(title[i] and not address[i] and len(line) < 50 and k < 7 and dept_line):
        address[i] = line
    elif(case[i] and not case_no and re.search("^[0-9\-\s]+$", line) and dept_line and len(line) < 20):
        case[i] = case[i] + line
        case_no = True
    else:
        content_text[i].append(line)
    
    k = k + 1   


  gm_address = getaddress(address[i])
  clean_address[i] = formatted_from_gm_address(gm_address)
  latlng[i] = latlng_from_gm_address(gm_address)


  #print(content_text[i])


# print(list_priority)
# print(list_time)
# print(list_headline)
print(list_priority_text)
print(list_time_text)
print(list_headline_text)

with open('latest.csv', 'a') as csv_file:
  writer = csv.writer(csv_file)
#  writer.writerow(['date' 'priority', 'headline', 'time_ago', 'link', 'title', 'address', 'clean_address', 'latlng', 'case', 'content' ])
  for i in range(count):
    writer.writerow([ date[i], list_priority_text[i], list_headline_text[i], list_time_text[i], list_headline_link[i], title[i], address[i], clean_address[i], latlng[i], case[i], content_text[i] ])
