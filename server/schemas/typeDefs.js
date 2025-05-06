const typeDefs = `
  type Teacher {
    id: ID!
    teacherName: String!
    teacherEmail: String!
    teacherPassword: String!
  }
  
  type Student {
    id: ID!
    studentName: String!
    studentEmail: String!
    studentPassword: String!
  }

  type Assignment {
    id: ID!
    assignmentName: String!
    assignmentDescription: String!
    assignDate: String!
    dueDate: String!
  }

  type Class {
    id: ID!
    className: String!
  }

  type AuthTeacher {
    token: ID!
    teacher: Teacher
  }

  type AuthStudent {
    token: ID!
    student: Student
  }

  type Query {
    getAllTeachers: [Teacher]
    getAllStudents: [Student]
    getAllAssignments: [Assignment]
    getAllClasses: [Class]
  }

  type Mutation {
    loginTeacher(teacherEmail: String!, teacherPassword: String!): AuthTeacher
    addTeacher(teacherName: String!, teacherEmail: String!, teacherPassword: String!): Teacher
    loginStudent(studentEmail: String!, studentPassword: String!): AuthStudent
    addStudent(studentName: String!, studentEmail: String!, studentPassword: String!): Student
    addAssignment(assignmentName: String!, assignmentDescription: String!, assignDate: String!, dueDate: String!): Assignment
    addClass(className: String!): Class
  }
`;

module.exports = typeDefs;