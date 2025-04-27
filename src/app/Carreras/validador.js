const validador = {};
const { Joi, validateBody } = require('express-joi-validations');

validador.carrera = Joi.object({
    nombre: Joi.string().required(),
    descripcion: Joi.string().required(),
    plan: Joi.string().required()
}),

module.exports = validador;