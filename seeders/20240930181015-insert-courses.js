'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', [
      {
        name: 'Introduction to JavaScript',
        description: 'Learn the basics of JavaScript, the most popular programming language for web development.',
        duration: '4 weeks',
        fees: 100.00,
        prerequisites: 'Basic knowledge of HTML and CSS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Advanced React.js',
        description: 'Deep dive into React.js concepts such as hooks, context API, and building large-scale applications.',
        duration: '6 weeks',
        fees: 200.00,
        prerequisites: 'Basic knowledge of React.js and JavaScript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Node.js and Express',
        description: 'Learn how to build backend services with Node.js and Express framework.',
        duration: '5 weeks',
        fees: 150.00,
        prerequisites: 'Basic knowledge of JavaScript',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
