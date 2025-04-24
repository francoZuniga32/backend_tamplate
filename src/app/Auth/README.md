# Auth - OAuth
Tenemos soporte a diferentes estrategias de autenticacion por medio se servicios externos, uno de esos servicios es github. 

Para poder autenticarnos tenemos que acceder a la ruta http://localhost:3000/auth/github
esto nos pedira nuestro usuario de github y luego redireccionara a http://localhost:3000/auth/github/callback donde generaremos el token jwt para poder ser usado desde cualquier aplicacion.

El token generado estara en las cookies del navegador ya que redireccionamos a una ruta de una web frontend configurada en las variables de entorno.
