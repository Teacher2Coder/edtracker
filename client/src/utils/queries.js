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
`;

export const QUERY_TEACHER_NOTIFICATION_COUNT = gql`
  query getTeacherNotifications {
    getTeacherNotifications {
      notifications {
        notificationId
      }
    }
  }
`;

export const QUERY_TEACHER_NOTIFICATIONS = gql`
  query getTeacherNotifications {
    getTeacherNotifications {
      notifications {
        subject
        notificationType
        notificationId
        body
        acknowledged
      }
    }
  }
`;

export const QUERY_TEACHER_DASHBOARD = gql`
  query getTeacherDashBoard {
    getTeacherDashboard {
      teacherName
      taughtClasses {
        className
        students {
          studentName
        }
      }
    }
  }
`;

export const QUERY_TEACHER_ME_PROFILE = gql`
  query getTeacherMeProfile {
    getTeacherMeProfile {
      teacherName
      teacherEmail
      teacherBio
      taughtClasses {
        className
        classId
      }
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

export const QUERY_STUDENT = gql`
  query getStudent($getTeacherId: ID!) {
    getStudent(id: $getStudentId) {
      id
      studentEmail
      studentName
    }
  }
`;

export const QUERY_STUDENT_NOTIFICATION_COUNT = gql`
  query getStudentNotifications {
    getStudentNotifications {
      notifications {
        notificationId
      }
    }
  }
`;

export const QUERY_STUDENT_NOTIFICATIONS = gql`
  query getStudentNotifications {
    getStudentNotifications {
      notifications {
        subject
        notificationType
        notificationId
        body
        acknowledged
      }
    }
  }
`;

export const QUERY_STUDENT_DASHBOARD = gql`
  query getStudentDashboard {
    getStudentDashboard {
      studentName
      classes {
        className
        teacher {
          teacherName
        }
        assignments {
          assignmentName
          assignDateFormatted
          dueDateFormatted
        }
      }
    }
  }
`;

export const QUERY_STUDENT_ME_PROFILE = gql`
  query getTeacherMeProfile {
    getStudentMeProfile {
      studentName
      studentEmail
      studentBio
      classes {
        className
        teacher {
          teacherName
        }
      }
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