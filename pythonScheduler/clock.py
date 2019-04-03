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


#class instances 
worker = Worker()
sched = BlockingScheduler()

#params defined for worker functions
client = Client(accountSid,authToken)


@sched.scheduled_job('interval', minutes=5)
def timed_job():
    worker.api_getReminders()
    worker.create_messages()
    worker.requires_send()
    worker.api_sendReminders()
    print('This job is run every five minutes.')



sched.start()


