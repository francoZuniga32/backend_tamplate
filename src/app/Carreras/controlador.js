const controlador = {};
const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');
const Carrera = require('../../database/models/carrera')(sequelize, DataTypes);
const Materias = require('../../database/models/materia')(sequelize, DataTypes);

Carrera.hasMany(Materias,{as: 'tieneMaterias', foreignKey: 'idCarrera', sourceKey: 'id'});

controlador.todas = async(req, res)=>{
    res.send(await Carrera.findAll());
}

controlador.una = async(req, res)=>{
    res.send(await Carrera.findOne({
        where:{
            id: parseInt(req.params.id)
        },
        include:[
            {
                model: Materias,
                as: 'tieneMaterias'
            }
        ]
    }));
}

controlador.crear = async(req, res)=>{
    let { nombre, descripcion, plan } = req.body;

    let materia = await Carrera.create({
        nombre: nombre,
        descripcion: descripcion,
        plan: plan
    });

    res.send(materia);
}

controlador.actualizar = async(req, res)=>{
    let { nombre, descripcion, plan } = req.body;

    let carrera = await Carrera.update({
        nombre: nombre,
        descripcion: descripcion,
        plan: plan
    },{
        where:{
            id: parseInt(req.params.id)
        }
    });

    res.send(carrera);
}

controlador.eliminar = async(req, res)=>{
    res.send(await Carrera.destroy({
        where:{
            id: parseInt(req.params.id)
        }
    }));

}

module.exports = controlador;