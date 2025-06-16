# Sequelize

## Configuraciones

tendremos que configurar el archivo config.json y el archivo index.js para que tome las configuraciones necesarias en nuestro caso usamos una base de datos sqlite.
el archivo que puede sufrir mas cambios es el de index.js por que tiene que cambiar toda la instancia de sequelize para las bases de datos mysql o mariadb.

es conveniente que configure un .env para poder levantar los datos desde variables de entorno.

## Migraciones

Para poder craer modelos y sus migraciones tendra que ejecutar `npx sequelize-cli model:generate --name Modelo --attributes nombre:string,puestoId:integer`, luego peude ejecutar `npx sequelize-cli db:migrate` esto corre todas las migraciones que no se han realizado (se genera una tabla con todas las migraciones realizadas en la base de datos ocnfigurada en config/config.json).

## Uso de modelos

Cuando queremos usar un modelo para poder realizar consutlas tendremos que llamarlo desde el controlador

```js

const {DataTypes} = require('sequelize');
const Modelo = require('../../database/models/modelo')(sequelize, DataTypes);
...
let data = await Modelo.findOne({
    where:{
        id: parseInt(<id>)
    }
});
...

```
puedes ver los diferentes operadores para el where en : https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
Podemos usar `findAll` para buscar un conjunto de valores del modelo (la tabla en cuestion).

### Consultas 

#### Buscar

```js
let data = await Modelo.findOne({
    where:{
        id: id
    }
});

let data = await Modelo.findAll({
    where:{
        id: id
    }
})
```

#### Eliminar

```js
await Modelo.destroy({
  where: {
    condicion: <condicion>,
  },
});
```

truncar la tabla (recomiendo usar una migracion para esto, o hacerlo desde el gestor de base de datos)

```js
await Modelo.destroy({
  truncate: true,
});
```

#### actualizar

```js
await Modelo.update(
  { dato: <datos> },
  {
    where: {
      condicion: <condicion>
    },
  },
);
```

### Relaciones 1:N

podemos relacionar modelos entre si

```js
const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');
const Modelo1 = require('../../database/models/modelo1')(sequelize, DataTypes);
const Modelo2 = require('../../database/models/modelo2')(sequelize, DataTypes);

Modelo1.hasMany(Modelo2,{as: 'tieneModelo2', foreignKey: 'keyForanea', sourceKey: 'id'});
...
let data = await Modelo1.findOne({
    where:{
        id: id
    },
    include:[
        {
            model: Modelo2,
            as: 'tieneModelo2'
        }
    ]
});

```

tenemos que relacionar la clave forenea a el id del segundo modelo. En este caso la relacion es de 1:N de Modelo1 a Modelo2.

### Relaciones N:N

podemos hacer relaciones N:N.
```js

const sequelize = require("../../database/index");
const { DataTypes } = require('sequelize');
const Modelo1 = require('../../database/models/modelo1')(sequelize, DataTypes);
const Modelo2 = require('../../database/models/modelo2')(sequelize, DataTypes);

Modelo1.belongsToMany(Modelo2, {as: 'tieneMuchos', through: 'tablaintermedia', foreignKey: 'idModelo1', otherKey: 'idModelo2'});

...

let data = await Modelo1.findAll({
    where: {
        id: id
    },
    includes:[
        {
            model: Modelo2,
            as: 'tieneMuchos'
        }
    ]
})

```
En este caso tablaintermedia tiene una columna que hace referencia a Modelo1, y otra haciendo referencia a Modelo2. De menera que traemos todas los Modelos 2 que esten relacionados con Modelo1 mediante la tablaintermedia.
