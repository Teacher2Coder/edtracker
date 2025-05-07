import { Card, Button } from "@chakra-ui/react";

const TeacherNotificationCard = ({ notification }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{notification.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <p>{notification.message}</p>
      </Card.Body>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button colorPalette={"blue"}>Acknowledge</Button>
        </div>
      </Card.Footer>
    </Card.Root>
  );
};

export default TeacherNotificationCard;
