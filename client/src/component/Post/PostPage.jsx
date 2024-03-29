import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import {
  Box,
  Heading,
  Input,
  Flex,
  VStack,
  InputLeftElement,
  Icon,
  Button,
  InputGroup 
} from "@chakra-ui/react";
import PostItem from "./PostItem";
import { supabase } from '../../db/supabase';
import { postController } from '../../api/postController'

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });
  const { title, content } = post;

  useEffect(() => {
    fetchPosts();
  }, []);
  
  async function fetchPosts() {
    const { data } = await supabase.from('posts').select('*');
    setPosts(data);
}
  useEffect(() => {
    fetchPosts();
  }, []);

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
      {
        posts.map(post => (
          <PostItem
          authorName = { post.author_id }
            title = { post.title }  
            content = { post.body }
            />
        ))
      }    
      </VStack>
    </Box>
  );
}