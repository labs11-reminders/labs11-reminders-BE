const helpers = require('../dbHelpers/otherModels');
const Users = require('../dbHelpers/usersModels.js');

module.exports = routes => {
  //****************************** ENDPOINTS *****************************/
  routes.get('/api/users/groups/:id', getUserGroups);
  routes.get('/api/orgs/users/:id', getOrgUsers);
  routes.get('/api/reminders', getReminders);
  routes.get('/api/users/reminders/:id', getUserReminders);
  routes.post('/api/groups/reminders/:id', getGroupReminders);

  routes.put('/api/users/:id', editUser);
  routes.put('/api/groups/:id', editGroup);
  routes.put('/api/orgs/:id', editOrganization);
  routes.put('/api/reminders/:id', editReminder);
  routes.put('/api/reminders/worker/:id', editWorkerReminder);

  // ******************** Get User Details ******************//
  routes.get('/api/users/data/:id', async (req, res) => {
    try {
      const userArr = await Users.getById(req.params.id);
      const user = userArr[0];
      const userGroups = await helpers.getGroupsByUser(req.params.id);
      const userReminders = await helpers.getRemindersByUser(req.params.id);

      res.status(200).json({ user, userGroups, userReminders });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: 'Server error, cannot get user data', error });
    }
  });
};

// ******************** Get Users and Groups ************************//
function getUserGroups(req, res) {
  Users.getById(req.params.id)
    .then(user => {
      helpers.getGroupsByUser(req.params.id).then(groups => {
        const userObj = user[0];
        //console.log(userObj);
        userObj.groups = groups;
        res.status(200).json(user);
      });
    })
    .catch(err =>
      res.status(500).json({
        error: `Internal server error. Cannot complete request.`,
      }),
    );
}

// ******************** Get Organization Users *********************//
function getOrgUsers(req, res) {
  helpers
    .getOrgsById(req.params.id)
    .then(org => {
      helpers.getUsersByOrg(req.params.id).then(users => {
        org.users = users;
        res.status(200).json(org);
      });
    })
    .catch(err =>
      res.status(500).json({
        error: `Internal server error. Cannot complete request.`,
      }),
    );
}

// ******************** Get Reminders ******************//
function getReminders(req, res) {
  helpers
    .getAllReminders()
    .then(reminders => {
      res.status(200).json(reminders);
    })
    .catch(err =>
      res.status(500).json({
        error: `Internal server error. Cannot complete request.`,
      }),
    );
}

// ******************** Get User Reminders ******************//
function getUserReminders(req, res) {
  Users.getById(req.params.id)
    .then(user => {
      helpers.getRemindersByUser(req.params.id).then(rem => {
        const userObj = user[0];
        //console.log(userObj);
        userObj.reminders = rem;
        res.status(200).json(user);
      });
    })
    .catch(err =>
      res.status(500).json({
        error: `Internal server error. Cannot get user reminders.`,
      }),
    );
}

// ******************** Get Group Reminders ******************//
function getGroupReminders(req, res) {
  helpers
    .getGroupById(req.params.id)
    .then(group => {
      helpers.getRemindersByGroup(req.params.id).then(rem => {
        group.reminders = rem;
        res.status(200).json(group);
      });
    })
    .catch(err =>
      res.status(500).json({
        error: `Internal server error. Cannot complete request.`,
      }),
    );
}

// ******************** Update User ***************************//
function editUser(req, res) {
  const changes = req.body;
  const { id } = req.params;

  helpers
    .updateUser(id, changes)
    .then(count => {
      count
        ? res.status(200).json({
            message: 'User profile update successful.',
            updated: changes,
          })
        : res.status(404).json({
            error: `The profile with the specified id: ${id} does not exist.`,
          });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: `The Profile information could not be modified.` });
    });
}

// ******************** Update Group ***************************//
function editGroup(req, res) {
  const changes = req.body;
  const { id } = req.params;

  helpers
    .updateGroup(id, changes)
    .then(count => {
      count
        ? res.status(200).json({
            message: 'Group update successful.',
            updated: changes,
          })
        : res.status(404).json({
            error: `The group with the specified id: ${id} does not exist.`,
          });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: `The Group information could not be modified.` });
    });
}

// ******************** Update Organization ***************************//
function editOrganization(req, res) {
  const changes = req.body;
  const { id } = req.params;

  helpers
    .updateOrg(id, changes)
    .then(count => {
      count
        ? res.status(200).json({
            message: 'Organization profile update successful.',
            updated: changes,
          })
        : res.status(404).json({
            error: `The organization with the specified id: ${id} does not exist.`,
          });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: `The Organization information could not be modified.` });
    });
}

// ******************** Update Reminder ******************//
function editReminder(req, res) {
 
  const changes = req.body; 
  const { id } = req.params;


  helpers
    .updateReminder(id, changes)
    .then(count => {
      count
        ? res.status(200).json({
            message: 'Reminder update successful.',
            updated: changes,
          })
        : res.status(404).json({
            error: `The reminder with the specified id: ${id} does not exist.`,
          });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: `The Reminder information could not be modified.` });
    });
}
// ******************** Update Reminder from WORKER.py ******************//
function editWorkerReminder(req, res) {
  const changes = req.query; // req.body was returning empty, changed to req.query
  const { id } = req.params;
  
  helpers
    .updateReminder(id, changes)
    .then(count => {
      count
        ? res.status(200).json({
            message: 'Reminder update successful.',
            updated: changes,
          })
        : res.status(404).json({
            error: `The reminder with the specified id: ${id} does not exist.`,
          });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: `The Reminder information could not be modified.` });
    });
}

