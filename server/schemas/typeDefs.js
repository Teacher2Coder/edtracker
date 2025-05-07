const typeDefs = `
  type Teacher {
    teacherId: ID!
    teacherName: String!
    teacherEmail: String!
    teacherPassword: String!
    teacherBio: String
    taughtClasses: [Class]
  }
  
  type Student {
    studentId: ID!
    studentName: String!
    studentEmail: String!
    studentPassword: String!
    studentBio: String
    classes: [Class]
    assignments: [Assignment]
  }

  type Assignment {
    assignmentId: ID!
    assignmentName: String!
    assignmentDescription: String!
    assignDate: String!
    assignDateFormatted: String
    dueDate: String!
    dueDateFormatted: String
    class: Class
    studentsWithSubmissions: [Student]
  }

  type Class {
    classId: ID!
    className: String!
    teacher: Teacher
    students: [Student]
    assignments: [Assignment]
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
    getTeacherDashboard: Teacher
    getTeacherMeProfile: Teacher
    getAllStudents: [Student]
    getStudent(id: ID!): Student
    getStudentDashboard: Student
    getStudentMeProfile: Student
    getAllAssignments: [Assignment]
    getAssignment(id: ID!): Assignment
    getAllClasses: [Class]
    getClass(id: ID!): Class
  }

  type Mutation {
    loginTeacher(teacherEmail: String!, teacherPassword: String!): AuthTeacher
    addTeacher(teacherName: String!, teacherEmail: String!, teacherPassword: String!): AuthTeacher
    editTeacher(teacherId: ID!, teacherName: String!, teacherEmail: String!, teacherPassword: String!): Teacher
    deleteTeacher(teacherId: ID!): Teacher
    loginStudent(studentEmail: String!, studentPassword: String!): AuthStudent
    addStudent(studentName: String!, studentEmail: String!, studentPassword: String!): AuthStudent
    editStudent(studentId: ID!, studentName: String!, studentEmail: String!, studentPassword: String!): Student
    deleteStudent(studentId: ID!): Student
    addAssignment(assignmentName: String!, assignmentDescription: String!, assignDate: String!, dueDate: String!): Assignment
    editAssignment(assignmentId: ID!, assignmentName: String!, assignmentDescription: String!, assignDate: String!, dueDate: String!): Assignment
    deleteAssignment(assignmentId: ID!): Assignment
    addClass(className: String!): Class
    editClass(classId: ID!, className: String!): Class
    deleteClass(classId: ID!): Class
  }
`;

module.exports = typeDefs;