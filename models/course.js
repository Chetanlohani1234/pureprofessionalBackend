// models/course.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fees: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    prerequisites: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {});
  
  return Course;
};
