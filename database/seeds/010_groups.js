exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('groups').insert([
        {
          name: 'Personal Finance',
          user_id: 2,
        },
        {
          name: 'Establishing a Home Business',
          user_id: 5,
        },
        {
          name: 'Marketing Your Product',
          user_id: 3,
        },
      ]);
    });
};

