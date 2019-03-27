exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('name', 255)
      .notNullable()
      .unique();
    users.string('password').notNullable();
    users.string('email', 255).notNullable();
    users.string('phone', 12);
    users.string('country', 100).notNullable();

    users
      .integer('org_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('orgs');
    users
      .integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('roles');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
