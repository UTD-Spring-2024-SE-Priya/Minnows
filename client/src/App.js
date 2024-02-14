import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import PostPage from "./component/Post/PostPage";

export default function App() {
  return (
    <ChakraProvider>
      <Box h={"100vh"} w={"100vw"} display={"flex"}>
        <Box h={"100%"} w={"20%"}>
          <Sidebar />
        </Box>
        <Box h={"100%"} w={"80%"}>
          <PostPage></PostPage>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
