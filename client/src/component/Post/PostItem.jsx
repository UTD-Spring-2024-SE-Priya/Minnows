import React from "react";
import {
  Box,
  Heading,
  Center,
  Avatar,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function PostItem() {
  const authorName = "author Name";
  const authorAvatar = "";
  const title = "title holder";
  const content =
    "In this space, imagine the words that will soon breathe life into ideas, where sentences flow like rivers, charting the course of thought and imagination. This placeholder is but a temporary guardian of the potential that lies within, waiting for the final narrative to take shape. It stands in for stories yet to be told, arguments yet to be made, and insights yet to be shared, ensuring the layout's integrity remains undisturbed. As you look upon this text, envision the transformation that will occur, as precise words replace these generic ones, crafting a message tailored to enlighten, persuade, or entertain.";
  const likes = 0;
  const commentsNumber = 0;

  //do a dropdown for the detail for the comments

  return (
    <Box w={"full"} p={"1em"} boxShadow={"lg"} borderRadius={"lg"} bg={"white"}>
      <Box display={"flex"}>
        <Avatar></Avatar>
        <Text mr={"1em"} fontSize={"1em"}>
          {authorName}
        </Text>
        <Heading>{title}</Heading>
      </Box>
      <Box mt={"1em"}>{content}</Box>
      <ButtonGroup mt={"1em"}>
        <Button>{likes}</Button>
        <Button> Dislike button</Button>
        <Button>Share</Button>
        <Button>Comment</Button>
        <Button>Help</Button>
      </ButtonGroup>
    </Box>
  );
}
