// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefaut: true,
    connection: {
      filename: "./data/db.sqlite3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
