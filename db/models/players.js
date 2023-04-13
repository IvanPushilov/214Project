'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
   
    static associate({Game}) {
      this.hasMany(Game, {foreignKey: 'player_id' });
    }
  }
  Players.init({
    player_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Players',
  });
  return Players;
};