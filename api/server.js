const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const axios = require('axios');

// config routes
const configureRoutes = require('../routes/elishaRoutes');
//Auth 0

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

const secured = require('../middleware/secured.js');
// end Auth0

// twilio
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); // end twilio

const usersRoutes = require('../routes/usersRoutes.js');
const rolesRoutes = require('../routes/rolesRoutes.js');
const orgsRoutes = require('../routes/orgsRoutes.js');
const remindersRoutes = require('../routes/remindersRoutes.js');
const groupsRoutes = require('../routes/groupsRoutes.js');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// twilio
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(pino); // end twilio

server.use('/api/users', usersRoutes);//yay / post yay 
server.use('/api/users/:id', usersRoutes);//yay /put yay
server.use('/api/roles', rolesRoutes);//yay p&p na
server.use('/api/roles/:id', rolesRoutes);//yay p&p na
server.use('/api/orgs', orgsRoutes); //oops 
server.use('/api/orgs/:id', orgsRoutes);//oops post na
server.use('/api/reminders', remindersRoutes);//oops
server.use('/api/reminders/:id', remindersRoutes);
server.use('/api/reminders/worker/:id', remindersRoutes);//oops / post na 
server.use('/api/groups', groupsRoutes);//yay / post yay
server.use('/api/groups/:id', groupsRoutes);//yay post na
server.use('/api/groups/:id/users', groupsRoutes);
server.use('/api/groups/add/user', groupsRoutes);
server.use('/api/groups/remove/user', groupsRoutes);
server.use('/api/users/auth', usersRoutes);

configureRoutes(server);

server.get('/', (req, res) => {
  res.send('Hello there friend!');
});

//Twilio GET name only or use generic World
server.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// server.get('/api/message-list', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// POST SMS immediate only
server.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  // console.log("RES", res.header, res.body);
  //console.log("REQ", req);
  // res.header('Content-Type', 'application/json');
  client.messages
    .create({
      body: req.body.body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({err}));
    });
});


axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

// PUT Phone # for twilio to validate
server.put('/api/twiliovalidation', (req, res) => {
  res.header('Content-Type', 'application/json');
  const twilio_sid = process.env.TWILIO_VERIFYSERVICE_SID;
 
  const validationRequest = {
    to: req.body.phone,
    channel: 'sms'
  }
  console.log('******** EXECUTING POST ******');
    axios.post("https://verify.twilio.com/v2/Services/VA87db353f03bee82d2a4c456eaca6c26e/Verifications",
        { To:'+12694913480',Channel:'sms' },
        { 
          auth: {
            username: accountSid,
            password: authToken
          }
        }
    )
    .then(axiosResponse => {
        console.log('POST RESPONSE', axiosResponse.body);
        res.send(axiosResponse.body);
    })
    .catch(err => {
        console.log(err.response.data);
    });
  
  

  
  
  // client.verify
  //   .services(twilio_sid)
  //   .verifications
  //   .create({
  //     to: req.body.phone,
  //     channel: 'sms' // we only care about sending SMS
  //   })
  //   .then(verification  => {
  //     console.log(verification.sid);
  //     res.send(JSON.stringify({ verification }));
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.send(JSON.stringify(err));
  //   });
}); // End Twilio


module.exports = server;
