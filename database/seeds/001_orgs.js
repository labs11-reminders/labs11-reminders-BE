exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orgs')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('orgs').insert([
        {
          name: 'Clean Water Org',
          description:
            'Non-Profit Organization providing clean water to desert planes.',
        },
        {
          name: 'Reminders International',
          description:
            'Providing training and mentorship to enterpreneurs in third world countries.',
        },
        {
          name: 'Etherium Org',
          description:
            'Establishing minimum wage standards in low income countries. Lorem ipsum.',
        },
      ]);
    });
};
