import React, { useState } from "react";
import { ChakraProvider, Box, Button, useToast } from "@chakra-ui/react";

const Fish = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant="ghost"
    position="absolute"
    left={`${Math.random() * 80}%`}
    top={`${Math.random() * 80}%`}
  >
    🐟
  </Button>
);

export default function Fishes() {
  const [fishes, setFishes] = useState([]);
  const toast = useToast();

  const addFish = () => {
    const newFishId = fishes.length + 1;
    setFishes([...fishes, newFishId]);
  };

  const handleFishClick = (fishId) => {
    toast({
      title: `Fish ${fishId} clicked!`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box position="relative" w="100vw" h="100vh" bg="blue.200">
        {fishes.map((fishId) => (
          <Fish key={fishId} onClick={() => handleFishClick(fishId)} />
        ))}
        <Button
          colorScheme="teal"
          position="fixed"
          bottom="4"
          right="4"
          onClick={addFish}
        >
          Add Fish
        </Button>
      </Box>
    </ChakraProvider>
  );
}
