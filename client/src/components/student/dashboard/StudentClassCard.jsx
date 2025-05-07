import { Table, Card } from "@chakra-ui/react";

const StudentClassCard = ({ cls }) => {
  // Destructure the class object to get the students
  const assignments = cls.assignments || [];

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{cls.className}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table.Root size={"md"} variant={"outline"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Assignments</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="center">
                Date Assigned
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign="center">
                Date Due
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <Table.Row key={assignment.id}>
                  <Table.Cell>{assignment.assignmentName}</Table.Cell>
                  <Table.Cell textAlign="center">
                    {assignment.assignDateFormatted}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    {assignment.dueDateFormatted}
                  </Table.Cell>
                  <Table.Cell textAlign="end">{assignment.status}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center">
                  No assignments available
                </Table.Cell>
              </Table.Row>
            )}
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
        ></div>
      </Card.Footer>
    </Card.Root>
  );
};

export default StudentClassCard;
