'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
  
    static associate(models) {
      this.belongsTo(models.Player, {foreignKey: 'player_id' });
      this.belongsTo(models.Theme, {foreignKey: 'theme_id' });     
    }
  }
  Game.init({
    players_id: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER,
    true: DataTypes.INTEGER,
    false: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};