const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');
const bcrypt = require('bcrypt');

class Teacher extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.teacherPassword);
  }
}

Teacher.init(
  {
    teacherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacherEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    teacherPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    hooks: {
      beforeCreate: async (newTeacherData) => {
        newTeacherData.teacherPassword = await bcrypt.hash(
          newTeacherData.teacherPassword,
          10
        );
        return newTeacherData;
      }
    },
    sequelize,
    modelName: 'Teacher',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Teacher;