# Envío de Emails por SMTP

Este proyecto permite el envío de correos electrónicos mediante el protocolo SMTP. Para que funcione correctamente, debe configurar las variables de entorno correspondientes en un archivo `.env`.

## Variables de entorno necesarias

```env
SMTP_SERVER=servidor_smtp        # Dirección del servidor SMTP
SMTP_PORT=puerto_smtp            # Puerto del servidor SMTP (normalmente 587 para TLS)
MAIL_USERNAME=correo@dominio.com # Dirección de correo desde la cual se enviarán los emails (recomendado: noreply@dominio.com)
SMTP_PASS=contraseña             # Contraseña del servicio (puede ser una contraseña de aplicación)
```

## Configuración para SMTP con Gmail

Si desea usar Gmail como proveedor SMTP, utilice las siguientes configuraciones básicas:

```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
```

Luego, configure `MAIL_USERNAME` con su dirección de correo personal.

> ⚠️ **Importante:** No utilice su contraseña habitual de Gmail. Deberá generar una **contraseña de aplicación** para que funcione correctamente.

### Pasos para obtener una contraseña de aplicación:

1. Inicie sesión en [myaccount.google.com](https://myaccount.google.com).
2. Active la **verificación en dos pasos**.
3. Ingrese a [Contraseñas de aplicaciones](https://myaccount.google.com/apppasswords).
4. Genere una nueva contraseña para este proyecto.
5. Utilice la contraseña generada en la variable `SMTP_PASS` de su archivo `.env`.

Una vez configurado todo, podrá enviar correos utilizando su cuenta de Gmail de forma segura.
