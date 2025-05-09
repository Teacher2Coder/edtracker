// Import components
import { Card, Heading, Button, Stack } from "@chakra-ui/react";
import TeacherHeader from "../../components/teacher/header/TeacherHeader";
import ClassCardTeacher from "../../components/teacher/dashboard/TeacherClassCard";
import Auth from "../../utils/auth";
import NotLoggedIn from "../../components/NotLoggedIn";
import { QUERY_TEACHER_DASHBOARD } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const DashboardTeacher = () => {
  const { loading, data } = useQuery(QUERY_TEACHER_DASHBOARD);

  const teacherData = data?.getTeacherDashboard || {};
  const classData = teacherData.taughtClasses || [];

  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isStudent()) {
    location.replace("/student/dashboard");
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  Auth.isTeacher();

  return (
    <div>
      <TeacherHeader />
      <div style={{ width: "75%", margin: "0 auto", marginTop: "40px" }}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Welcome, {teacherData.teacherName}!</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Your students have __ overdue assignments</p>
            <p>You have __ ungraded assignments</p>
          </Card.Body>
          <Card.Footer>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Button colorPalette={"blue"} style={{ width: "25%" }}>
                Create a new class
              </Button>
              <Button colorPalette={"blue"} style={{ width: "25%" }}>
                Push notifications
              </Button>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
      <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
        <Heading>Your classes:</Heading>
        <Stack>
          {classData.length > 0 ? (
            classData.map((cls) => (
              <div key={cls.className}>
                <ClassCardTeacher cls={cls} />
              </div>
            ))
          ) : (
            <Card.Root>
              <Card.Header>
                <Card.Title>You have no classes yet!</Card.Title>
              </Card.Header>
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button colorPalette={"blue"} style={{ width: "25%" }}>
                  Create a new class
                </Button>
              </Card.Body>
            </Card.Root>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default DashboardTeacher;
