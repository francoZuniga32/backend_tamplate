
const jwt = require("jsonwebtoken");

const { DataTypes } = require("sequelize");
const sequelize = require("../../database/index");
const Usuario = require("../../database/models/usuarios")(sequelize, DataTypes);

module.exports = async (req, res) => {
  if (req.body.codigo) {
    try {
      const result = await sequelize.transaction(async (t) => {
        var idUsuario = jwt.verify(
          req.headers["access-token"],
          process.env.CLAVE
        ).usuario.id;
        var bloquedo = await Usuario.findOne(
          {
            attributes: ["validado"],
            where: {
              id: idUsuario,
            },
          },
          { transaction: t }
        );

        if (!bloquedo.getDataValue("validado")) {
          if (req.body.codigo == bloquedo.getDataValue("codigo")) {
            await Usuario.update(
              {
                validado: true,
              },
              {
                id: idUsuario,
              },
              { transaction: t }
            );

            res.status(200).send();
          } else {
            res.status(401).send({ err: "El codigo no es correcto." });
          }
        } else {
          res.status(401).send({ err: "El usuario ya esta validado." });
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res
      .status(401)
      .send({ err: "El codigo de validacion no fue proporcionado." });
  }
};
