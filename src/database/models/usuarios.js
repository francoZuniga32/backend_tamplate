"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {}
  Usuarios.init(
    {
      nombreusuario: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      contrasenia: { type: DataTypes.STRING },
      foto: { type: DataTypes.STRING },
      rol: {type: DataTypes.STRING},
      token: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
      }
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );

  return Usuarios;
}
