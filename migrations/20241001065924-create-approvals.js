'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Approvals', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      universityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Universities',
          key: 'id',
        },
        onDelete: 'CASCADE', // Optional, to delete approvals if the university is deleted
      },
      img: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Approvals');
  }
};
