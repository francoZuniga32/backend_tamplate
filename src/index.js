const express = require("express");
const sequelize = require("./database/index");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

require('dotenv').config();
/**
 * Configuraciones, y CORS
 */
path.basename(__dirname);
const app = express();
app.set("PORT", process.env.PORT);
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("key", process.env.CLAVE);
app.set("public", path.join(__dirname, "public"));
app.use("/static", express.static(app.get("public")));

//middlewares 
//app.use("/instrumental/create", require("./middleware/authvendedor"));

app.use('/auth', require('./app/Auth/ruta'));

app.listen(app.get("PORT"), () => {
    sequelize
        .authenticate()
        .then(() => {
	console.log(`AdminJS started on http://localhost:${process.env.PORT}`)
            console.log("se conecto con exito!!");
        })
        .catch((err) => {
            console.log(err);
        });
    console.log("listen to port " + app.get("PORT"));
});
