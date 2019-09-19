const db = require("../data/db-config.js");

function getUsers() {
  return db("user");
}

module.exports = {
  getUsers
};
