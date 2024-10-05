'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Fetch universities to get their IDs for foreign key association
    const universities = await queryInterface.sequelize.query(
      `SELECT id FROM Universities WHERE name IN ('Harvard University', 'Stanford University');`
    );
    const universityRows = universities[0]; // First element contains the rows

    // Insert Approvals data
    await queryInterface.bulkInsert('Approvals', [
      {
        universityId: universityRows[0].id, // Harvard University
        img: JSON.stringify(['harvard_approval1.png', 'harvard_approval2.png']), // Images stored as JSON
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        universityId: universityRows[1].id, // Stanford University
        img: JSON.stringify(['stanford_approval1.png', 'stanford_approval2.png']),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

  },

  async down (queryInterface, Sequelize) {
    // Rollback seed data by deleting the inserted rows
    await queryInterface.bulkDelete('JobsAndInternships', null, {});
    await queryInterface.bulkDelete('Approvals', null, {});
  }
};
