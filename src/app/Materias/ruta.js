const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.get('/', controlador.todas );
ruta.get('/:id', controlador.una);
ruta.post('/', controlador.crear);
ruta.delete('/:id', controlador.eliminar);
ruta.put('/:id', controlador.actualizar);

module.exports = ruta;

