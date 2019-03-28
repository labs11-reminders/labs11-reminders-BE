const express = require('express');

const helpers = require('../dbHelpers/otherModels');

const rolesRoutes = express.Router();

const secured = require('../middleware/secured.js');

//endpoint route handler to get all of the roles
rolesRoutes.get('/', async (req, res) => {
    try {
      const roles = await helpers.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json(error);
    }
  });

//endpoint route handler that gets a single role by id
rolesRoutes.get('/:id', async (req, res) => {
    try {
      const role = await helpers.getRoleById(req.params.id);
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'})
      }
    } catch (error) {
      res.status(500).send({message: 'This is embarrassing. Please try to refresh the page and/or Slack us.'});
    }
  });  


module.exports = rolesRoutes;
