const { conn } = require("../db/dbconnect");

module.exports = {
  getListado: async (req, res) => {
    try {
      const [registros] = await conn.query("SELECT * from Destinos");
      res.json(registros);
    } catch (error) {
      throw error;
    } finally {
      conn.releaseConnection();
    }
  },
};
