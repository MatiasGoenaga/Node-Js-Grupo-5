const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "sql10.freesqldatabase.com",
  user: "sql10714780",
  password: "yQqq1Qh2qL",
  database: "sql10714780",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  conn: pool.promise(),
};
