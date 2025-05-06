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

// Student queries
export const QUERY_STUDENTS = gql`
  query studentQuery {
    getAllStudents {
      studentEmail
      studentName
    }
  }
`;

// Class queries
export const QUERY_CLASSES = gql`
  query classQuery {
    getAllClasses {
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