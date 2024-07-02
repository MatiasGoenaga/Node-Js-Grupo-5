const { conn } = require("../db/dbconnect");

module.exports = {
  getListado: async (req, res) => {
    try {
      const [registros] = await conn.query(
        "SELECT Destinos.ID, Destinos.nombre, Destinos.imagen, Destinos.precio, Paises.nombre_pais, Salidas.nombre_salidas FROM `Destinos` INNER JOIN Paises ON Paises.id = Destinos.id_pais INNER JOIN Salidas ON Salidas.id = Paises.id_salidas"
      );
      res.json(registros);
    } catch (error) {
      throw error;
    } finally {
      conn.releaseConnection();
    }
  },

  crearRegistro: async (req, res) => {
    const sql = `INSERT INTO Destinos (nombre, imagen, precio, id_pais) VALUES (?, ?, " ", ?);`;
    const creado = await conn.query(sql, [
      req.body.destino,
      req.file.filename,
      req.body.pais,
    ]);
    setTimeout(function () {
      res.redirect("/viajesgrupales.html");
    }, 1500);
  },

  getModificar: async (req, res) => {
    const [modificar] = await conn.query(
      "SELECT * from Destinos WHERE ID=?",
      req.params.ID
    );
    res.render("modificar", { registro: modificar[0] });
  },

  actualizar: async (req, res) => {
    const sql =
      "UPDATE Destinos SET nombre= ?, imagen= ?, precio= ?, id_pais= ? WHERE id= ?";
    const { idActualizar, destino, archivo, precio, pais } = req.body;
    const modificado = await conn.query(sql, [
      destino,
      archivo,
      precio,
      pais,
      idActualizar,
    ]);
    res.redirect("/viajesgrupales.html");
  },

  eliminar: async (req, res) => {
    const eliminado = await conn.query(
      `DELETE FROM Destinos WHERE ID=?`,
      req.body.idEliminar
    );
    setTimeout(function () {
      res.redirect("/viajesgrupales.html");
    }, 1500);
  },
};
