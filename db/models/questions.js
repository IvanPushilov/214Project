'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
   
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: 'theme_id' });
    }
  }
  Questions.init({
    theme_id: { 
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references:{
      model: 'Themes',
      key: 'id',
    }
    },
    questions: {
    allowNull: false,
    unique: true,
    type: DataTypes.TEXT
    },
    answers: {
    allowNull: false,
    unique: true,
    type: DataTypes.TEXT
  }
  }, 
  {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};