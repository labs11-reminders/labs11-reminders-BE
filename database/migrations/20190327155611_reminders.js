exports.up = function(knex, Promise) {
  return knex.schema.createTable('reminders', tbl => {
    tbl.increments();

    tbl
      .string('name', 255)
      .notNullable();
      
    tbl
      .string('description', 555)
      .notNullable();
      
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl
      .integer('group_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('groups');
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
    tbl.boolean('scheduled').defaultTo(false);
    tbl.dateTime('scheduled_date');
    tbl.string('phone_send');
    tbl.boolean('draft').defaultTo(false);
    tbl.boolean('template').defaultTo(false);
    tbl.boolean('approved').defaultTo(false);
    tbl.boolean('sent').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reminders');
};
