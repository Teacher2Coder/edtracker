// Import dependencies
import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Circle,
  Float,
} from "@chakra-ui/react";

// Import components
import Logo from "../../Logo";

import { useQuery } from "@apollo/client";
import { QUERY_STUDENT_NOTIFICATION_COUNT } from "../../../utils/queries";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const { loading, data } = useQuery(QUERY_STUDENT_NOTIFICATION_COUNT);

  const studentData = data?.getStudentNotifications || {};
  const notifications = studentData.notifications.length || [];

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={10}
        gap={3}
        align="center"
        justify={["center", "space-around", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/student/dashboard">
          <Button colorPalette={"gray"}>Dashboard</Button>
        </MenuItem>
        <MenuItem to="/student/notifications">
          <Box position="relative">
            <Button colorPalette={"gray"}>Notifications</Button>
            {notifications.length > 0 ? (
              <Float>
                <Circle size="5" bg="red" color="white">
                  {notifications.length}
                </Circle>
              </Float>
            ) : null}
          </Box>
        </MenuItem>
        <MenuItem to="/student/me" isLast>
          <Button
            size="md"
            rounded="md"
            colorPalette={"gray"}
            color={"gray.900"}
          >
            Your Profile
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={"blue.600"}
      color={{ base: "white", md: "primary.700" }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
