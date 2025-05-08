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
            src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
            alt={`${teacher.teacherName}'s profile`}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Card.Title style={{ marginLeft: "5%" }}>{teacher.teacherName}</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Contact:</strong> {teacher.teacherEmail}
          </p>
          <p>
            <strong>Bio:</strong> {teacher.teacherBio}
          </p>
        </Card.Body>
        <Card.Footer>
          <TeacherEditProfileModal teacher={teacher} />
          <TeacherSignoutModal />
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default TeacherProfileCard;
