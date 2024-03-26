import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  VStack,
  InputLeftElement,
  Icon,
  Button,
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
        fetchPosts(); // Refresh the posts list after a successful creation
      }
    } catch (error) {
      alert(`Error creating post: ${error.message}`);
    }
  };

  return (
    <Box p={"1em"} overflowY="auto" position="relative" h={"100%"}>
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
      <InputGroup mt={"1em"} mb={"2em"}>
        <InputLeftElement pointerEvents="none">
          <Icon as={IoSearchSharp} />
        </InputLeftElement>
        <Input
          type="text"
          value={postContent}
          onChange={handlePostChange}
          placeholder="Create a post"
        />
        <Button onClick={submitPost}>Post</Button>
      </InputGroup>
      <VStack w={"100%"} spacing={"1em"}>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            authorName={post.author_id}
            title={post.title}
            content={post.body}
          />
        ))}
      </VStack>
    </Box>
  );
}
