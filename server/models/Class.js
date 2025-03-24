const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model {}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teacher',
        key: 'id',
      },
    },
    studentIds: [{
      type: DataTypes.INTEGER,
      references: {
        model: 'student',
        key: 'id'
      }
    }]
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'class',
  }
);

module.exports = Class;