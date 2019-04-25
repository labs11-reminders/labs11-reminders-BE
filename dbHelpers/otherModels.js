const db = require('../database/dbConfig.js');

module.exports = {
  
  getAllRoles,
  getAllGroups,
  getAllOrgs,
  getAllReminders,
  getUsersByRole,
  getUsersByOrg,
  getGroupsByUser,
  getRemindersByUser,
  getRemindersByGroup,
  getRoleById,
  getGroupById,
  getReminderById,
  getOrgsById,
  getUsersByGroupId,
  getGroupByOrg,

  createUser,
  createGroup,
  createOrg,
  createReminder,
  createRole,
  addUserToGroup,
  getUsersByName,

  updateUser,
  updateGroup,
  updateOrg,
  updateReminder,
  updateRole,

  deleteUser,
  deleteGroup,
  deleteReminder,
  deleteOrg,
  deleteRole,
  deleteUserFromGroup,

  getAll,
  getById,

  findById, //for the org db
  findByAuth, //for making sure a user has an Auth0 generated sub_id
};

function getAll() {
  return db('users');
}

//gets a user by their user id number
function getById(id) {
  return db('users')
  .where('id', Number(id))
};

//gets all roles in the roles database
function getAllRoles() {
  return db('roles');
}

//gets all groups in the groups database
function getAllGroups() {
  return db('groups');
}

//gets all organizations in the orgs database
function getAllOrgs() {
  return db('orgs');
}

//gets all reminders in the reminders database
function getAllReminders() {
  return db('reminders');
}

//gets organizations by id in the orgs database
function getOrgsById(id) {
  return db('orgs')
    .where({ id })
    .first();
}

//gets all users of certain role from users db
function getUsersByRole(id) {
  return db('users').where({ role_id: id });
}

//gets all users in the particular organization
function getUsersByOrg(id) {
  return db('users').where({ org_id: id });
}

//gets all groups a user belongs to
function getGroupsByUser(id) {
  return db('groups').where({ user_id: id });
}

//gets all Reminders/reminders/messages a user created
function getRemindersByUser(id) {
  return db('reminders').where({ user_id: id });
}

//gets all Reminders/messages attached to a group
function getRemindersByGroup(id) {
  return db('reminders').where({ group_id: id });
}

//gets roles by id
function getRoleById(id) {
  return db('roles')
    .where({ id })
    .first();
}

//gets group by id
function getGroupById(id) {
  return db('groups')
    .where({ id })
    .first();
}

//gets Reminder by id
function getReminderById(id) {
  return db('reminders')
    .where({ id })
    .first();
}

function getUsersByGroupId(id) {
  return db.raw('select users.* from users left join usergroups ug on users.id = ug.user_id left join groups on ug.group_id = groups.id where groups.id = ?', id);
}

function getGroupByOrg(org_id) {
  return db('groups')
    .where({ org_id: org_id})
}



//*********************************** CREATE ***************************/
function createUser(user) {
  return db('users').insert(user, 'id');
}

function createGroup(group) {
  return db('groups').insert(group, 'id');
}

function createOrg(org) {
  return db('orgs').insert(org, 'id');
}

function createReminder(Reminder) {
  return db('reminders').insert(Reminder, 'id');
}

function createRole(role) {
  return db('roles').insert(role, 'id');
}

// Incoming body: 
// record = { user_id: value, group_id: value }
function addUserToGroup(record) {
  return db('usergroups')
  .insert(record);
}

function getUsersByName(searchString) {
  searchString = '%' + searchString + '%';
  console.log('Searching for',searchString);
  return db('users')
  .where('name', 'like', searchString);
}

//*********************************** UPDATE ***************************/
function updateUser(id, body) {
  return db('users')
    .where({ id })
    .update(body);
}

function updateGroup(id, body) {
  return db('groups')
    .where({ id })
    .update(body);
}

function updateOrg(id, body) {
  return db('orgs')
    .where({ id })
    .update(body);
}

function updateReminder(id, body) {
  return db('reminders')
    .where({ id })
    .update(body);
}

function updateRole(id, body) {
  return db('roles')
    .where({ id })
    .update(body);
}

//*********************************** DELETE ***************************/
function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
}
function deleteGroup(id) {
  return db('groups')
    .where({ id })
    .del();
}
function deleteReminder(id) {
  return db('reminders')
    .where({ id })
    .del();
}
function deleteOrg(id) {
  return db('orgs')
    .where({ id })
    .del();
}

function deleteRole(id) {
  return db('roles')
    .where({ id })
    .del();
}

function deleteUserFromGroup(user, group) {
  console.log('Removing user from group:');
  console.log('user_id:', user);
  console.log('group_id:', group);
  return db('usergroups')
  .where({ user_id: user, group_id: group })
  .del();
}

//*********************************** Find By ***************************/

//gets only the org in the table with that particular id
function findById(id) {
  return db('orgs')
  .where('id', Number(id))
};

//gets only the user in the table with that particular Auth0 generated id
function findByAuth(auth0_sub) {
  return db('users')
  .where({ auth0_sub: auth0_sub })
  .first();
}
