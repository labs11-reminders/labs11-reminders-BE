import arrow
import schedule
import time
import os
import sys
import json
import requests
from datetime import datetime, timedelta
import http.client
import ast

auth_domain = os.environ.get('AUTH0_DOMAIN')
client_machine_id = os.environ.get('AUTH0_MACHINE_ID')
client_machine_secret = os.environ.get('AUTH0_MACHINE_SECRET')


conn = http.client.HTTPSConnection(auth_domain)

#payload = "{\"client_id\":\"client_machine_id\",\"client_secret\":\"client_machine_secret\",\"audience\":\"https://localhost:3000/users\",\"grant_type\":\"client_credentials\"}"
 

#headers = { 'content-type': "application/json" }

#conn.request("POST", "/oauth/token", payload, headers)

#res = conn.getresponse()
#data = res.read()
#decoded_data = data.decode("utf-8")
#decoded_data = ast.literal_eval(decoded_data)


class ScheduledReminder:
    #class for instances of a ScheduledReminder
    def __init__ (self,reminder_id,title,message,date,users,sent):
        self.reminder_id = reminder_id
        self.title = title
        self.message = message
        self.users = users
        self.date = date
        self.notification = False 
        self.sent = False


    def __repr__ (self):
        return f"ID: {self.reminder_id}, Title: {self.title}, message: {self.message}, phone:{self.phone}, date:{self.date}, sent:{self.sent}"      


class Worker:
    def __init__ (self):
        self.to_send_reminders = []
        self.scheduled_reminders = []
        self.reminders = []
    
    def api_getReminders(self):
        
        print("AUTHORIZED API")
        
        '''api_token = decoded_data['access_token']
        api_url_base = 'https://reminders-international.herokuapp.com/'
        headers = {'Content-Type': 'application/json','Authorization': 'Bearer {0}'.format(api_token)}

        api_url = '{0}api/reminders'.format(api_url_base)
        response = requests.get(api_url, headers=headers)

        if response.status_code == 200:
            self.reminders = json.loads(response.content.decode('utf-8'))
            print("reminders",self.reminders)
            return json.loads(response.content.decode('utf-8'))
        else:
            print("oops")'''        
       
    def create_messages(self):
    # generates an instance of scheduledReminder for each reminder in
    # schedule reminder array and appends to 'reminders'
        for item in self.reminders:
           if item['approved'] == True:
                self.scheduled_reminders.append(ScheduledReminder (item['id'],item['name'],item['description'],item['scheduled_date'],item['users'],item['sent'],))          
        return self.scheduled_reminders
       
    def requires_send(self):
        
        #flags messages that should be sent in the next five minutes 
        #actually gives the next 7 minutes as buffer, the clock fires every 5 minutes 

        #establishing relative range
        currentTime = arrow.utcnow() #current UTC time
        duration = currentTime.shift(weeks=1)
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
        #!!!!item.date >= str(start) and
        for item in self.scheduled_reminders:
            if item.sent == False: 
                print(item.sent)
                if  item.date <= str(end):
                    item.notification = True
                    self.to_send_reminders.append(item) #reminders that haven't been sent and fall in time range
                if item.notification == True:
                    print("true")
                if item.notification == False:
                    print("false")

        return(print(self.to_send_reminders))

    def api_sendReminders(self): 
        #sends message using Twilio API (in server.js)
        '''api_token = decoded_data['access_token']
        api_url_base = 'https://reminders-international.herokuapp.com/'
        headers = {'Content-Type': 'application/json','Authorization': 'Bearer {0}'.format(api_token)}'''

        for item in self.to_send_reminders:
            for number in item.phone:
                print("SENT A TEXT MESSAGE")
                item.sent = True
                #api_url = '{0}api/messages'.format(api_url_base)
                #message = {'users':item.users ,'body':item.message }
                #response = requests.post(api_url, headers=headers, json=message)
            '''if item.sent == True: #mark sent as true in db so it doesn't get sent again. 
                api_url = f"{api_url_base}api/reminders/worker/{item.reminder_id}"
                payload = {"sent":"true"}
                response = requests.put(api_url, headers=headers, params=payload)
                print("PUT",response,response.url)'''
      

    