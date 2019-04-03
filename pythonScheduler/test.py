#import sqlite3
#import psycopg2
#from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
#from psycopg2 import connect
#import urllib.parse as urlparse
import pandas as pd
import pandas.io.sql as psql
import arrow
import schedule
import time
import os
import json
import requests
from datetime import datetime, timedelta
from worker import Worker

worker = Worker()


worker.api_getReminders()
worker.create_messages()
worker.requires_send()
worker.send_message(client)