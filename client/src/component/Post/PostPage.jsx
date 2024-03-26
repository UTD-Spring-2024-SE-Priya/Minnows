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


export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');

  const fetchPosts = async () => {
    const { data } = await supabase.from('posts').select('*');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  const submitPost = async () => {
    if (!postContent) {
      alert("Please enter some text to create a post.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .insert([{ body: postContent }]);

      if (error) {
        throw error;
      }

      if (data) {
        alert("Post created successfully!");
        setPostContent('');
        fetchPosts();
      }
    } catch (error) {
      alert(`Error creating post: ${error.message}`);
    }
  };

  return (
    <Box p={"1em"} overflowY="auto" position="relative" h={"100%"}>
      <VStack spacing={"1em"} overflowY="auto" h="calc(100% - 50px)">
        <Box mt={"1em"} mb={"2em"}>
          <Heading>Name of the Thread</Heading>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={IoSearchSharp} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by author name, title content"
            />
          </InputGroup>
        </Box>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            authorName={post.author_id}
            title={post.title}
            content={post.body}
          />
        ))}
      </VStack>
      <Flex
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        p="1em"
        justifyContent="center"
        bgColor="white"
        boxShadow="md"
      >
        <InputGroup size="md" maxWidth="600px">
          <InputLeftElement pointerEvents="none">
            <Icon as={IoSearchSharp} />
          </InputLeftElement>
          <Input
            type="text"
            value={postContent}
            onChange={handlePostChange}
            placeholder="Create a post"
          />
        </InputGroup>
        <Button onClick={submitPost} ml="4">Post</Button>
      </Flex>
    </Box>
  );
}
