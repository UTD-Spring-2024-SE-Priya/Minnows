import React from "react";
import { Box, Center, VStack } from "@chakra-ui/react";
import PostItem from "./PostItem";
export default function PostPage() {
  return (
    <VStack h={"auto"} w={"100%"} alignContent={"center"} p={"1em"} >
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </VStack>
  );
}
