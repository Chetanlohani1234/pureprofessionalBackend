// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Approvals extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Approvals.init({
//     universityId: DataTypes.INTEGER,
//     img: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Approvals',
//   });
//   return Approvals;
// };

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Approval = sequelize.define('Approval', {
//     universityId: DataTypes.INTEGER,
//     img: DataTypes.TEXT,


//   }, {});
//   Approval.associate = function(models) {
//     // About belongs to University
//     Approval.belongsTo(models.University, { foreignKey: 'universityId' });
//   };
//   return Approval;
// };


// models/Approval.js
module.exports = (sequelize, DataTypes) => {
  const Approval = sequelize.define('Approval', {
      img: {
          type: DataTypes.JSON, // Store array of strings as JSON
      },
      universityId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'University',
            key: 'id'
        }
    },
  });

  return Approval;
};
