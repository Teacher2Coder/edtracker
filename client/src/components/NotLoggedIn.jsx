import { Card, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <div>
      <Card.Root>
        <Card.Body>
          <div>
            <p>You must be logged in to see this!</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link to="/teacher/login">
                <Button>Login as a Teacher</Button>
              </Link>
              <Link to="/teacher/signup">
                <Button>Sign up as a Teacher</Button>
              </Link>
              <Link to="/student/login">
                <Button>Login as a Student</Button>
              </Link>
              <Link to="/student/signup">
                <Button>Sign up as a Student</Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default NotLoggedIn;
