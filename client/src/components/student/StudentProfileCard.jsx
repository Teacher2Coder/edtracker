// Need to display contact, bio and profile picture
import { Card, Image } from "@chakra-ui/react";

import StudentEditProfileModal from "./StudentEditProfileModal";

const StudentProfileCard = ({ student }) => {
  return (
    <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
      <Card.Root>
        <Card.Header style={{ display: 'flex', flexDirection: 'row'}}>
        <Image
            src={student.profilePicture || "https://via.placeholder.com/150"}
            alt={`${student.name}'s profile`}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Card.Title style={{ marginLeft: '5%' }}>{student.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Contact:</strong> {student.email}
          </p>
          <p>
            <strong>Bio:</strong> {student.bio}
          </p>
        </Card.Body>
        <Card.Footer>
          <StudentEditProfileModal />
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default StudentProfileCard;
