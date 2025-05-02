const express = require("express");
const sequelize = require("./database/index");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');

require('dotenv').config();
/**
 * Configuraciones, y CORS
 */
path.basename(__dirname);
const app = express();

app.set("PORT", process.env.PORT);

app.use(cors());

app.use(session({
    secret: process.env.KEY, // puede ser una env var
    resave: false,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("key", process.env.CLAVE);
app.set("public", path.join(__dirname, "public"));

app.use("/public", express.static(app.get("public")));

//middlewares 
app.use("/prueba", require("./middleware/auth"));

app.use('/usuario', require('./app/Usuario/ruta'));

app.use('/prueba', require("./app/Prueba/ruta"));

app.use('/archivo', require('./app/Archivos/ruta'));
app.use('/auth', require('./app/Auth/ruta'));
app.use('/carrera', require('./app/Carreras/ruta'));
app.use('/materia', require("./app/Materias/ruta"));
app.use('/correlativas', require("./app/Correlativas/ruta"));
app.use('/email', require('./app/Email/ruta'));

app.listen(app.get("PORT"), () => {
    console.log("listen to port " + app.get("PORT"));
});
