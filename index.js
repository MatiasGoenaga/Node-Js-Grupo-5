const express = require("express");
require("dotenv").config();
const app = express();
const rutasLogin = require("./src/routes/loginRoutes.js");
const port = 3000 || 8080 || process.env.PORT;
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
const rutas = require("./src/routes/mainRoutes");
const override = require("method-override");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(override("_metodo"));
app.use("/login", rutasLogin);
app.use("/", rutas);

app.listen(port, () => console.log(`funcionando en el puerto:${port}`));
