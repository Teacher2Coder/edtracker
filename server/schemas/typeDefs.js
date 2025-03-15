const typeDefs = `
  type Teacher {
    _id: ID
    name: String
    email: String
    password: String
    classes: [Class]
  }

  type Student {
    _id: ID
    name: String
    email: String
    password: String
    classes: [Class]
  }

  type Class {
    _id: ID
    className: String
    period: Int
    teacher: Teacher
    students: [Student]
  }

  type Assignment {
    _id: ID
    assignmentName: String
    description: String
    dueDate: String
    class: Class
  }

  type Auth {
    token: ID!
    user: Teacher
  }

  type Query {
    teacherMe: Teacher
    studentMe: Student
    teacher: Teacher
    teachers: [Teacher]
    students: [Student]
    classes: [Class]
    assignments: [Assignment]
    class(_id: ID!): Class
    assignment(_id: ID!): Assignment
  }

  type Mutation {
    addTeacher(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addStudent(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addClass(className: String!, period: Int!): Class
    addAssignment(assignmentName: String!, description: String, dueDate: String, classId: ID!): Assignment
    loginTeacher(email: String!, password: String!): Auth
    loginStudent(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs;