
exports.up = function(knex, Promise) {
    return knex.schema.createTable('usergroups', function(tbl) {
        tbl
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          

        tbl
          .integer('group_id')
          .unsigned()
          .references('id')
          .inTable('groups')
        
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('userGroups');
};
