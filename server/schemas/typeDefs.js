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
    getTeacher(id: ID!): Teacher
    getAllStudents: [Student]
    getStudent(id: ID!): Student
    getAllAssignments: [Assignment]
    getAssignment(id: ID!): Assignment
    getAllClasses: [Class]
    getClass(id: ID!): Class
  }

  type Mutation {
    loginTeacher(teacherEmail: String!, teacherPassword: String!): AuthTeacher
    addTeacher(teacherName: String!, teacherEmail: String!, teacherPassword: String!): Teacher
    editTeacher(id: ID!, teacherName: String!, teacherEmail: String!, teacherPassword: String!): Teacher
    deleteTeacher(idd: ID!): Teacher
    loginStudent(studentEmail: String!, studentPassword: String!): AuthStudent
    addStudent(studentName: String!, studentEmail: String!, studentPassword: String!): Student
    editStudent(id: ID!, studentName: String!, studentEmail: String!, studentPassword: String!): Student
    deleteStudent(id: ID!): Student
    addAssignment(assignmentName: String!, assignmentDescription: String!, assignDate: String!, dueDate: String!): Assignment
    editAssignment(id: ID!, assignmentName: String!, assignmentDescription: String!, assignDate: String!, dueDate: String!): Assignment
    deleteAssignment(id: ID!): Assignment
    addClass(className: String!): Class
    editClass(id: ID!, className: String!): Class
    deleteClass(id: ID!): Class
  }
`;

module.exports = typeDefs;