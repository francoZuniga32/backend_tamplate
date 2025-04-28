const controlador = {};
const sequelize = require("../../database/index");
const { DataTypes } = require('sequelize');
const Correlativas = require('../../database/models/correlativa')(sequelize, DataTypes);
const Materia = require('../../database/models/materia')(sequelize, DataTypes);

Materia.belongsToMany(Materia, {as: 'tieneCorrelativas', through: 'Correlativas', foreignKey: 'idNecesaria', otherKey: 'idMateria'});
Materia.belongsToMany(Materia, {as: 'tieneNecesarias', through: 'Correlativas', foreignKey: 'idMateria', otherKey: 'idNecesaria'});

controlador.crear = async(req, res)=>{
    let {idNecesaria, idMateria} = req.body;
    let correlativa = await Correlativas.create({
        idMateria: idMateria,
        idNecesaria: idNecesaria
    });

    res.send(correlativa);
}

controlador.update = async(req, res)=>{
    let { idNecesaria, idMateria } = req.body;

    let correlativa = await Correlativas.update({
        idMateria: idMateria,
        idNecesaria: idNecesaria
    },{
        where:{
            id: parseInt(req.params.id)
        }
    });

    res.send(correlativa);
}

controlador.correlativa = async(req, res)=>{
    let materia = await Materia.findOne({
        where:{
            id: parseInt(req.params.id)
        },
        include:[{
            model: Materia,
            as: 'tieneCorrelativas',
            attributes: ['id', 'nombre', 'descripcion', 'anio']
        }]
    });
    res.send(materia);
}

controlador.nececesaria = async(req, res)=>{
    let materia = await Materia.findOne({
        where:{
            id: parseInt(req.params.id)
        },
        include:[{
            model: Materia,
            as: 'tieneNecesarias',
            attributes: ['id', 'nombre', 'descripcion', 'anio']
        }]
    });
    res.send(materia);
}

module.exports = controlador;