// seeders/demo-emi-seed.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Emis', [
      {
        description: 'MBA Course',
        courseName: 'Master of Business Administration',
        fees: 15000.00,
        loanAmount: 12000.00,
        tenure: 24,
        installmentInMonth: 500.00,
        totalInterest: 2000.00,
        universityId: 11, // Set to the ID of the associated university
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'B.Tech Course',
        courseName: 'Bachelor of Technology',
        fees: 10000.00,
        loanAmount: 8000.00,
        tenure: 36,
        installmentInMonth: 300.00,
        totalInterest: 1500.00,
        universityId: 12, // Set to the ID of the associated university
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more entries as needed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Emis', null, {});
  }
};
