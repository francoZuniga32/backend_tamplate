# Template backend

Este proyecto pretende proponer un template simple de api rest simple de implementar y mofificar. Sea libre de usarlo si gusta las siguientes funcionalidades son las que se pretenden desarrollar, estara marcado con un check si ya esta disponible.

- [x] ORM sequelize para poder consultar a una base de datos (usando sqlite3)
- [x] API de autenticacion de usuario
  - [x] Registro de usuario
  - [x] Autenticacion de usuario
- [x] Json Web Token para autenticar rutas
  - [x] Permisos por EP.
- [x] API de carga de archivos (como esta retorna el file name podemos reconstruir la ruta)
- [ ] API de carga de archivos segura ( sin usar static() y validando con tokens ).
- [x] Middleware para validar esquemas de datos en el body.
- [ ] Ejemplos de uso de sequelize.
  - [x] Insercion
  - [x] Actualizacion
  - [x] Eliminacion
  - [x] Consulta
  - [x] Consulta N:1 N:M
  - [ ] Documentacion de sequelize
- [ ] OAUTH con otros servicios (google, facebook, etc)
  - [x] Google
  - [x] Github
  - [ ] Distingir entre datos de usuario (nombre ,etc) y la estrategia usada
- [ ] Envio de emails
  - [ ] Template html.
  - [ ] Validarion con email.
  - [ ] Recuperacion de contraseña.
- [ ] Feature Flags - poder deshabilitar APIS en caso de que no se las requiera
  - [ ] Configurar un archivo json o .env para las diferentes funciones habilitadas-deshabilitadas.
- [ ] Dockerfile para poder desplegarlo sensillamente
- [ ] Dockercompose para poder levantar los servicios  

No prometo tenerlo listo al corto plazo, pero si dedicarle tiempo para poder finalizarlo.
Tengo el presentimiento de que este proyecto crecera mucho, espero que pueda serguir siendo util en el futuro 😵‍💫.

## Instalacion

Puedes instalar todo lo necesario haciendo `npm i` para esto tiene que tener instalado la ultima version de nodejs, y de npm.
Luego puede ejecutar el comando `npm run dev` y modificar tu app a tu gusto.

## Filosofia

La filosofia de este repositorio es que el codigo sea lo minimo e indispensable para que se pueda comenzar a desarrollar una api rest y esto es:
- uso de una base de datos usando un orm
- autenticacion por parte de agentes externos (app webs, app moviles, bots, ia, etc).
- permitir limitar el acceso de origenes determinados (CORS).
- poder relizar la carga de archivos y su visualizacion desde diferentes aplicaciones (app web y moviles).
- autenticacion con paginas externas (google, facebook, github, etc).

Podriamos tambien agregar la generacion de reportes y demas pero esto se me hace demaciadas funcionalidades a una api rest. Son cosas que se pueden desarrollar desde una app web y o movil (cosa que no veo necesaria) y lo unico que hacen es complejisar un codigo que tiene que ser simplemente el paso intermedio entre la parte visual y la base de datos siguiente el patron MVC (Modelo Vista Controlador) enfocando la API REST en el controlador. 

Si crees que este repositorio sirve como plantilla y quieres extenderlo mas puedes hacer un fork, y extenderlo como te plazca (es lo bonito del codiglo libre), espero que esto te sirva en tus proyectos o trabajo.

Abrazos 😘.
 
