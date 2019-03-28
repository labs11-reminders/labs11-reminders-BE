const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Auth 0
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

const secured = require('../middleware/secured.js');
// end Auth0

// twilio
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(   // Perhaps NEW?   
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);  // end twilio

const usersRoutes = require('../routes/usersRoutes.js');
const rolesRoutes = require('../routes/rolesRoutes.js');
const orgsRoutes = require('../routes/rolesRoutes.js');
const remindersRoutes = require('../routes/remindersRoutes.js');
const groupsRoutes = require('../routes/groupsRoutes.js');

const server = express();
 
server.use(helmet());
server.use(cors());
server.use(express.json());


// twilio
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(pino);   // end twilio

server.use('/users', usersRoutes);
server.use('/users/:id', usersRoutes);
server.use('/roles', rolesRoutes);
server.use('/roles/:id', rolesRoutes);
server.use('/orgs', orgsRoutes);
server.use('/orgs/:id', orgsRoutes);
server.use('/reminders', remindersRoutes);
server.use('/reminders/:id', remindersRoutes);
server.use('/groups', groupsRoutes);
server.use('/groups/:id', rolesRoutes);



server.get('/', (req, res) => {
    res.send("Hello there friend!");
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
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  });   // End Twilio

//Auth0
  // test end points for authorization
  //add jwtcheck to endpoints that need to be secure

server.get('/', function(req, res) {
    res.json({
      message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    });
  });

  server.get('/api/private', secured, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
  });
// end Auth0

module.exports = server;


