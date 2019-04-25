const express = require('express');

const helpers = require('../dbHelpers/otherModels');

const groupsRoutes  = express.Router();

const secured = require('../middleware/secured.js');


// groupsRoutes.delete('/:id', (req, res) => {
//     return helpers.deleteGroup(req.params.id)
//       .then(count => {
//         if (count === 0) {
//           res.status(404).json({ message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'});
//         } else {
//           res.status(200).json({ id: req.params.id });
//         }
//       })
//       .catch(err => res.status(500).json({ message: 'This is embarrassing. Please try to refresh the page and/or Slack us.' }));
//   });
groupsRoutes.delete('/:id', async (req, res) => {
  try {
    const group = await helpers.getGroupById(req.params.id)
    console.log(group);
    console.log(req.params.id);
    if (group) {
        try {
            const destroy = await helpers.deleteGroup(req.params.id);
            if (destroy) {
                res.status(200).json({message: 'The group has been deleted.'});
            }
        } catch (error) {
            console.log(error);
            console.log(req.params.id);
            res.status(500).json({error: 'The group could not be deleted.'});
        }
    } else {
        res.status(404).json({message: 'The group with the specified ID does not exist.'});
    }
} catch (error) {
    res.status(500).json({error: 'The group could not be removed.'});
}
});




//endpoint route handler that gets a single user by id
groupsRoutes.get('/:id', async (req, res) => {
    try {
      const group = await helpers.getGroupById(req.params.id);
      if (group) {
        res.status(200).json(group);
      } else {
        res.status(404).json({message: 'Elisha is working on an amazing 404 page. In the meantime you get this boring message.'})
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

//endpoint route handler to get a list of users by group
groupsRoutes.get('/:id/users', async (req, res) => {
  try {
    if (req.params.id == null) {
      res.status(400).json({errorMessage: "Please provide a group id."});
    } else {
      const usersgroup = await helpers.getUsersByGroupId(req.params.id);
      res.status(200).json(usersgroup);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'There was an error while retrieving the users group.'})
  }
});

//endpoint route handler to add a user to a group
groupsRoutes.post('/add/user', async (req, res) => {
  try {
    if (req.body.user_id == null || req.body.group_id == null) {
      res.status(400).json({errorMessage: 'Please provide a record in the form of {user_id: value, group_id: value}'})
    } else {
      const usersGroup = await helpers.addUserToGroup(req.body);
      res.status(201).json({message: 'User added to group.'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'There was an error while trying to add the user to the group.'})
  }
});

//endpoint route handler to delete a user from a group
groupsRoutes.post('/remove/user', async (req, res) => {
  console.log('Remove user from group request received',req.body);
  try {
    if (req.body.user_id == null || req.body.group_id == null) {
      res.status(400).json({errorMessage: 'Please provide both a user_id and a group_id'})
    } else {
      const usersGroup = await helpers.deleteUserFromGroup(req.body.user_id, req.body.group_id);
      res.status(200).json({message: 'The user has been removed from the group.'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'There was an error while trying to delete the user from the group.'})
  }
});

module.exports = groupsRoutes; 