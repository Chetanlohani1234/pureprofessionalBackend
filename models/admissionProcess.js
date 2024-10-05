// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const AdmissionProcess = sequelize.define('AdmissionProcess', {
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     steps: {
//       type: DataTypes.JSON, // Use JSONB for storing an array of steps
//       allowNull: false,
//     },
//     universityId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Universities', // Reference to the Universities table
//         key: 'id',
//       }
//     }
//   }, {});

//   AdmissionProcess.associate = function(models) {
//     // AdmissionProcess belongs to University
//     AdmissionProcess.belongsTo(models.University, { foreignKey: 'universityId' });
//   };

//   return AdmissionProcess;
// };

// models/AdmissionProcess.js
module.exports = (sequelize, DataTypes) => {
  const AdmissionProcess = sequelize.define('AdmissionProcess', {
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
      steps: {
          type: DataTypes.JSON, // Store array of strings as JSON
      },
  });

  return AdmissionProcess;
};
