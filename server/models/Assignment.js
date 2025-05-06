const {  DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

class Assignment extends Model {}

Assignment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    assignmentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignmentDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    assignDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, 
  {
    sequelize,
    modelName: 'Assignment',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Assignment;