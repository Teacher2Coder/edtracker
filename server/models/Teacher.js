const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');
const bcrypt = require('bcrypt');

// class Teacher extends Model {}

// Teacher.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     teacher_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     teacher_email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//     teacher_password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],
//       },
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'teacher',
//   }
// );

// module.exports = Teacher;



const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teacher_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  teacher_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  teacher_password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
    },
  }
}, {});


module.exports = Teacher;