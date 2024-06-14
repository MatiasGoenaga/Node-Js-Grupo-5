const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "sql10.freesqldatabase.com",
  user: "sql10713596",
  password: "DU9D3fWR8e",
  database: "sql10713596",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  conn: pool.promise(),
};
