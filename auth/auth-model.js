const db = require("../data/db-config.js");

function findBy(filter) {
  return db("user")
    .where({ filter })
    .first();
}

function register(newUser) {
  return db("user")
    .insert(newUser)
    .then(([id]) => {
      return findBy(id);
    });
}

module.exports = {
  register,
  findBy
};
