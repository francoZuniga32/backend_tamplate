const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.post('/html', controlador.html);
ruta.post('/text', controlador.text);

module.exports = ruta;