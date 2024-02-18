import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";

const StoreItem = ({ item }) => {
  const toast = useToast();

  const redeemItem = () => {
    toast({
      title: `Redeemed ${item.title}`,
      description: "We've redeemed this item for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={item.image} alt={item.title} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text
            fontWeight="semibold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            {item.title}
          </Text>
        </Box>
        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {item.description}
        </Text>
        <Button onClick={redeemItem} colorScheme="teal" mt="3">
          Redeem for {item.price}
        </Button>
      </Box>
    </Box>
  );
};

const Store = () => {
  const storeItems = [
    // ...populate with items
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {storeItems.map((item) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </SimpleGrid>
  );
};

export default Store;
