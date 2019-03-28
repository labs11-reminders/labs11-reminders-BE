const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Auth 0
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

const secured = require('../middleware/secured.js');
//   //Authentication middleware
// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: "https://dev-fkl4pfae.auth0.com/.well-known/jwks.json"
//   }),
//   audience: 'https://localhost:3000/users',
//   issuer: "https://dev-fkl4pfae.auth0.com/",
//   algorithms: ['RS256']
// });
// // end Auth0


// twilio
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(   // Perhaps NEW?   
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);  // end twilio

const usersRoutes = require('../routes/usersRoutes.js');

const server = express();
 
server.use(helmet());
server.use(cors());
server.use(express.json());


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

// twilio
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(pino);   // end twilio

server.use('/users', usersRoutes);
server.use('/users/:id', usersRoutes);

server.get('/', (req, res) => {
   
    res.send("Hello there friend please login!");
    

});

// Twilio GET name only or use generic World
server.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  }); 

// POST SMS immediate only
server.post('/api/messages', (req, res) => {
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
  });   // End Twilio

module.exports = server;


