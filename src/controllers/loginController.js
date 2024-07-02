const { conn } = require("../db/dbconnect");
const jwt = require("jsonwebtoken");
const crypt = require("bcryptjs");
const jwtconfig = require("./../config/jwtconfig.js");

module.exports = {
  crearRegistro: async (req, res) => {
    const { user, password } = req.body;
    const encriptado = await crypt.hash(password, 8);
    const [creado] = await conn.query(
      `INSERT INTO Users (user, password) VALUES (?,?);`,
      [user, encriptado]
    );
    setTimeout(function () {
      res.redirect("/login.html");
    }, 1000);
  },
  login: async (req, res) => {
    const { user, password } = req.body;
    const [[valido]] = await conn.query(
      `SELECT * FROM Users WHERE user = ?`,
      user
    );
    if (valido === undefined) {
      res.status(404).send("Usuario no encontrado");
    } else if (!(await crypt.compare(password, valido.password))) {
      res.status(401).send({ auth: false, token: null });
    } else {
      const token = jwt.sign({ id: valido.id }, jwtconfig.secretKey, {
        expiresIn: jwtconfig.tokenExpiresIn,
      });
      res.status(201).send({ auth: true, token });
    }
  },
};
