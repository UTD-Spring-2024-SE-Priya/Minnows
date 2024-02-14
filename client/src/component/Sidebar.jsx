import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBookReader, FaSignOutAlt } from "react-icons/fa";
//import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  VStack,
  Button,
  Icon,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";

export default function Sidebar() {
  const [selected, setSelected] = useState("Home");
  //const navigate = useNavigate();
  //const { logout } = useAuth0();

  const menuItems = [
    { name: "Home", icon: AiTwotoneHome, path: "/home" },
    { name: "Profile", icon: CgProfile, path: "/profile" },
    { name: "Leaderboard", icon: "", path: "/leaderboard" },
    { name: "Post", icon: "", path: "/post" },
    { name: "Store", icon: "", path: "/Store" },
  ];

  const handleItemClick = (name, path) => {
    setSelected(name);
    //navigate(path);
    // if (name !== "Logout") {
    //   navigate(path);
    // } else {
    //   logout({ returnTo: window.location.origin });
    // }
  };

  const activeBgColor = "green.300";
  const activeIconColor = "black";
  const inactiveIconColor = "black";
  const activeTextColor = "black";
  const inactiveTextColor = "black";

  return (
    <Center position={"absolute"} zIndex={100} w={"20%"} h={"100%"}>
      <Box
        position="fixed"
        h="94vh"
        w="18vw"
        zIndex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p={4}
        borderRadius="1.5em"
        boxShadow={"lg"}
        opacity={9}
      >
        <VStack spacing={2} align="center" mt={10}>
          <Heading>LearnLift</Heading>
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant={selected === item.name ? "solid" : "ghost"}
              backgroundColor={
                selected === item.name ? activeBgColor : "transparent"
              }
              leftIcon={<Icon as={item.icon} w={5} h={5} />}
              color={
                selected === item.name ? activeIconColor : inactiveIconColor
              }
              onClick={() => handleItemClick(item.name, item.path)}
              borderRadius="full"
              size="lg"
              aria-label={item.name}
              justifyContent="start"
              pl={"0.5em"}
              width="full"
            >
              <Text
                color={
                  selected === item.name ? activeTextColor : inactiveTextColor
                }
                fontSize="md"
              >
                {item.name}
              </Text>
            </Button>
          ))}
        </VStack>
        <VStack mb={"1em"}>
          {/* <Button
            leftIcon={<FaSignOutAlt />}
            variant="ghost"
            colorScheme="gray"
            //onClick={() => handleItemClick("Logout")}
            borderRadius="full"
            size="lg"
            aria-label="Logout"
            justifyContent="start"
            pl={8}
            width="full"
          >
            Logout
          </Button> */}
        </VStack>
      </Box>
    </Center>
  );
}
