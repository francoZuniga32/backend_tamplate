'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Correlativa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Correlativa.init({
    idNecesaria: DataTypes.INTEGER,
    idMateria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Correlativa',
  });
  return Correlativa;
};