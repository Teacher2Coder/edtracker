import { gql } from '@apollo/client';

// Teacher mutations
export const ADD_TEACHER = gql`
  mutation addTeacher($teacherName: String!, $teacherEmail: String!, $teacherPassword: String!) {
    addTeacher(teacherName: $teacherName, teacherEmail: $teacherEmail, teacherPassword: $teacherPassword) {
      teacherName
      teacherEmail
      teacherPassword
    }
  }
`;

export const LOGIN_TEACHER = gql`
  mutation loginTeacher($teacherEmail: String!, $teacherPassword: String!) {
    loginTeacher(teacherEmail: $teacherEmail, teacherPassword: $teacherPassword) {
      token
    }
  }
`;

// Student mutations
export const ADD_STUDENT = gql`
  mutation addStudent($studentName: String!, $studentEmail: String!, $studentPassword: String!) {
    addStudent(studentName: $studentName, studentEmail: $studentEmail, studentPassword: $studentPassword) {
      studentName
      studentEmail
      studentPassword
    }
  }
`;

export const LOGIN_STUDENT = gql`
  mutation loginStudent($studentEmail: String!, $studentPassword: String!) {
    loginStudent(studentEmail: $studentEmail, studentPassword: $studentPassword) {
      token
    }
  }
`;

// Class mutations
export const ADD_CLASS = gql`
  mutation addClass($className: String!) {
    addClass(className: $className) {
      className
    }
  }
`;

// Assignment mutations
export const ADD_ASSIGNMENT = gql`
  mutation addAssignment($assignmentName: String!, $assignmentDescription: String!, $assignDate: String!, $dueDate: String!) {
    addAssignment(assignmentName: $assignmentName, assignmentDescription: $assignmentDescription, assignDate: $assignDate, dueDate: $dueDate) {
      assignmentName
      assignmentDescription
      assignDate
      dueDate
    }
  }
`;