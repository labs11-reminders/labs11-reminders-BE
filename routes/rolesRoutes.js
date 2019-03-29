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
  
//endpoint route handler to delete a role
rolesRoutes.delete('/:id', async (req, res) => {
  try {
    const role = await helpers.getRoleById(req.params.id)
    console.log(role);
    console.log(req.params.id);
    if (role) {
        try {
            const destroy = await helpers.deleteRole(req.params.id);
            if (destroy) {
                res.status(200).json({message: 'The role has been deleted.'});
            }
        } catch (error) {
            console.log(error);
            console.log(req.params.id);
            res.status(500).json({error: 'The role could not be deleted.'});
        }
    } else {
        res.status(404).json({message: 'A role with the specified ID does not exist.'});
    }
} catch (error) {
    res.status(500).json({error: 'That role could not be removed.'});
}
});

//endpoint route handler to create a new role
rolesRoutes.post('/', async (req, res) => {
  try {
      
      if (req.body.title == null) {
          res.status(400).json({errorMessage: "Please provide a title for the organization."});
      } else {
          const role = await helpers.createRole(req.body);
          res.status(201).json(role)
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: "There was an error while saving the role to the database"});
  }
});

//endpoint route handler that allows admin to update a role
rolesRoutes.put('/:id', async (req, res) => {
  console.log('Updating a role.');    
  try {
      const role = await helpers.updateRole(req.params.id, req.body);
      console.log(role);
      if (role > 0) {
          res.status(200).json(req.body);
      } else {
          res.status(404).json({message: 'A role with the specified ID does not exist.'});
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({error: 'The role could not be modified at this time.'});
  }
});


module.exports = rolesRoutes;
