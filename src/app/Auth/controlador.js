const jwt = require("jsonwebtoken");
require('dotenv').config();

const {DataTypes, Model} = require('sequelize');
const sequelize = require('../../database/index');

const OAuth = require('../../database/models/oaut')(sequelize, DataTypes);
const Usuaurio = require('../../database/models/usuarios')(sequelize, DataTypes);

OAuth.hasOne(Usuaurio, { as: 'tieneUsuario', foreignKey: 'id', sourceKey: 'idUsuario' });

const controlador = {};

controlador.authCallbackGithub = async(req, res) => {

    console.log(req.user);
    /*
    let login = await OAuth.findOne({
        where:{
            email: req.user._json.login,
            estrategia: 'github'
        }
    });
    //en caso de no existir el registro
    if(!login){
        login = await OAuth.create({
            email: req.user._json.login,
            estrategia: 'github'
        });
    }
    */

    let token = jwt.sign({ usuario: req.body.user }, process.env.CLAVE, {expiresIn: "3h",});
    res.cookie('jwt', token);
    res.redirect(process.env.FRONT_POST_LOGIN_URL);
}

controlador.authCallbackGoogle = async(req, res) => {
    console.log(req.user);

    let auth = await OAuth.findOne({
        where:{
            email: req.user.emails[0].value,
            estrategia: 'google'
        },
        include:[
            {
                as: 'tieneUsuario',
                model: Usuaurio
            }
        ]
    });
    
    if(!auth){
        let usuario = await Usuaurio.create({
            nombreusuario: req.user.displayName,
        });

        auth = await OAuth.create({
            email: req.user.emails[0].value,
            estrategia: 'google',
            idUsaurio: usuario.getDataValue('id').value
        });

    }

    let token = jwt.sign({ usuario: auth }, process.env.CLAVE, {expiresIn: "3h",});

    res.cookie('jwt', token,{
        httpOnly: true, // si quieres leerla desde JS (no recomendado para JWTs)
        sameSite: 'None' // para permitir cross-site cookies
      });
    res.redirect(process.env.FRONT_POST_LOGIN_URL);
}


module.exports = controlador;