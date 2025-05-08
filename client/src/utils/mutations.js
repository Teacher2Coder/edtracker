import { gql } from '@apollo/client';

// Teacher mutations
export const ADD_TEACHER = gql`
  mutation addTeacher($teacherName: String!, $teacherEmail: String!, $teacherPassword: String!) {
    addTeacher(teacherName: $teacherName, teacherEmail: $teacherEmail, teacherPassword: $teacherPassword) {
      token
      teacher {
        teacherEmail
        teacherName
      }
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

export const EDIT_TEACHER = gql`
  mutation editTeacher($teacherName: String!, $teacherEmail: String!, $teacherBio: String!) {
    editTeacher(teacherName: $teacherName, teacherEmail: $teacherEmail, teacherBio: $teacherBio) {
      teacherName
      teacherEmail
      teacherBio
    }
  }
`;

export const DELETE_TEACHER = gql`
  mutation deleteTeacher($id: ID!) {
    deleteTeacher(id: $id) {
      id
      teacherEmail
      teacherName
    }
  }
`;

// Student mutations
export const ADD_STUDENT = gql`
  mutation addStudent($studentName: String!, $studentEmail: String!, $studentPassword: String!) {
    addStudent(studentName: $studentName, studentEmail: $studentEmail, studentPassword: $studentPassword) {
      token
      student {
        studentEmail
        studentName
      }
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

export const EDIT_STUDENT = gql`
  mutation editStudent($studentName: String!, $studentEmail: String!, $studentBio: String!) {
    editStudent(studentName: $studentName, studentEmail: $studentEmail, studentBio: $studentBio) {
      studentName
      studentEmail
      studentBio
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation deleteStudent($id: ID!) {
    deleteStudent(id: $id) {
      id
      studentEmail
      studentName
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

export const EDIT_CLASS = gql`
  mutation editClass($id: ID!, $className: String!) {
    editClass(id: $id, className: $className) {
      id
      className
    }
  }
`;

export const DELETE_CLASS = gql`
  mutation deleteClass($id: ID!) {
    deleteClass(id: $id) {
      id
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

export const EDIT_ASSIGNMENT = gql`
  mutation editAssignment($id: ID!, $assignmentName: String!, $assignmentDescription: String!, $assignDate: String!, $dueDate: String!) {
    editAssignment(id: $id, assignmentName: $assignmentName, assignmentDescription: $assignmentDescription, assignDate: $assignDate, dueDate: $dueDate) {
      id
      assignmentName
      assignmentDescription
      assignDate
      dueDate
    }
  }
`;

export const DELETE_ASSIGNMENT = gql`
  mutation deleteAssignment($id: ID!) {
    deleteAssignment(id: $id) {
      id
      assignmentName
      assignmentDescription
      assignDate
      dueDate
    }
  }
`;