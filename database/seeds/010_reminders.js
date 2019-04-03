exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reminders')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('reminders').insert([
        {
          name: 'Upcoming Class Reminder43',
          description:
            'NOT SCHEDULED Don\t forget, we have an upcoming class this Wednesday, starting at 8 pm.',
          created_at: '03282019',
          group_id: 1,
          user_id: 2,
          scheduled: false,
          scheduled_date:'',
          phone_send:'',
          draft: false,
          template: true,
        },
        {
          name: 'Class Cancellation4',
          description:
            'Scheduled6: This Thursdays class is cancelled. We will meet again next week.',
          created_at: '03282019',
          group_id: 2,
          user_id: 1,
          scheduled: true,
          scheduled_date:'2019-04-03 16:45:00.000',
          phone_send:'18283355507',
          draft: false,
          template: false,
        },
        {
          name: 'Class material update4',
          description:
            'Scheduled5: Please check with your mentor/instructor for more details, at your class.',
          created_at: '03282019',
          group_id: 3,
          user_id: 1,
          scheduled: true,
          scheduled_date:'2019-04-03 16:55:00.000',
          phone_send:'18283355507',
          draft: true,
          template: false,
        },
        {
          name: 'Class material update 24',
          description:
            'Scheduled4: Please check with your mentor/instructor for more details, at your class.',
          created_at: '03282019',
          group_id: 3,
          user_id: 1,
          scheduled: true,
          scheduled_date:'2019-04-03 17:05:00.000',
          phone_send:'18283355507',
          draft: true,
          template: false,
        },
        {
          name: 'Class material update 23',
          description:
            'Scheduled3: Please check with your mentor/instructor for more details, at your class.',
          created_at: '03282019',
          group_id: 3,
          user_id: 1,
          scheduled: true,
          scheduled_date:'2019-04-03 16:10:00.000',
          phone_send:'18283355507',
          draft: true,
          template: false,
        },
        {
          name: 'Class material update 22',
          description:
            'Scheduled2: Please check with your mentor/instructor for more details, at your class.',
          created_at: '03282019',
          group_id: 3,
          user_id: 1,
          scheduled: true,
          scheduled_date:'2019-04-03 16:15:00.000',
          phone_send:'18283355507',
          draft: true,
          template: false,
        },
        {
          name: 'Class material update 21',
          description:
            'Scheduled1: Please check with your mentor/instructor for more details, at your class.',
          created_at: '03282019',
          group_id: 3,
          user_id: 1,
          scheduled: true,
          scheduled_date:'2019-04-03 17:20:00.000',
          phone_send:'18283355507',
          draft: true,
          template: false,
        },
      ]);
    });
};
