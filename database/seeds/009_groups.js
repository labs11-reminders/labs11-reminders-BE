exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups')
   // .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('groups').insert([
        {
          name: 'Personal Finance',
          
        },
        {
          name: 'Establishing a Home Business',
          
        },
        {
          name: 'Marketing Your Product',
          
        },
      ]);
    });
};
