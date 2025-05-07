// Need to display contact, bio and profile picture
import { Card, Image } from "@chakra-ui/react";

import TeacherEditProfileModal from "./TeacherEditProfileModal";
import TeacherSignoutModal from "./TeacherSignoutModal";

const TeacherProfileCard = ({ teacher }) => {
  return (
    <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
      <Card.Root>
        <Card.Header style={{ display: "flex", flexDirection: "row" }}>
          <Image
            src={teacher.profilePicture || "https://via.placeholder.com/150"}
            alt={`${teacher.name}'s profile`}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Card.Title style={{ marginLeft: "5%" }}>{teacher.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Contact:</strong> {teacher.email}
          </p>
          <p>
            <strong>Bio:</strong> {teacher.bio}
          </p>
        </Card.Body>
        <Card.Footer>
          <TeacherEditProfileModal />
          <TeacherSignoutModal />
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default TeacherProfileCard;
