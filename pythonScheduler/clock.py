import sqlite3
import pandas as pd
import urllib.parse as urlparse
import psycopg2
import os
from apscheduler.schedulers.blocking import BlockingScheduler
from worker import Worker
from worker import ScheduledReminder
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from psycopg2 import connect
from twilio.rest import Client

#db = sqlite3.connect('../database/reminders.db3') - local testing 



#env variables for worker funtions 
accountSid = os.environ.get('TWILIO_ACCOUNT_SID')
authToken = os.environ.get('TWILIO_AUTH_TOKEN')

#class instances 
worker = Worker()
sched = BlockingScheduler()

#params defined for worker functions
client = Client(accountSid,authToken)


@sched.scheduled_job('interval', minutes=2)
#changed interval to two minutes for testing purposes
def timed_job():
    #worker.row_factory()
    #worker.create_messages()
    #worker.requires_send()
    #worker.send_message(client)
    print('This job is run every five minutes.')



sched.start()


