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
              <Link to="/">
                <Button>Go to Login</Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default NotLoggedIn;
