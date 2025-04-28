const ruta = require('express').Router();
const controlador = require('./controlador');

const validador = require('./validador');
const middlewareValidador = require('../../middleware/validador');

ruta.get('/', controlador.todas);
ruta.get('/:id', controlador.una);
ruta.post('/', middlewareValidador(validador.carrera), controlador.crear);
ruta.delete('/:id', controlador.eliminar);
ruta.put('/:id', middlewareValidador(validador.carrera), controlador.actualizar);

module.exports = ruta;