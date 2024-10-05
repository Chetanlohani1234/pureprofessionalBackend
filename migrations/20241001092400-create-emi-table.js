'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Emis', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fees: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      loanAmount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      tenure: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      installmentInMonth: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      totalInterest: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      universityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Universities',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Emis');
  }
};
