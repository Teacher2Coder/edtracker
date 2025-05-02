const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

class Student extends Model {}

Student.init(
  {
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    studentPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'student',
    timestamps: true,
  }
);

module.exports = Student;