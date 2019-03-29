const express = require('express');

const helpers = require('../dbHelpers/otherModels');

const orgsRoutes = express.Router();

const secured = require('../middleware/secured.js');

//endpoint route handler to get all of the users
orgsRoutes.get('/', async (req, res) => {
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

//endpoint route handler to delete and organization
orgsRoutes.delete('/:id', async (req, res) => {
  try {
    const org = await helpers.findById(req.params.id)
    console.log(org);
    console.log(req.params.id);
    if (org) {
        try {
            const destroy = await helpers.deleteOrg(req.params.id);
            if (destroy) {
                res.status(200).json({message: 'The organization has been deleted.'});
            }
        } catch (error) {
            console.log(error);
            console.log(req.params.id);
            res.status(500).json({error: 'The organization could not be deleted.'});
        }
    } else {
        res.status(404).json({message: 'An organization with the specified ID does not exist.'});
    }
} catch (error) {
    res.status(500).json({error: 'The organization could not be removed.'});
}
});

module.exports = orgsRoutes;  