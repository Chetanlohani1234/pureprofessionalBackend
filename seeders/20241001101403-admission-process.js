'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AdmissionProcesses', [
      {
        description: 'Postgraduate Admission Process',
        steps: JSON.stringify([
          'Step 1: Submit Application',
          'Step 2: Entrance Exam',
          'Step 3: Interview',
          'Step 4: Admission Decision'
        ]),
        universityId: 12, // Use a valid university ID here
        createdAt: new Date(),
        updatedAt: new Date()
      },

        {
          description: 'Undergraduate Admission Process',
          steps: JSON.stringify([
            'Step 1: Submit Application',
            'Step 2: Entrance Exam',
            'Step 3: Interview',
            'Step 4: Admission Decision'
          ]),
          universityId: 11, // Use a valid university ID here
          createdAt: new Date(),
          updatedAt: new Date()
        },
      // Add more admission processes as needed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AdmissionProcesses', null, {});
  }
};
