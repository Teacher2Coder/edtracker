const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

class Class extends Model {}

Class.init(
  {
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'Class',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Class;