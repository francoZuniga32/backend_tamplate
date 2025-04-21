# Subida de archivos

Usaremos multer para subir los archivos en este template.

La filosofia es la siguiente:
- los archivos son subidos a la carpeta publica que son accedidos desde http://localhost:3000/public/carpeta/id/archivo ej: http://localhost:3000/public/imagen/1/579204952ee59797ac24822ce3ab7f4e6b0541c6.png
- los archivos pueden ser colocados en diferentes carpetas pero siempre en la carpeta public.
- los archivos tienen que ir dentro de una carpeta que los identifique por eso pasamos el id. esto es comun cuando adjuntamos imagenes con algun tipo de entidad ej:
  - clientes/1/dni.png
  - facturas/23/dni.png

## Configuracion 

Si necesitamos crear un nuevo endpoint tenemos que hacer lo siguiente:

1. Crear la carpeta correspondiente en la carpeta public:
```text
|_ public
    |_ facturas
```
2. Agregamos la ruta en la funcion de directorios
`controlador.js`
```js
...
function directorio(tipo, id) {
  var retorno = "";
  switch (tipo) {
    case "facturas":
      retorno = `../../public/facturas/${id}`;
      break;
  }

  return retorno;
}
...
```
> En este switch agregaremos los diferentes carpetas a donde queremos cargar los archivos
> ademas de poder personalizar las rutas dentro de esta carpeta

3. Ahora agregamos el ep correpondiente
`controlador.js`

```js
...
controlador.facturas = async (req, res) => {
  try {
    subirArchivo("factura", [".pdf"], "factura", req.params.id)(
        req,
        res,
        async (err) => {
          if (err) {
            console.log(err);
          }
          res.status(200).json({file: req.file.filename});
        }
      );
  } catch (err) {
    res.status(401).send(err);
  }
};
...
```

`ruta.js`
```js
const ruta = require('express').Router();
const controlador = require('./controlador');

ruta.post('/factura/:id', controlador.facturas);

module.exports = ruta;

```

4. Para poder probar esto tenemos que tener una consulta post a `/archivo/factura/2` y con un body multipar-form con un tip de valor factura y un archivo pdf.

```js
const url = 'http://localhost:3000/archivo/factura/1';
const form = new FormData();
form.append('factura', '/home/usaurio/Descargas/factura_20250421_B.pdf');

const options = {method: 'POST'};

options.body = form;

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```
