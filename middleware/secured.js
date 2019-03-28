const express = require('express');
//Auth 0
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');


  //Authentication middleware
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://dev-fkl4pfae.auth0.com/.well-known/jwks.json"
  }),
  audience: 'https://localhost:3000/users',
  issuer: "https://dev-fkl4pfae.auth0.com/",
  algorithms: ['RS256']
});
// end Auth0

module.exports = jwtCheck;