import React from "react";
import { Box } from "@chakra-ui/react";
import fishSwimming from "../../assets/fishSwimming.mp4";

export default function Homepage() {
  return (
    <Box
      height="100vh"
      width="100vw"
      overflow="hidden"
      position="fixed"
      top="0"
      left="0"
  
    >
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={fishSwimming} type="video/mp4" />
      </video>
    </Box>
  );
}
