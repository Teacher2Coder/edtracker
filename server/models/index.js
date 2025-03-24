// Import the models
const Teacher = require('./Teacher');
const Student = require('./Student');
const Class = require('./Class');
const Assignment = require('./Assignment');

// Class.belongsTo(Teacher, {
//   foreignKey: 'teacher_id'
// });

// Teacher.hasMany(Class, {
//   foreignKey: 'teacher_id',
//   onDelete: 'CASCADE'
// });

// Class.belongsToMany(Student, {
//   foreignKey: 'student_id'
// });

// Student.hasMany(Class, {
//   foreignKey: 'student_id'
// });

// Assignment.belongsTo(Student, {
//   foreignKey: 'student_id'
// })

// Student.hasMany(Assignment, {
//   foreignKey: 'student_id',
//   onDelete: 'CASCADE'
// })

// Export the models
module.exports = { Teacher, Student, Class, Assignment };