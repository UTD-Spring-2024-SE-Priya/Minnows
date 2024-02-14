import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <ChakraProvider>
      <Box h={"100vh"} w={"100vw"}>
        <Sidebar></Sidebar>
      </Box>
    </ChakraProvider>
  );
}
