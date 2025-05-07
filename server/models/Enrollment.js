const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

class Enrollment extends Model {}

Enrollment.init(
  {
    enrollmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }
  }, 
  {
    sequelize,
    modelName: 'enrollment',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
)

module.exports = Enrollment;