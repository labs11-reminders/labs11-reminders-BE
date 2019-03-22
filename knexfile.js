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
<<<<<<< HEAD
    }
=======
    },
>>>>>>> ecacf966f4f59354cdb0f4aa114558a86048dc6e
  },

  production: {
    client: 'pg',
<<<<<<< HEAD
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
=======
    connection: prodDbConnection,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
>>>>>>> ecacf966f4f59354cdb0f4aa114558a86048dc6e
    },
    seeds: {
      directory: './database/seeds'
    },
  }
  
  };
