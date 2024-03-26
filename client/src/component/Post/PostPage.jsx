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
  const [postTitle, setPostTitle] = useState('');

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

  const handleTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const submitPost = async () => {
    if (!postContent || !postTitle) {
      alert("Please enter a title and some text for the post.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .insert([{ title: postTitle, body: postContent }]);

      if (error) {
        throw error;
      }

      if (data) {
        alert("Post created successfully!");
        setPostTitle('');
        setPostContent('');
        fetchPosts();
      }
    } catch (error) {
      alert(`Error creating post: ${error.message}`);
    }
  };

  return (
    <Box p={"1em"} overflowY="auto" position="relative" h={"100%"}>
      <VStack spacing={"1em"} overflowY="auto" h="calc(100% - 150px)">
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
        direction="column"
        position="fixed"
        bottom="0"
        left="20%"
        right="0"
        p="1em"
       
      >
        <InputGroup size="md">
          <Input
            placeholder="Title of the post"
            value={postTitle}
            onChange={handleTitleChange}
          />
        </InputGroup>
        <Flex mt="4">
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
            </InputLeftElement>
            <Input
              type="text"
              value={postContent}
              onChange={handlePostChange}
              placeholder="Content of the post"
            />
          </InputGroup>
          <Button onClick={submitPost} ml="4">Post</Button>
        </Flex>
      </Flex>
    </Box>
  );
}
