const ruta = require('express').Router();

const auth = require('./_auth');
const register = require('./_register');

ruta.post('/', auth);
ruta.post('/registrar', register);

module.exports = ruta;
