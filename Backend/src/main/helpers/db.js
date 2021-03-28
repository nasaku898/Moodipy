const mysql = require('mysql2');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = require("../config/config");

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
