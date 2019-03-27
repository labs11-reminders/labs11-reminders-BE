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
