const express = require("express");
const router = express.Router();
const controladores = require("../controllers/mainController");

router.get("/viajesgrupales", controladores.getListado);

module.exports = router;
