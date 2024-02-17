import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Leaderboard from "./component/Leaderboard/Leaderboard.jsx";
import Sidebar from "./component/Sidebar";
import PostPage from "./component/Post/PostPage";
import Homepage from "./component/Homepage/Homepage.jsx";
import Fish from "./component/Playgound/Fishes.jsx";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <Box h={"100vh"} w={"100vw"} display={"flex"} bg={"white"}>
      {isAuthenticated && (
        <Box h={"100%"} w={"20%"}>
          <Sidebar />
        </Box>
      )}

      <Box h={"100%"} w={"80%"}>
        <Routes>
          <Route path="/" element={!isAuthenticated && <Homepage />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Fish /> : <Homepage />}
          />
          <Route
            path="/leaderboard"
            element={isAuthenticated ? <Leaderboard /> : <Homepage />}
          />
          <Route
            path="/post"
            element={isAuthenticated ? <PostPage /> : <Homepage />}
          />
        </Routes>
      </Box>
    </Box>
  );
}
