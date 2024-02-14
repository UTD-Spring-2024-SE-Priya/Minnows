import React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <ChakraProvider>
      <Box h={"100vh"} w={"100vw"}>
        <Sidebar></Sidebar>
      </Box>
    </ChakraProvider>
  );
}
