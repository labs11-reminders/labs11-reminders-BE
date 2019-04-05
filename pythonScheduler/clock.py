import os
from apscheduler.schedulers.blocking import BlockingScheduler
from worker import Worker
from worker import ScheduledReminder


#class instances 
worker = Worker()
sched = BlockingScheduler()


@sched.scheduled_job('interval', minutes=5)
def timed_job():
    worker.api_getReminders()
    worker.create_messages()
    worker.requires_send()
    worker.api_sendReminders()
    print('This job is run every five minutes.')



sched.start()


