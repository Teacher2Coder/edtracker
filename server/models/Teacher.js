const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

class Teacher extends Model {}

Teacher.init(
  {
    teacherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacherEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    teacherPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'Teacher',
    timestamps: true,
  }
);

module.exports = Teacher;