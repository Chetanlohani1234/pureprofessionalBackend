// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const About = sequelize.define('About', {
//     universityId: DataTypes.INTEGER,
//     description: DataTypes.TEXT,
//     courseName: DataTypes.STRING,
//     fees: DataTypes.DECIMAL(10, 2),
//     duration: DataTypes.STRING
//   }, {});
//   About.associate = function(models) {
//     // About belongs to University
//     About.belongsTo(models.University, { foreignKey: 'universityId' });
//   };
//   return About;
// };


// models/About.js
module.exports = (sequelize, DataTypes) => {
  const About = sequelize.define('About', {
      description: {
          type: DataTypes.STRING,
      },
      universityId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'University',
            key: 'id'
        }
    },
      courseName: {
          type: DataTypes.STRING,
      },
      fees: {
          type: DataTypes.STRING,
      },
      duration: {
          type: DataTypes.STRING,
      },
  },{
    tableName:'about'
  });

  return About;
};
