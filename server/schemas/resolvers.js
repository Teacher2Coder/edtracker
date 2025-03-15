// Import models and utils
const { Teacher, Student, Class, Assignment } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Define the resolvers
const resolvers = {
  // All Queries here
  Query: {
    teacher: async (parent, args, context) => {
      const teacher = Teacher.findOne({ name: args.name})
      return teacher
    }
  },
  Mutation: {
    loginTeacher: async (parent, { email, password }) => {
      const teacher = await Teacher.find({ email });
      if (!teacher) {
        throw AuthenticationError;
      }
      const correctPw = await teacher.isCorrectPassword(password);
      
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(teacher);
      return { token, teacher };
    },
    loginStudent: async (parent, { email, password }) => {
      const student = await Student.find({ email });
      if (!student) {
        throw AuthenticationError;
      }
      const correctPw = await student.isCorrectPassword(password);
      
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(student);
      return { token, student };
    }
  }
}
// Export the resolvers
module.exports = resolvers;