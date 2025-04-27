const sequelize = require("../database/index");
const { DataTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const Usuario = require("../database/models/usuarios")(sequelize, DataTypes);

const roles = ['boludo'];

const auth = async(req, res, next) => {
    if (req.headers["access-token"]) {
        try {
            let usuario = jwt.verify(req.headers["access-token"], process.env.CLAVE).usuario;

            var row = await Usuario.findOne({
                where: {
                    id: usuario.id,
                },
            });
            console.log(usuario);
            if (row && roles.includes(usuario.rol)) {
                next();
            } else {
                res.status(203).json({ mensaje: "el usuario no esta registrado" });
            }
        } catch (error) {
            console.log(error);
            res.status(401).send({ err: error });
        }
    } else {
        res.status(203).send({ mensaje: "no esta provisto el token" });
    }
};

module.exports = auth;