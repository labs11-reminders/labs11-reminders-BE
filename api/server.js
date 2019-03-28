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


//AuthO
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

dotenv.config();

   //configure Passport to use Auth0 
const strategy = new Auth0Strategy(
  {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3333/auth0/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
      //the access token is what is used to call the Auth0 API
      //the extraParams.id_token has the JWT
      //profile has all of the information about the user
      return done(null, profile);
  }
);

passport.use(strategy);

  // You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
// end Auth0

const usersRoutes = require('../routes/usersRoutes.js');
const authRoutes = require('../routes/authRoutes.js')


const server = express();
 
server.use(helmet());
server.use(cors());
server.use(express.json());

//Auth0
  //configuring the express-session
const userSession = {
  secret: 'TWO LAWYERS A CAREER COACH AND A WRITER WALK INTO A BAR',
  cookies: {},
  resave: false,
  saveUninitialized: true
};

// if (server.get('env') === 'production') {
//   userSession.cookie.secure: true //requires https
// };

server.use(session(userSession));

  //these two commands must be located in the authentication application code
  //after the application of the express middleware
server.use(passport.initialize());
server.use(passport.session());
// end Auth0


// twilio
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(pino);   // end twilio

server.use('/users', usersRoutes);
server.use('/users/:id', usersRoutes);
server.use('/auth0', authRoutes);
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


