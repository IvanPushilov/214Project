'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Themes extends Model {
    static associate({Question}) {
      this.hasMany(Question, {foreignKey: 'theme_id'});
    }
  }
  Themes.init({
    allowNull: false,
    unique: true,
    theme: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Themes',
  });
  return Themes;
};