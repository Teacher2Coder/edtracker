// Need to display contact, bio and profile picture
import { Card, Image } from "@chakra-ui/react";

import StudentEditProfileModal from "./StudentEditProfileModal";
import StudentSignoutModal from "./StudentSignoutModal";

const StudentProfileCard = ({ student }) => {
  
  return (
    <div style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
      <Card.Root>
        <Card.Header style={{ display: "flex", flexDirection: "row" }}>
          <Image
            src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
            alt={`${student.studentName}'s profile`}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Card.Title style={{ marginLeft: "5%" }}>{student.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Contact:</strong> {student.studentEmail}
          </p>
          <p>
            <strong>Bio:</strong> {student.studentBio}
          </p>
        </Card.Body>
        <Card.Footer>
          <StudentEditProfileModal student={student}/>
          <StudentSignoutModal />
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default StudentProfileCard;
