const controlador = {};

const path = require("path");
const multer = require("multer");

const fs = require("fs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const sequelize = require("../../database/index");
const { DataTypes } = require("sequelize");

function subirArchivo(input, tipos, tipo, id){
  var storage = multer.diskStorage({
    destination: path.join(__dirname, directorio(tipo, id)),
    filename: (req, file, cb) => {
      var name = encriptfile(file.originalname);
      cb(null, name);
    },
  });
  //retornamos el 
  return multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      if (tipos.indexOf(ext) < 0) {
        return callback(new Error(`Only ${tipos.join(", ")} are allowed`));
      }
      callback(null, true);
    },
  }).single(input);
}

function directorio(tipo, id) {
  var retorno = "";
  switch (tipo) {
    case "imagen":
      retorno = `../../public/imagen/${id}`;
      break;
  }

  return retorno;
}

function encriptfile(filename) {
  return (
    crypto.createHash("sha1").update(filename).digest("hex") +
    "." +
    filename.split(".")[1]
  );
}

controlador.imagen = async (req, res) => {
  try {
    subirArchivo("imagen", [".png", ".jpeg", ".jpg"], "imagen", req.params.id)(
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

module.exports = controlador;
