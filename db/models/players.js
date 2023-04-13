'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
   
    static associate({Question}) {
      this.belongsTo(Question, {foreignKey: 'question_id' });
    }
  }
  Players.init({
    questions_id: DataTypes.INTEGER,
    player_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    players_answers: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Players',
  });
  return Players;
};