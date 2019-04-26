# labs11-reminders-BE

This is the back end project for the Reminders group in Labs11.

### Live Backend URL: https://reminders-international.herokuapp.com/

##

## Endpoints

**/--------------------------------------------/ GET ALL USERS /-----------------------------------------/**

### **Get all Users**

_method url_: `/api/users`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 1,
    "name": 'Luz Gabits',
    "password": 'jzqqDJx',
    "email": 'lgabits25@gmpg.org',
    "phone": '175-607-6017',
    "country": 'Albania',
    "org_id": 1,
    "role_id": 2,
  },
  {
    "id": 2,
    "name": 'Lisetta Bolding'
    "password": 'FwbT7SxLr',
    "email": 'lbolding28@artisteer.com',
    "phone": '541-885-8262',
    "country": 'China',
    "org_id": 2,
    "role_id": 2,
  },
]
```

**/--------------------------------------------/ GET SINGLE USER /-----------------------------------/**

### **Get a single User**

_method url_: `/api/users/:id`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
  {
    "id": 1,
    "name": 'Luz Gabits',
    "password": 'jzqqDJx',
    "email": 'lgabits25@gmpg.org',
    "phone": '175-607-6017',
    "country": 'Albania',
    "org_id": 1,
    "role_id": 2,
  },
]
```

### Dependencies Installed:

- npx gitignore node
- npm install dotenv
- yarn add express
- yarn add helmet
- yarn add nodemon — - dev
- yarn add knex cors
- yarn add bcrypt
- yarn add jsonwebtoken
- yarn add jest — - dev
- yarn add supertest - - dev
- yarn add react testing library - - dev
- yarn add jest-dom - - dev
- yarn add react-test-renderer
- yarn add pg

——
<br>
Upon opening in code editor, run ‘\$ yarn’
<br>
——

##

### When using postgreSQL for deployment:

1st install postgreSQL - ‘$ brew install postgresql’
<br>
**if error as follows: 
	dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.58.dylib
  	Referenced from: /usr/local/bin/node
  	Reason: image not found
	Abort trap: 6
try - ‘$ brew upgrade ‘ (if still doesn’t work, try other solutions here: https://github.com/Homebrew/homebrew-core/issues/11713)
<br>
Next setup knexfile correctly:
<br>

- knexfile.js - development: - client: ‘sqlite3’ - testing: - client: ’sqlite3’ - production: - client:’pg’
  <br>
  create database folder manually
  <br>
- knexfile.js
  - set directory to database folder

## 

### Twilio Account
Sign up for a [Twilio account](https://www.twilio.com/)
Apply for a Twilio phone number (Buy a Number)
Add your own number to the Verified Caller IDs
Retrieve your Twilio Account_SID and Auth_Token

#### On the Backend in the .env, add :

TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_PHONE_NUMBER

#### Dependencies and Setting up the Helper

Dependencies include: express, body-parser, and express-pino-logger

``` javascript
const client = require('twilio')(
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
```

#### API Call to Send a Message
``` javascript
app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});
```

#### Front End
Create a fetch to using a POST method

### Guided Demo
[How to send an SMS from React with Twilio](https://www.twilio.com/blog/send-an-sms-react-twilio)