const knexConfig = require('../knexfile.js');

const db = require('../database/dbConfig.js');

module.exports = {
    getAll,
    getById
};

//gets all of the users in the users database
function getAll() {
    return db('users');
}

//gets a user by their user id number
function getByID() {
    return db('users')
    .where('id', Number(id))
};