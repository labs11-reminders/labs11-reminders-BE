exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reminders')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('reminders').insert([
        {
          name: 'Upcoming Class Reminder',
          description:
            'Don\t forget, we have an upcoming class this Wednesday, starting at 8 pm.',
          created_at: '03282019',
          group_id: 1,
          user_id: 2,
          scheduled: true,
          draft: false,
          template: true,
        },
        {
          name: 'Class Cancellation',
          description:
            'This Thursday\s class is cancelled. We will meet again next week.',
          created_at: '03282019',
          group_id: 2,
          user_id: 1,
          scheduled: true,
          draft: false,
          template: false,
        },
        {
          name: 'Class material update',
          description:
            'Please check with your mentor/instructor for more details, at your class.',
          created_at: '03282019',
          group_id: 3,
          user_id: 1,
          scheduled: false,
          draft: true,
          template: false,
        },
      ]);
    });
};
