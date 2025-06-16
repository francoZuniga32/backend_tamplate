const ruta = require('express').Router();

const auth = require('./_auth');
const register = require('./_register');
const controlador = require('./controlador');

ruta.post('/', controlador.auth);
ruta.post('/registrar', controlador.register);

module.exports = ruta;
