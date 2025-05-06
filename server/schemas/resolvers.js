const { Teacher, Student, Class, Assignment } = require('../models');
const { signTokenTeacher, signTokenStudent, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getAllTeachers: async () => {
      return await Teacher.findAll();
    },
    getAllStudents: async () => {
      return await Student.findAll();
    },
    getAllAssignments: async () => {
      return await Assignment.findAll();
    },
    getAllClasses: async () => {
      return await Class.findAll();
    }
  },

  Mutation: {
    loginTeacher: async (_, { teacherEmail, teacherPassword }) => {
      const teacher = await Teacher.findOne({ where: { teacherEmail } });

      console.log(teacher);

      if (!teacher) {
        throw new AuthenticationError('No teacher found with this email address');
      }

      const correctPw = teacher.checkPassword(teacherPassword);

      console.log(correctPw);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signTokenTeacher(teacher);
      return { token, teacher };
    },
    addTeacher: async (_, { teacherName, teacherEmail, teacherPassword }) => {
      const newTeacher = new Teacher({ teacherName, teacherEmail, teacherPassword });
      return await newTeacher.save();
    },
    loginStudent: async (_, { studentEmail, studentPassword }) => {
      const student = await Student.findOne({ where: { studentEmail } });

      if (!student) {
        throw new AuthenticationError('No teacher found with this email address');
      }

      const correctPw = await student.checkPassword(studentPassword);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signTokenStudent(student);
      return { token, student };
    },
    addStudent: async (_, { studentName, studentEmail, studentPassword }) => {
      const newStudent = new Student({ studentName, studentEmail, studentPassword });
      return await newStudent.save();
    },
    addAssignment: async (_, { assignmentName, assignmentDescription, assignDate, dueDate }) => {
      const newAssignment = new Assignment({ assignmentName, assignmentDescription, assignDate, dueDate });
      return await newAssignment.save();
    },
    addClass: async (_, { className }) => {
      const newClass = new Class({ className });
      return await newClass.save();
    }
  }
};

module.exports = resolvers;