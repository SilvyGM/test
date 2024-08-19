const mysql = require("mysql");
const config = require("../config");
const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  port: config.mysql.port,
};

let conexion;
function connectDB() {
  conexion = mysql.createConnection(dbConfig);
  conexion.connect((err) => {
    if (err) {
      console.log("[db err]", err);
      setTimeout(conMysql, 200);
    } else {
      console.log("Base de datos conectada!!!");
    }
  });
}
connectDB();

function getAll(tabla) {
  conexion.query("SELECT * FROM " + tabla, function (err, results) {
    if (err) throw err;
    console.log(results);
    return results;
  });
}

module.exports = { getAll };
