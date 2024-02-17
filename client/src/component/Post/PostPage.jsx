import React from "react";
import { IoSearchSharp } from "react-icons/io5";

import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  VStack,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import PostItem from "./PostItem";

export default function PostPage() {
  return (
    <Box p={"1em"} overflowY="auto" position="relative" h={"100%"}>
      <Box mt={"1em"} mb={"2em"}>
        <Heading>Name the of Thread</Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={IoSearchSharp}></Icon>
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search by author name, title content"
          />
        </InputGroup>
      </Box>
      <VStack w={"100%"} spacing={"1em"}>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
      </VStack>
    </Box>
  );
}
