import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { supabase } from '../../db/supabase';

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
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", body: ""})
  const { title, body } = post;

  async function fetchPosts() {
    const { data } = await supabase.from('posts').select('*');
    setPosts(data);
  }

  async function createPost() {
    await supabase.from('posts').insert([{ title, body }]).single()
    setPost({ title: "", body: ""});
    fetchPosts();
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  const click = () => {
    alert(title)
  }

  return (
    <Box p={"1em"} overflowY="auto" position="fixed" w = {"full"} spacing = {4} >
      <Box p = {"2em"} mt={"1em"} mb={"3em"} bg = {"white"} borderRadius={"lg"} boxShadow={"lg"} position = {"relative"} top = {"0"} >
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
      <Box mt={"5em"}  positon = "relative" h={"calc(100vh - 5em)"}>
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
      <Box mt = {"5em"} w = {"full"} p={"1em"} boxShadow={"lg"} borderRadius={"lg"} bg={"white"} position = {"fixed"} bottom = {"0"}>
        <Heading>Create new post</Heading>
          <Input placeholder = "Title" title = {title} onChange={e =>setPost({...post, title: e.target.value})}/>
          <Input placeholder = "Content" body = {body} onChange={e =>setPost({...post, body: e.target.value})}/>
      </Box>
    </Box>
  );
}
