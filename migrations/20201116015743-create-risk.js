'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Risks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.STRING
      },
      likelihood: {
        type: Sequelize.NUMBER
      },
      impact: {
        type: Sequelize.NUMBER
      },
      owner: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Risks');
  }
};