const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

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

// twilio
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(pino);   // end twilio

server.use('/users', usersRoutes);
server.use('/users/:id', usersRoutes);

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

module.exports = server;


