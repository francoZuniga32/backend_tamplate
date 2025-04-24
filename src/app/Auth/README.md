# Auth - OAuth
Tenemos soporte a diferentes estrategias de autenticacion por medio se servicios externos, uno de esos servicios es github. 

para poder autenticarnos tenemos que acceder a la ruta http://localhost:3000/auth/github
esto nos pedira nuestro usuario de github y nos dejara ingresar a la aplicacion (generara el token)

El token generado estara en las cookies del navegador (por que de esta manera podemos cambiar a que pagina del frontend redireccionaremos).
