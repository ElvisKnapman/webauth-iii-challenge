exports.up = function(knex) {
  return knex.schema.createTable("user", tbl => {
    // unique id, primary key
    tbl.increments();

    // username, unique, not null
    tbl
      .string("username", 40)
      .notNullable()
      .unique();

    // password, not null --- it will be hashed before being inserted
    tbl.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user");
};
