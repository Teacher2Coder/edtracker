// Import components
import { Card, Heading, Stack, Button } from "@chakra-ui/react";
import StudentHeader from "../../components/student/header/StudentHeader";
import StudentClassCard from "../../components/student/dashboard/StudentClassCard";

const classes = [
  {
    className: "Algebra",
    teacherName: "Mr. Black",
    assignments: [
      {
        id: 1,
        name: "Assignment 1",
        dateAssigned: "2023-10-01",
        dateDue: "2023-10-15",
        status: "Ungraded",
      },
      {
        id: 2,
        name: "Assignment 2",
        dateAssigned: "2023-10-05",
        dateDue: "2023-10-20",
        status: "Past Due",
      },
    ],
  },
  {
    className: "Geography",
    teacherName: "Mr. Brown",
    assignments: [
      {
        id: 1,
        name: "Assignment 1",
        dateAssigned: "2023-10-01",
        dateDue: "2023-10-15",
        status: "Ungraded",
      },
      {
        id: 2,
        name: "Assignment 2",
        dateAssigned: "2023-10-05",
        dateDue: "2023-10-20",
        status: "Past Due",
      },
    ],
  },
  {
    className: "Physics",
    teacherName: "Mr. Blue",
    assignments: [
      {
        id: 1,
        name: "Assignment 1",
        dateAssigned: "2023-10-01",
        dateDue: "2023-10-15",
        status: "Ungraded",
      },
      {
        id: 2,
        name: "Assignment 2",
        dateAssigned: "2023-10-05",
        dateDue: "2023-10-20",
        status: "Past Due",
      },
    ],
  },
];

const DashboardStudent = () => {
  return (
    <div>
      <StudentHeader />
      <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Welcome, user!</Card.Title>
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
          {classes.map((cls) => (
            <div key={cls.className}>
              <StudentClassCard cls={cls} />
            </div>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default DashboardStudent;
