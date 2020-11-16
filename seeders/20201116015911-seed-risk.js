'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Risk', [
      {
      summary: 'Moderately high risk item',
      likelihood: 3,
      impact: 5,
      owner: 'Some user',
      team: 'A Team',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
      },
      {
      summary: 'Low risk item',
      likelihood: 1,
      impact: 1,
      owner: 'Another user',
      team: 'A Team',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
      },
      {
      summary: 'Moderate risk item',
      likelihood: 2,
      impact: 3,
      owner: 'Third user',
      team: 'B Team',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Risk', null, {})
  }
};
