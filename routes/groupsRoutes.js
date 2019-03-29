const express = require('express');

const helpers = require('../dbHelpers/otherModels');

const groupsRoutes  = express.Router();

const secured = require('../middleware/secured.js');

groupsRoutes .delete('/:id', (req, res) => {
    return helpers.deleteGroup(req.params.id)
      .then(count => {
        if (count === 0) {
          res.status(404).json({ message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'});
        } else {
          res.status(200).json({ id: req.params.id });
        }
      })
      .catch(err => res.status(500).json({ message: 'This is embarrassing. Please try to refresh the page and/or Slack us.' }));
  });

//endpoint route handler that gets a single user by id
groupsRoutes.get('/:id', async (req, res) => {
    try {
      const group = await helpers.getGroupById(req.params.id);
      if (group) {
        res.status(200).json(group);
      } else {
        res.status(404).json({message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'})
      }
    } catch (error) {
      res.status(500).send({message: 'This is embarrassing. Please try to refresh the page and/or Slack us.'});
    }
  });

  //endpoint route handler to get all of the users
groupsRoutes.get('/', async (req, res) => {
    try {
      const groups = await helpers.getAllGroups();
      res.status(200).json(groups);
    } catch (error) {
      res.status(500).json(error);
    }
  });

//endpoint route handler to create a new group
groupsRoutes.post('/', async (req, res) => {
  try {
      
      if (req.body.name == null) {
          res.status(400).json({errorMessage: "Please provide a name for the group or class."});
      } else {
          const group = await helpers.createGroup(req.body);
          res.status(201).json(group)
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: "There was an error while saving the group to the database"});
  }
});  

module.exports = groupsRoutes; 