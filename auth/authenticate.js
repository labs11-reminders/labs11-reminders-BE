var express = require('express');

var session = require('express-session');
var dotenv = require('dotenv');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

dotenv.config();

//configure Passport to use Auth0 
var strategy = new Auth0Strategy(
    {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
    },
)

//configuring the express-session
var userSession = {
    secret: 'TWO LAWYERS A CAREER COACH AND A WRITER WALK INTO A BAR',
    cookies: {},
    resave: false,
    saveUninitialized: true
};

if (authenticate.get('env') === 'production') {
    userSession.cookie.secure: true
};

authenticate.use(session(userSession));