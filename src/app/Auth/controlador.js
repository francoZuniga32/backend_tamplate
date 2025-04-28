const jwt = require("jsonwebtoken");
require('dotenv').config();

const controlador = {};

controlador.authCallbackGithub = async(req, res) => {
    let token = jwt.sign({ usuario: req.body.user }, process.env.CLAVE, {expiresIn: "3h",});
    res.cookie('jwt', token);
    res.redirect(process.env.FRONT_POST_LOGIN_URL);
}

controlador.authCallbackGoogle = async(req, res) => {
    let token = jwt.sign({ usuario: req.user }, process.env.CLAVE, {expiresIn: "3h",});
    res.cookie('jwt', token,{
        httpOnly: true, // si quieres leerla desde JS (no recomendado para JWTs)
        sameSite: 'None' // para permitir cross-site cookies
      });
    res.redirect(process.env.FRONT_POST_LOGIN_URL);
}


module.exports = controlador;