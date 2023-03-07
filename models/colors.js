'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Colors.init({
    color: DataTypes.STRING,
    nameColorEng: DataTypes.STRING,
    DMC: DataTypes.STRING,
    nameColorRu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Colors',
    timestamps: false
  });
  return Colors;
};