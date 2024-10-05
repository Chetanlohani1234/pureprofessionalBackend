// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const University = sequelize.define('University', {

//       name:DataTypes.STRING,
//       logo: DataTypes.STRING
//   }, {});
//   University.associate = function(models) {
//     // A university has many about sections
//     University.hasMany(models.About, { foreignKey: 'universityId' });
//     University.hasMany(models.Approval,{ foreignKey: 'universityId' });
//     University.hasMany(models.Emi, { foreignKey: 'universityId'});
//     University.hasMany(models.AdmissionProcess, { foreignKey: 'universityId'});
//   };
//   return University;
// };


// models/University.js
module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define('University', {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      logo: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  });

  University.associate = (models) => {
      University.hasMany(models.About, { foreignKey: 'universityId', as: 'abouts' });
      University.hasMany(models.Approval, { foreignKey: 'universityId', as: 'approvals' });
      University.hasMany(models.Emi, { foreignKey: 'universityId', as: 'emis' });
      University.hasMany(models.AdmissionProcess, { foreignKey: 'universityId', as: 'admissionProcesses' });
  };

  return University;
};
