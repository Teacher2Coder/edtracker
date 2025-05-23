const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

class Class extends Model {}

Class.init(
  {
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'class',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Class;