// Import components
import { Link } from "react-router-dom";
import { Button, Card } from "@chakra-ui/react";

const Portal = () => {
  return (
    <div className="portal">
      <Card.Root>
        <Card.Header>
          <Card.Title style={{ textAlign: "center" }}>
            Login or Sign up below
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="portal-button-div">
            <Link to="/teacher/login" className="portal-link">
              <Button style={{ width: "100%" }} colorPalette={"blue"}>
                Login as a Teacher
              </Button>
            </Link>
            <Link to="/teacher/signup" className="portal-link">
              <Button style={{ width: "100%" }} colorPalette={"blue"}>
                Sign up as a Teacher
              </Button>
            </Link>
          </div>
          <div className="portal-button-div">
            <Link to="/student/login" className="portal-link">
              <Button style={{ width: "100%" }} colorPalette={"blue"}>
                Login as a Student
              </Button>
            </Link>
            <Link to="/student/signup" className="portal-link">
              <Button style={{ width: "100%" }} colorPalette={"blue"}>
                Sign up as a Student
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default Portal;
