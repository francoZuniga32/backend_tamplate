const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.post('/imagen/:id', controlador.imagen);

module.exports = ruta;