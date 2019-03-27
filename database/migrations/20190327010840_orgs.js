exports.up = function(knex, Promise) {
  return knex.schema.createTable('orgs', tbl => {
    tbl.increments();

    tbl
      .string('name', 255)
      .notNullable()
      .unique();
    tbl
      .string('description', 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('orgs');
};
