const db = require('../database/dbConfig.js');

module.exports = {
  getAllRoles,
  getAllGroups,
  getAllOrgs,
  getUsersByRole,
  getUsersByOrg,
  getGroupsByUser,
  getTemplatesByUser,
  getTemplatesByGroup,
  getRoleById,
  getGroupById,
  getTemplateById,

  createUser,
  createGroup,
  createOrg,
  createTemplate,

  updateUser,
  updateGroup,
  updateOrg,
  updateTemplate,
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
  return db('group').where({ user_id: id });
}

//gets all templates/reminders/messages a user created
function getTemplatesByUser(id) {
  return db('templates').where({ user_id: id });
}

//gets all templates/reminders/messages attached to a group
function getTemplatesByGroup(id) {
  return db('templates').where({ group_id: id });
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

//gets template by id
function getTemplateById(id) {
  return db('templates')
    .where({ id })
    .first();
}

//*********************************** CREATE ***************************/
function createUser(user) {
  return db('users').insert(user);
}

function createGroup(group) {
  return db('groups').insert(group);
}

function createOrg(org) {
  return db('orgs').insert(org);
}

function createTemplate(template) {
  return db('templates').insert(template);
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

function updateTemplate(id, body) {
  return db('templates')
    .where({ id })
    .update(body);
}
