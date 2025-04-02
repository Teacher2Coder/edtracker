// Import the models
const Teacher = require('./Teacher');
const Student = require('./Student');
const Class = require('./Class');
const Assignment = require('./Assignment');

Teacher.hasMany(Class, {
  foreignKey: 'teacherId',
  onDelete: 'CASCADE',
});


Class.belongsTo(Teacher, {
  foreignKey: 'teacherId',
  onDelete: 'CASCADE',
});

// Export the models
module.exports = { 
  Teacher,
  Student,
  Class,
  Assignment
};