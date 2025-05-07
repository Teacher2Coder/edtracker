const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

class Submission extends Model {}

Submission.init(
  {
    submissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: 'submission',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Submission;