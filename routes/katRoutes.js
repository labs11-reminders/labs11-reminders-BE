const express = require('express');

const Users = require('../dbHelpers/usersModels.js');
const helpers = require('../dbHelpers/otherModels');

const routes = express.Router();
/*
<!-- Get All Users --> * K
<!-- Get All Roles --> * K
<!-- Get All Groups -->* K
<!-- Get All Orgs -->* K

<!-- Get UserById -->* K
<!-- Get RoleById -->* K
<!-- Get GroupById -->* K
<!-- Get ReminderById -->* K

<!-- Delete User -->* K
<!-- Delete Group -->* K 
<!-- Delete Reminder -->* K

*/

//endpoint route handler to get all of the users
routes.get('/api/users', async (req, res) => {
  console.log("API users", req)
  try {
    const users = await Users.getAllUsers();  // need to change
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

//endpoint route handler that gets a single user by id
routes.get('/api/users/:id', async (req, res) => {
  try {
    const user = await Users.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'})
    }
  } catch (error) {
    res.status(500).send({message: 'This is embarrassing. Please try to refresh the page and/or Slack us.'});
  }
});

//endpoint route handler to get all of the roles
routes.get('/api/roles', async (req, res) => {
  try {
    const roles = await helpers.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

//endpoint route handler that gets a single role by id
routes.get('/api/roles:id', async (req, res) => {
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

//endpoint route handler to get all of the users
routes.get('/api/groups', async (req, res) => {
  try {
    const groups = await helpers.getAllGroups();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json(error);
  }
});

//endpoint route handler that gets a single user by id
routes.get('/api/groups/:id', async (req, res) => {
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
routes.get('/api/orgs', async (req, res) => {
  try {
    const orgs = await helpers.getAllOrgs();
    res.status(200).json(orgs);
  } catch (error) {
    res.status(500).json(error);
  }
});

//endpoint route handler that gets a single user by id
routes.get('/api/reminders/:id', async (req, res) => {
  try {
    const reminder = await helpers.getReminderById(req.params.id);
    if (reminder) {
      res.status(200).json(reminder);
    } else {
      res.status(404).json({message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'})
    }
  } catch (error) {
    res.status(500).send({message: 'This is embarrassing. Please try to refresh the page and/or Slack us.'});
  }
});

routes.delete('/api/users:id', (req, res) => {
  return helpers.remove(req.params.id)
    .then(count => {
      if (count === 0) {
        res.status(404).json({ message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'});
      } else {
        res.status(200).json({ id: req.params.id });
      }
    })
    .catch(err => res.status(500).json({ message: 'This is embarrassing. Please try to refresh the page and/or Slack us.'}));
});

routes.delete('/api/groups:id', (req, res) => {
  return helpers.remove(req.params.id)
    .then(count => {
      if (count === 0) {
        res.status(404).json({ message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'});
      } else {
        res.status(200).json({ id: req.params.id });
      }
    })
    .catch(err => res.status(500).json({ message: 'This is embarrassing. Please try to refresh the page and/or Slack us.' }));
});

routes.delete('/api/reminders:id', (req, res) => {
  return helpers.remove(req.params.id)
    .then(count => {
      if (count === 0) {
        res.status(404).json({ message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'});
      } else {
        res.status(200).json({ id: req.params.id });
      }
    })
    .catch(err => res.status(500).json({ message: 'This is embarrassing. Please try to refresh the page and/or Slack us.' }));
});




module.exports = routes;