// Update with your config settings.
const prodDbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/reminders.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/reminders.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',

    },

  },

  production: {
    client: 'pg',
    connection: prodDbConnection,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds'
    },
  }
<<<<<<< HEAD
  
  };
=======

  };
>>>>>>> 7ce1cd0ffb74ef17900b5e321adbf8c4e1f9c94f
