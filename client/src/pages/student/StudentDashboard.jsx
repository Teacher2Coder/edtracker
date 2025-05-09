// Import components
import { Card, Heading, Stack, Button } from "@chakra-ui/react";
import StudentHeader from "../../components/student/header/StudentHeader";
import StudentClassCard from "../../components/student/dashboard/StudentClassCard";
import Auth from "../../utils/auth";
import NotLoggedIn from "../../components/NotLoggedIn";
import { QUERY_STUDENT_DASHBOARD } from "../../utils/queries";
import { useQuery } from "@apollo/client";


const DashboardStudent = () => {
  
  const { loading, data } = useQuery(QUERY_STUDENT_DASHBOARD);

  const studentData = data?.getStudentDashboard || {};
  const classData = studentData.classes || [];

  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isTeacher()) {
    location.replace('/teacher/dashboard');
  }

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  
  return (
    <div>
      <StudentHeader />
      <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Welcome, {studentData.studentName}!</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>You have __ assignments due</p>
            <p>You have __ overdue assignments</p>
            <p>You have __ ungraded assignments</p>
          </Card.Body>
          <Card.Footer>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button colorPalette={"blue"} style={{ width: "25%" }}>Join a new class</Button>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
      <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
        <Heading>Your classes:</Heading>
        <Stack>
          {classData.length > 0 ?
          classData.map((cls) => (
            <div key={cls.className}>
              <StudentClassCard cls={cls} />
            </div>
          )):
          <Card.Root >
          <Card.Header>
            <Card.Title>You haven't joined a class yet!</Card.Title>
          </Card.Header>
          <Card.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button colorPalette={'blue'} style={{width: '25%'}}>Join a new class</Button>
          </Card.Body>
          </Card.Root>
          }
        </Stack>
      </div>
    </div>
  );
};

export default DashboardStudent;
