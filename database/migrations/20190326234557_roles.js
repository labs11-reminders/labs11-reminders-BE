exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', tbl => {
    tbl.increments();

    tbl
      .string('title', 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
