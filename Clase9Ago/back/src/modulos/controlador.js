const db = require("../db/mysql");
const tabla = "Clients";

function getAll() {
  return db.getAll("Clients");
}
module.exports = { getAll };
