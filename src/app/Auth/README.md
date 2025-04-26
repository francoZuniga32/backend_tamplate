# Auth - OAuth

Contamos con soporte para diferentes estrategias de autenticación mediante servicios externos.

Usaremos los siguientes métodos de autenticación externos:
- GitHub  
- Google

## GitHub

Para autenticarnos, debemos acceder a la ruta:  
`http://localhost:3000/auth/github`

Esto nos pedirá iniciar sesión con nuestro usuario de GitHub y luego redirigirá a:  
`http://localhost:3000/auth/github/callback`,  
donde se generará un token JWT que podrá ser utilizado desde cualquier aplicación.

El token generado estará disponible en las cookies del navegador, ya que se realiza una redirección a una ruta del frontend configurada mediante las variables de entorno.

## Google

Para usar autenticación con Google, es necesario obtener el `client_id` y el `client_secret`. Para ello, accede al siguiente enlace:  
[https://console.cloud.google.com/auth/clients](https://console.cloud.google.com/auth/clients)  
y luego agrega estos valores al archivo `.env`.

Una vez configurado, puedes autenticarte accediendo a la ruta:  
`http://localhost:3000/auth/google`

Esto solicitará nuestro usuario de Google y, al finalizar, redirigirá a:  
`http://localhost:3000/auth/google/callback`,  
donde se generará el token JWT para ser utilizado desde cualquier aplicación.

El token también se almacenará en las cookies del navegador.

> **Importante:** Asegúrate de que tu aplicación web no sobrescriba las cookies del navegador, de lo contrario, no tendrás acceso al JWT.
