'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      players_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Players',
          key: 'id',
        },
      },
      theme_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Themes',
          key: 'id',
        },
      },
      true: {
        type: Sequelize.INTEGER
      },
      false: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Games');
  }
};