const jwt = require("jsonwebtoken");
require('dotenv').config();

const controlador = {};

controlador.authCallbackGithub = async(req, res) => {
    let token = jwt.sign({ usuario: req.body.user }, process.env.CLAVE, {expiresIn: "3h",});
    res.cookie('jwt', token);
    res.redirect(process.env.FRONT_POST_LOGIN_URL);
}

module.exports = controlador;