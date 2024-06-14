const express = require("express");
const app = express();
const port = 3000 || 8080 || process.env.PORT;
const rutas = require("./src/routes/mainRoutes");
const override = require("method-override");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(override("_metodo"));
app.use("/", rutas);

app.listen(port, () => console.log(`funcionando en el puerto:${port}`));
