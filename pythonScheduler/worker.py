import sqlite3
import pandas as pd
import pandas.io.sql as psql
import arrow
import schedule
import time
import os
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from psycopg2 import connect
from datetime import datetime, timedelta
import urllib.parse as urlparse

#DB connection - put in both files after one help post said it needed to be in the worker file 
url = urlparse.urlparse(os.environ['DATABASE_URL'])
dbname = url.path[1:]
user = url.username
password = url.password
host = url.hostname
port = url.port
print("port",port)

db = psycopg2.connect(
            dbname=dbname,
            user=user,
            password=password,
            host=host,
            port=port
            )

db.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)

cursor = db.cursor()
#end of db connection 

class ScheduledReminder:
    def __init__ (self,title,message,date,phone):
        self.title = title
        self.message = message
        self.phone = phone
        self.date = date
        self.notification = False 

    def __repr__ (self):
        return f"Title: {self.title}, message: {self.message}, phone:{self.phone}, date:{self.date}"      


class Worker:
    def __init__ (self, db):
        self.db = db
        self.scheduled_reminders = []
        self.reminders = []
    

    def row_factory(self):
        # creates array of tuples - each one representing a single reminder entry
        # used pandas for local version, and heroku didn't like it in deployment. 
        # I believe this code does the same thing as the pd solution but was going to test in deployed form 
        cursor = db.cursor()
        cursor.execute("SELECT * FROM reminders WHERE scheduled")
        rows = cursor.fetchall()
        for row in rows:
           print(row[:])
        
        # ----- pd/pandas version -------
        #self.db.row_factory = lambda cursor, row: row[:]
        #c = self.db.cursor()
        #self.scheduled_reminders = c.execute('SELECT * from reminders WHERE scheduled ').fetchall()
        #return self.scheduled_reminders

    
    def create_messages(self):
    # generates an instance of scheduledReminder for each reminder in
    # schedule reminder array and appends to 'reminders'
        
        for item in self.scheduled_reminders:
           self.reminders.append(ScheduledReminder (item[1],
            item[2],
            item[7],
            item[8],))
            
        return self.reminders

    #def update_timezone(self):
       # for item in self.reminders:
           # print(item.date)
            #arrow.Arrow.fromdatetime(item.date,'UTC')
           # return (print(item.date))
    
    def requires_send(self):
        
        #flags messages that should be sent in the next five minutes 
        #actually gives the next 7 minutes as buffer, the clock fires every 5 minutes 

        #establishing relative range
        currentTime = arrow.utcnow() #current UTC time
        duration = currentTime.shift(minutes=7)
        duration.humanize(currentTime).format('YYYY-MM-DD HH:mm:ss ZZ') # human speak 'in 7 minutes'
        
        #formatting for start 
        currentTime = arrow.utcnow().format('YYYY-MM-DD HH:mm:ss ZZ')
        c_year = int(currentTime[:4])
        c_month = int(currentTime[5:7])
        c_day = int(currentTime[8:10])
        c_hour = int(currentTime[11:13])
        c_minute = int(currentTime[14:16])

        #formatting for end
        duration = duration.format('YYYY-MM-DD HH:mm:ss ZZ')
        d_year = int(duration[:4])
        d_month = int(duration[5:7])
        d_day = int(duration[8:10])
        d_hour = int(duration[11:13])
        d_minute = int(duration[14:16])
        
        #range 
        start = datetime(c_year, c_month, c_day, c_hour, c_minute)
        end = datetime(d_year, d_month, d_day, d_hour, d_minute)

        for item in self.reminders:
            if item.date >= str(start) and item.date <= str(end):
                item.notification = True
            if item.notification == True:
                print("true")
            if item.notification == False:
                print("false")

        return(start)


    def send_message(self, client):
        #sends any message flagged with notification true 
        #more logic to be added for batching

        phone: os.environ.get('TWILIO_PHONE_NUMBER')

        for item in self.reminders:
            if item.notification == True:
                client.messages.create(
                to= item.phone,
                from_=phone,
                body=item.message,
                )
            

   
