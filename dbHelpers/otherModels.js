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

  createUser,
  createGroup,
  createOrg,
  createReminder,

  updateUser,
  updateGroup,
  updateOrg,
  updateReminder,

  deleteUser,
  deleteGroup,
  deleteReminder,

  getAll,
  getById
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
