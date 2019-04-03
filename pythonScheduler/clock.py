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

#DB connection - put in both files after one help post said it needed to be in the worker file 
url = urlparse.urlparse(os.environ['DATABASE_URL'])
dbname = url.path[1:]
user = url.username
password = url.password
host = url.hostname
port = url.port

db = psycopg2.connect(
            dbname=dbname,
            user=user,
            password=password,
            host=host,
            port=port
            )

db.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)



#env variables for worker funtions 
accountSid = os.environ.get('TWILIO_ACCOUNT_SID')
authToken = os.environ.get('TWILIO_AUTH_TOKEN')

#class instances 
worker = Worker(db)
sched = BlockingScheduler()

#params defined for worker functions
client = Client(accountSid,authToken)


@sched.scheduled_job('interval', minutes=2)
#changed interval to two minutes for testing purposes
def timed_job():
    worker.row_factory()
    worker.create_messages()
    worker.requires_send()
    worker.send_message(client)
    print('This job is run every five minutes.')



sched.start()


