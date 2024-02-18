import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Button,
  Badge,
  useToast,
} from "@chakra-ui/react";

// Mock data for store items
const storeItems = [
  {
    id: 1,
    title: "Travel Ticket",
    description: "get a flight",
    price: 70,
    imageUrl: "time_travel_ticket.png",
    coinIcon: "coin_icon.png",
  },
  {
    id: 2,
    title: "30-Day Subscription",
    description: "Premium",
    price: 5000,
    imageUrl: "premium_subscription.png",
    coinIcon: "coin_icon.png",
  },
  {
    id: 3,
    title: "T-Shirt",
    description: "High quality t-shirts",
    price: 6000,
    imageUrl: "tshirt.png",
    coinIcon: "coin_icon.png",
  },
];

const StoreItem = ({ item }) => {
  const toast = useToast();

  const redeemItem = () => {
    toast({
      title: `You redeemed ${item.title}!`,
      description: "This is where redemption logic would be implemented.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.700"
      color="white"
    >
      <Image
        src={item.imageUrl}
        alt={`${item.title}`}
        fit="cover"
        w="100%"
        h="200px"
      />

      <Box p={5}>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {item.title}
        </Text>
        <Text mt={2}>{item.description}</Text>
        <Box mt={2}>
          <Button onClick={redeemItem} colorScheme="orange" size="sm">
            <Image src={item.coinIcon} boxSize="20px" ml={2} />
            {item.price} Coins
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Store = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={8}>
        {storeItems.map((item) => (
          <StoreItem key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Store;
