const controlador = {};
const nodemailer = require("nodemailer");

require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.STMP_PASS
    }
});

controlador.text = async(req, res)=>{
    let { mensaje, subject, to } = req.body;
    
    var mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: to.join(","),
        subject: subject,
        text: mensaje,
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error al enviar correo:', error);
        res.status(400).send(error);
    }
    console.log('Correo enviado:', info.response);
        res.send(info);
    });
}

controlador.html = async (req, res) => {
    let { mensaje, subject, to } = req.body;
    
    var mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: to.join(","),
        subject: subject,
        html: mensaje,
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error al enviar correo:', error);
        res.status(400).send(error);
    }
    console.log('Correo enviado:', info.response);
    res.send(info);
    });
};

module.exports = controlador;
