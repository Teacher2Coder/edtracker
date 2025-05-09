import { Heading, Stack } from "@chakra-ui/react";

import StudentHeader from "../../components/student/header/StudentHeader";
import StudentNotificationCard from "../../components/student/notifications/StudentNotificationCard";

import Auth from "../../utils/auth";
import NotLoggedIn from "../../components/NotLoggedIn";

// Mock Notification Data
const notifications = [
  {
    id: 1,
    title: "Assignment due",
    message: "Your assignment is due tomorrow.",
  },
  {
    id: 2,
    title: "New Message",
    message: "You have a new message from your instructor.",
  },
  {
    id: 3,
    title: "Register for class",
    message: "Don't forget to register for classes!",
  },
];

const StudentNotifications = () => {
  
  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isTeacher()) {
    location.replace('/teacher/notifications');
  }
  
  return (
    <div>
      <StudentHeader />
      <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
        <Heading style={{ marginBottom: '20px' }}>Student Notifications</Heading>
        <Stack>
          {notifications.map((notification) => (
            <div key={notification.id}>
              <StudentNotificationCard notification={notification} />
            </div>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default StudentNotifications;
