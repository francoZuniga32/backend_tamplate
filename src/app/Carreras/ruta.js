const ruta = require('express').Router();
const controlador = require('./controlador');

const validador = require('./validador');
const middlewareValidador = require('../../middleware/validador');

ruta.post('/', middlewareValidador(validador.carrera), controlador.crear);

module.exports = ruta;