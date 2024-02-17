import React from "react";
import { Box, Icon, Heading } from "@chakra-ui/react";

import Login from "../Login/Login";
import Backgroundvideo from "./BackgroundVideo.jsx";

export default function Homepage() {
  return (
    <Box>
      <Backgroundvideo />

      <Box display="flex" justifyContent="space-between">
        <Box>
          <Icon></Icon>
          <Heading>Minnows</Heading>
        </Box>
      </Box>
    </Box>
  );
}
