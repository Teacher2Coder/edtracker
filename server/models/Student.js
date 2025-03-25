const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Student extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
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
    },
    classes: [{
      type: DataTypes.INTEGER,
      references: {
        model: 'class',
        key: 'id'
      }
    }],
    assignments: [{
      type: DataTypes.INTEGER,
      references: {
        model: 'assignments',
        key: 'id'
      }
    }],
    notifications: [{
      type: DataTypes.INTEGER,
      references: {
        model: 'notification',
        key: 'id'
      }
    }]
  },
  {
    hooks: {
      beforeCreate: async (newStudentData) => {
        newStudentData.password = await bcrypt.hash(newStudentData.password, 10);
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