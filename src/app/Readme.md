# App

El patron usando es de funcionalidad donde cada carpeta representa una entidad o funcionalidad diferenciada. Esto lo realizo de esta manera por que cuando usamos el patron MVC o en este caso MC (Modelo Controlador) podemos llevar a tener carpetas con una cantidad enorme de archivos, y eso puede genearar que modificar una funcionalidad sea muy tedioso (por que tenes que buscar dentro de esa carpeta un solo ejemplo de codigo).

## Validaciones
Usamos joi para poder validar mediante un middleware que el body tenga cierta estructura. De forma que tiene que crear un archivo `validador.js` que retorne un objeto de tipo `Joi.object()` que contenga la estructura del body.

## Ruta
Usamos un archivo ruta que es llamado desde el `index.js` mediante `app.use('/ruta', require('./app/funcionalidad/ruta.js'))` y ahi definimos los `get`, `post`, `delete`, y `put`. 

## Controlador
Usamos el controlador donde definimos las rutas o las funciones para poder hacer operaciones con el aca es donde hacemos uso extensimo de sequelize.

