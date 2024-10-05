// // models/emi.js
// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Emi = sequelize.define('Emi', {
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     courseName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     fees: {
//       type: DataTypes.DECIMAL(10, 2), // Handles fee amounts with precision
//       allowNull: false,
//     },
//     loanAmount: {
//       type: DataTypes.DECIMAL(10, 2), // Amount of loan
//       allowNull: false,
//     },
//     tenure: {
//       type: DataTypes.INTEGER, // Tenure in months
//       allowNull: false,
//     },
//     installmentInMonth: {
//       type: DataTypes.DECIMAL(10, 2), // Installment amount per month
//       allowNull: false,
//     },
//     totalInterest: {
//       type: DataTypes.DECIMAL(10, 2), // Total interest amount
//       allowNull: false,
//     },
//     universityId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Universities', // Reference the Universities table
//         key: 'id',
//       }
//     }
//   }, {});

//   Emi.associate = function(models) {
//     // Establish association: Emi belongs to University
//     Emi.belongsTo(models.University, { foreignKey: 'universityId', as: 'University' });
//   };

//   return Emi;
// };

// models/Emi.js
module.exports = (sequelize, DataTypes) => {
  const Emi = sequelize.define('Emi', {
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
      loanAmount: {
          type: DataTypes.STRING,
      },
      tenure: {
          type: DataTypes.INTEGER,
      },
      installmentInMonth: {
          type: DataTypes.STRING,
      },
      totalInterest: {
          type: DataTypes.FLOAT,
      },
  });

  return Emi;
};
