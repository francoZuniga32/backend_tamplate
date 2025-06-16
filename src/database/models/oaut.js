'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OAut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OAut.init({
    email: DataTypes.STRING,
    estrategia: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OAut',
  });
  return OAut;
};