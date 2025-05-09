import { Heading, Stack } from "@chakra-ui/react";

import TeacherHeader from '../../components/teacher/header/TeacherHeader';
import TeacherNotificationCard from "../../components/teacher/notifications/TeacherNotificationCard";

import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';

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

const TeacherNotifications = () => {
  
  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isStudent()) {
    location.replace("/student/notifications");
  }
  
  return (
    <div>
      <TeacherHeader />
      <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
        <Heading style={{ marginBottom: '20px' }}>Teacher Notifications</Heading>
        <Stack>
          {notifications.map((notification) => (
            <div key={notification.id}>
              <TeacherNotificationCard notification={notification} />
            </div>
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default TeacherNotifications;