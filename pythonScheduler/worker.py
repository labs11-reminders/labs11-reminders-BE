import arrow
import schedule
import time
import os
import json
import requests
from datetime import datetime, timedelta




#api_token = 'your_api_token'
api_url_base = 'https://reminders-international.herokuapp.com/'

headers = {'Content-Type': 'application/json'}


class ScheduledReminder:
    #class for instances of a ScheduledReminder
    def __init__ (self,title,message,date,phone):
        self.title = title
        self.message = message
        self.phone = phone
        self.date = date
        self.notification = False 

    def __repr__ (self):
        return f"Title: {self.title}, message: {self.message}, phone:{self.phone}, date:{self.date}"      


class Worker:
    def __init__ (self):
        self.scheduled_reminders = []
        self.reminders = []
     
    def api_getReminders(self):
        api_url = '{0}api/reminders'.format(api_url_base)
        response = requests.get(api_url, headers=headers)

        if response.status_code == 200:
            self.reminders = json.loads(response.content.decode('utf-8'))
            return json.loads(response.content.decode('utf-8'))
        else:
            print("oops")    
       
    def create_messages(self):
    # generates an instance of scheduledReminder for each reminder in
    # schedule reminder array and appends to 'reminders'
        
        for item in self.reminders:
            self.scheduled_reminders.append(ScheduledReminder (item['name'],item['description'],item['scheduled_date'],item['phone_send'],))
    
        return self.scheduled_reminders

   
    ''' #------PLAN TO IMPLEMENT ON FRONT END--------
    def update_timezone(self): 
        for item in self.reminders:
            print(item.date)
            arrow.Arrow.fromdatetime(item.date,'UTC')
            return (print(item.date)) '''
    
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

        #Flags notification as true or false 
        for item in self.scheduled_reminders:
            if item.date >= str(start) and item.date <= str(end):
                item.notification = True
            if item.notification == True:
                print("true")
            if item.notification == False:
                print("false")

        return(start)

    def api_sendReminders(self): 
        #sends message using Twilio API (in server.js)
        for item in self.scheduled_reminders:
            if item.notification == True:
                print("SENT A TEXT MESSAGE")
                print(item.message)
                #api_url = '{0}api/messages'.format(api_url_base)
                #message = {'to':item.phone ,'body':item.message }
                #response = requests.post(api_url, headers=headers, json=message)

    