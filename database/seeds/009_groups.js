exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups')
   // .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('groups').insert([
        {
          name: 'Personal Finance',
          org_id: 1,
          
        },
        {
          name: 'Establishing a Home Business',
          org_id: 2,
        },
        {
          name: 'Marketing Your Product',
          org_id: 2,
        },
      ]);
    });
};
