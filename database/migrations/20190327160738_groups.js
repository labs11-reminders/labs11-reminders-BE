exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', tbl => {
    tbl.increments();

    tbl
      .string('name', 255)
      .notNullable()
      .unique();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('groups');
};
