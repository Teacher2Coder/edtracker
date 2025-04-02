const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Student extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.studentPassword);
  }
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    studentPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    }
  },
  {
    hooks: {
      beforeCreate: async (newStudentData) => {
        newStudentData.studentPassword = await bcrypt.hash(newStudentData.studentPassword, 10);
        return newStudentData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
  }
);

module.exports = Student;