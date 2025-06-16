const controlador = {};
const jwt = require("jsonwebtoken");
const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');
const Login = require('../../database/models/login')(sequelize, DataTypes);
const Auth = require('../../database/models/oaut')(sequelize, DataTypes);
const Usuarios = require('../../database/models/usuarios')(sequelize, DataTypes);

Login.hasOne(Usuarios, {as: 'tieneUsuario', foreignKey: 'id', sourceKey: 'idUsuario'});

controlador.register = async(req, res)=>{
    let { email, contrasenia } = req.body;
    let registro = await Login.findOne({
        where:{
            email: email
        }
    });

    if(registro){
        res.status(401).send({err: "ya hay un usuario registrado."});
    }else{
        usaurio = await Usuarios.create({
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        registro = await Login.create({
            email: email,
            contrasenia: contrasenia,
            idUsuario: usaurio.getDataValue('id')
        });

        res.send();
    }
}

controlador.auth = async(req, res)=>{
    let { email, contrasenia} = req.body;

    let registro = await Login.findOne({
        where:{
            email: email,
            contrasenia: contrasenia
        },
        include:[
            {
                as: 'tieneUsuario',
                model: Usuarios
            }
        ]
    });

    if(registro){
        let token = jwt.sign({ usuario: registro }, process.env.CLAVE, {expiresIn: "3h",});
        res.send({token: token});
    }else{
        res.status(203).send({err: "no existe un usuario registrado"});
    }
}

module.exports = controlador;