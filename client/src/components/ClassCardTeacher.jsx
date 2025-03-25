import { Table, Card, Button } from "@chakra-ui/react";

const ClassCardTeacher = (cls) => {

  // Destructure the class object to get the students
  const students = cls.cls.students || [];

  return (
    <Card.Root>
      <Card.Header>
        {console.log(cls.cls.className)}
        <Card.Title>{cls.cls.className}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table.Root size={"md"} variant={"outline"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Student</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="center">Assignments</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="center">Ungraded</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Past Due</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {students.map((student) => (
              <Table.Row key={student.id}>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell textAlign="center">{student.assignments.toString()}</Table.Cell>
                <Table.Cell textAlign="center">{student.ungraded.toString()}</Table.Cell>
                <Table.Cell textAlign="end">{student.pastDue.toString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
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
            Add a student
          </Button>
          <Button colorPalette={"blue"} style={{ width: "25%" }}>
            Create a class assignment
          </Button>
        </div>
      </Card.Footer>
    </Card.Root>
  );
};

export default ClassCardTeacher;
