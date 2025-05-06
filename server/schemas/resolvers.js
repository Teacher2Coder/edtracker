const { Teacher, Student, Class, Assignment } = require('../models');
const { signTokenTeacher, signTokenStudent, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getAllTeachers: async () => {
      return await Teacher.findAll();
    },
    getTeacher: async (_, { id }) => {
      return await Teacher.findOne({ where: { id: id } });
    },
    getAllStudents: async () => {
      return await Student.findAll();
    },
    getStudent: async (_, { id }) => {
      return await Student.findOne({ where: { id: id } });
    },
    getAllAssignments: async () => {
      return await Assignment.findAll();
    },
    getAssignment: async (_, { id }) => {
      return await Assignment.findOne({ where: { id: id } });
    },
    getAllClasses: async () => {
      return await Class.findAll();
    },
    getClass: async (_, { id }) => {
      return await Class.findOne({ where: { id: id } });
    },
  },

  Mutation: {
    loginTeacher: async (_, { teacherEmail, teacherPassword }) => {
      const teacher = await Teacher.findOne({ where: { teacherEmail } });

      if (!teacher) {
        throw new AuthenticationError('No teacher found with this email address');
      }

      const correctPw = teacher.checkPassword(teacherPassword);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signTokenTeacher(teacher);
      return { token, teacher };
    },
    addTeacher: async (_, { teacherName, teacherEmail, teacherPassword }) => {
      const teacher = await Teacher.create({ teacherName, teacherEmail, teacherPassword });
      console.log(teacher);
      const token = signTokenTeacher(teacher);
      return { token, teacher };
    },
    editTeacher: async (_, { id, teacherName, teacherEmail, teacherPassword }) => {
      const teacher = await Teacher.findOne({ where: { id: id } });

      if (!teacher) {
        throw new AuthenticationError('No teacher found with this ID');
      }

      teacher.teacherName = teacherName;
      teacher.teacherEmail = teacherEmail;
      teacher.teacherPassword = teacherPassword;

      return await teacher.save();
    },
    deleteTeacher: async (_, { id }) => {
      const teacher = await Teacher.findOne({ where: { id: id } });

      if (!teacher) {
        throw new AuthenticationError('No teacher found with this ID');
      }

      await teacher.destroy();
      return teacher;
    },
    loginStudent: async (_, { studentEmail, studentPassword }) => {
      const student = await Student.findOne({ where: { studentEmail } });

      if (!student) {
        throw new AuthenticationError('No student found with this email address');
      }

      const correctPw = student.checkPassword(studentPassword);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signTokenStudent(student);
      return { token, student };
    },
    addStudent: async (_, { studentName, studentEmail, studentPassword }) => {
      const student = await Student.create({ studentName, studentEmail, studentPassword });
      const token = signTokenStudent(student);
      return { token, student };
    },
    editStudent: async (_, { id, studentName, studentEmail, studentPassword }) => {
      const student = await Student.findOne({ where: { id: id } });

      if (!student) {
        throw new AuthenticationError('No student found with this ID');
      }

      student.studentName = studentName;
      student.studentEmail = studentEmail;
      student.studentPassword = studentPassword;

      return await student.save();
    },
    deleteStudent: async (_, { id }) => {
      const student = await Student.findOne({ where: { id: id } });

      if (!student) {
        throw new AuthenticationError('No student found with this ID');
      }

      await student.destroy();
      return student;
    },
    addAssignment: async (_, { assignmentName, assignmentDescription, assignDate, dueDate }) => {
      const newAssignment = new Assignment({ assignmentName, assignmentDescription, assignDate, dueDate });
      return await newAssignment.save();
    },
    editAssignment: async (_, { id, assignmentName, assignmentDescription, assignDate, dueDate }) => {
      const assignment = await Assignment.findOne({ where: { id: id } });

      if (!assignment) {
        throw new AuthenticationError('No assignment found with this ID');
      }

      assignment.assignmentName = assignmentName;
      assignment.assignmentDescription = assignmentDescription;
      assignment.assignDate = assignDate;
      assignment.dueDate = dueDate;

      return await assignment.save();
    },
    deleteAssignment: async (_, { id }) => {
      const assignment = await Assignment.findOne({ where: { id: id } });

      if (!assignment) {
        throw new AuthenticationError('No assignment found with this ID');
      }

      await assignment.destroy();
      return assignment;
    },
    addClass: async (_, { className }) => {
      const newClass = new Class({ className });
      return await newClass.save();
    },
    editClass: async (_, { id, className }) => {
      const classObj = await Class.findOne({ where: { id: id } });

      if (!classObj) {
        throw new AuthenticationError('No class found with this ID');
      }

      classObj.className = className;

      return await classObj.save();
    },
    deleteClass: async (_, { id }) => {
      const classObj = await Class.findOne({ where: { id: id } });

      if (!classObj) {
        throw new AuthenticationError('No class found with this ID');
      }

      await classObj.destroy();
      return classObj;
    },
  }
};

module.exports = resolvers;