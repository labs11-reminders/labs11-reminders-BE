const express = require('express');

const helpers = require('../dbHelpers/otherModels');

const orgsRoutes = express.Router();

const secured = require('../middleware/secured.js');

//endpoint route handler to get all of the users
routes.get('/', async (req, res) => {
    try {
      const orgs = await helpers.getAllOrgs();
      res.status(200).json(orgs);
    } catch (error) {
      res.status(500).json(error);
    }
  });

//endpoint route handler to create a new organization
orgsRoutes.post('/', async (req, res) => {
  try {
      
      if (req.body.name == null || req.body.description == null) {
          res.status(400).json({errorMessage: "Please provide a name and a description for the organization."});
      } else {
          const organization = await helpers.createOrg(req.body);
          res.status(201).json(organization)
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: "There was an error while saving the organization to the database"});
  }
});

module.exports = orgsRoutes;  