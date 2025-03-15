const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assignment extends Model {}

Assignment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    AssignmentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AssignmentCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    teacherId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teacher',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Assignment',
  }
);

module.exports = Assignment;