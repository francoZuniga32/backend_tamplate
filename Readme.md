# Template backend

Este proyecto pretende proponer un template simple de api rest simple de implementar y mofificar. Sea libre de usarlo si gusta las siguientes funcionalidades son las que se pretenden desarrollar, estara marcado con un check si ya esta disponible.

- [x] ORM sequelize para poder consultar a una base de datos (usando sqlite3)
- [x] API de autenticacion de usuario
  - [x] Registro de usuario
  - [x] Autenticacion de usuario
- [x] Json Web Token para autenticar rutas
- [ ] API de carga de archivos
- [ ] API de consulta de archivos
- [ ] OAUTH con otros servicios (google, facebook, etc)
- [ ] Feature Flags - poder deshabilitar APIS en caso de que no se las requiera
- [ ] Dockerfile para poder desplegarlo sensillamente
- [ ] Dockercompose para poder levantar los servicios  

No prometo tenerlo listo al corto plazo, pero si dedicarle tiempo para poder finalizarlo.
Tengo el presentimiento de que este proyecto crecera mucho, espero que pueda serguir siendo util en el futuro 😵‍💫.

## Instalacion

Puedes instalar todo lo necesario haciendo `npm i` para esto tiene que tener instalado la ultima version de nodejs, y de npm.
Luego puede ejecutar el comando `npm run dev` y modificar tu app a tu gusto.