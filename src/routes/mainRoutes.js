const express = require("express");
const router = express.Router();
const controladores = require("../controllers/mainController");
const auth = require("./../config/auth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/viajesgrupales", auth, controladores.getListado);
router.post(
  "/viajesgrupales",
  upload.single("archivo"),
  controladores.crearRegistro
);
router.get("/modificar/:ID", controladores.getModificar);
router.put("/modificar", controladores.actualizar);
router.delete("/viajesgrupales", controladores.eliminar);

module.exports = router;
