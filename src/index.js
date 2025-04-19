const express = require("express");
const sequelize = require("./database/index");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

require('dotenv').config();
/**
 * Configuraciones, y CORS
 */
path.basename(__dirname);
const app = express();
app.set("PORT", process.env.PORT);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("key", process.env.CLAVE);
app.set("public", path.join(__dirname, "public"));
app.use("/static", express.static(app.get("public")));

//middlewares 
app.use("/prueba/", require("./middleware/auth"));

app.use('/usuario', require('./app/Usuario/ruta'));
app.use('/prueba', require("./app/Prueba/ruta"));

app.listen(app.get("PORT"), () => {
    console.log("listen to port " + app.get("PORT"));
});
