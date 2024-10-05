// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     // Insert University data
//     await queryInterface.bulkInsert('Universities', [
//       {
//         name: 'Harvard University',
//         logo: 'harvard_logo.png',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Stanford University',
//         logo: 'stanford_logo.png',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ], {});

//     // Fetch the universities that were just inserted
//     const universities = await queryInterface.sequelize.query(
//       `SELECT id FROM Universities WHERE name IN ('Harvard University', 'Stanford University');`
//     );

//     const universityRows = universities[0]; // First element contains the rows

//     // Insert About data linked to universities
//     return await queryInterface.bulkInsert('Abouts', [
//       {
//         universityId: universityRows[0].id, // Harvard University
//         description: 'Top-tier university with excellent computer science program.',
//         courseName: 'Computer Science',
//         fees: 45000.00,
//         duration: '4 years',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         universityId: universityRows[0].id, // Harvard University
//         description: 'Economics program focusing on global financial trends.',
//         courseName: 'Economics',
//         fees: 40000.00,
//         duration: '4 years',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         universityId: universityRows[1].id, // Stanford University
//         description: 'Renowned for its research and innovation in AI.',
//         courseName: 'Artificial Intelligence',
//         fees: 46000.00,
//         duration: '3 years',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         universityId: universityRows[1].id, // Stanford University
//         description: 'Entrepreneurship and startup culture are key focuses.',
//         courseName: 'Business Management',
//         fees: 50000.00,
//         duration: '2 years',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ]);
//   },

//   down: async (queryInterface, Sequelize) => {
//     // Rollback seed data by deleting the inserted rows
//     await queryInterface.bulkDelete('Abouts', null, {});
//     await queryInterface.bulkDelete('Universities', null, {});
//   }
// };
