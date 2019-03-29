const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

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
const client = require('twilio')(
  // Perhaps NEW?
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN,
); // end twilio

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
server.use('/api/reminders/:id', remindersRoutes);//oops / post na 
server.use('/api/groups', groupsRoutes);//yay / post yay
server.use('/api/groups/:id', groupsRoutes);//yay post na

configureRoutes(server);

server.get('/', (req, res) => {
  res.send('Hello there friend!');
});

// Twilio GET name only or use generic World
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
  // console.log("REQ", req);
  // res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
}); // End Twilio


module.exports = server;
