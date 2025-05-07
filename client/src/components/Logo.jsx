import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        src="/edutracker.svg"
        alt="EduTracker Logo"
        width="150px"
        height="auto"
        objectFit="contain"
        style={{ marginLeft: "20px" }}
      />
    </Box>
  );
}
