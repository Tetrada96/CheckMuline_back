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
    name_color_eng: DataTypes.STRING,
    dmc: DataTypes.STRING,
    name_color_ru: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'colors',
    tableName: 'colors',
    timestamps: false,
    underscored: true,
  });
  return Colors;
};