const controlador = {};
const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');
const Materias = require('../../database/models/materia')(sequelize, DataTypes);
const Carreras = require('../../database/models/carrera')(sequelize, DataTypes);

Materias.hasOne(Carreras,{as: 'tieneCarrera', foreignKey: 'id', sourceKey: 'idCarrera'});

controlador.todas = async(req, res)=>{
    res.send(await Materias.findAll());
}

controlador.una = async(req, res)=>{
    res.send(await Materias.findOne({
        where:{
            id: parseInt(req.params.id)
        },
        include:[
            {
                as: 'tieneCarrera',
                model: Carreras
            }
        ]
    }));
}

controlador.crear = async(req, res)=>{
    let { nombre, descripcion, anio, idCarrera } = req.body;

    let materia = await Materias.create({
        nombre: nombre,
        descripcion: descripcion,
        anio: anio,
        idCarrera: idCarrera
    });

    res.send(materia);
}

controlador.actualizar = async(req, res)=>{
    let { nombre, descripcion, anio, idCarrera } = req.body;

    let materia = await Materias.update({
        nombre: nombre,
        descripcion: descripcion,
        anio: anio,
        idCarrera: idCarrera
    },{
        where:{
            id: parseInt(req.params.id)
        }
    });

    res.send(materia);
}

controlador.eliminar = async(req, res)=>{
    await Materias.destroy({
        where:{
            id: parseInt(req.params.id)
        }
    })
    res.send();
}

module.exports = controlador;