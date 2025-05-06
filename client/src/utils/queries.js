import { gql } from '@apollo/client';

// Teacher queries
export const QUERY_TEACHERS = gql`
  query teacherQuery {
    getAllTeachers {
      teacherEmail
      teacherName
    }
  }
`;

export const QUERY_TEACHER = gql`
  query getTeacher($getTeacherId: ID!) {
    getTeacher(id: $getTeacherId) {
      id
      teacherEmail
      teacherName
    }
  }
`

// Student queries
export const QUERY_STUDENTS = gql`
  query studentQuery {
    getAllStudents {
      studentEmail
      studentName
    }
  }
`;

export const QUERY_STUDENT = gql`
  query getStudent($getTeacherId: ID!) {
    getStudent(id: $getStudentId) {
      id
      studentEmail
      studentName
    }
  }
`

// Class queries
export const QUERY_CLASSES = gql`
  query classQuery {
    getAllClasses {
      className
    }
  }
`;

export const QUERY_CLASS = gql`
  query getClass($getClassId: ID!) {
    getClass(id: $getClassId) {
      id
      className
    }
  }
`;

// Assignment queries
export const QUERY_ASSIGNMENTS = gql`
  query assignmentQuery {
    getAllAssignments {
      assignmentName
      assignmentDescription
      assignDate
      dueDate
    }
  }
`;

export const QUERY_ASSIGNMENT = gql`
  query getAssignment($getAssignmentId: ID!) {
    getAssignment(id: $getAssignmentId) {
      id
      assignmentName
      assignmentDescription
      assignDate
      dueDate
    }
  }
`