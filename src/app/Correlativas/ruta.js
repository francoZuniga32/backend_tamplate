const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.post('/', controlador.crear);
ruta.put('/:id', controlador.update);

ruta.get("/correlativas/:id", controlador.correlativa);
ruta.get('/necesarias/:id', controlador.nececesaria);

module.exports = ruta;