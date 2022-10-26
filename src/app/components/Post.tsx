import { Box, Divider } from "@mui/material";
import React from "react";
import { IPost } from "../model/IPost";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Post: React.FC<{
  post: IPost;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}> = ({ post, handleEdit, handleDelete }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={2}
      mb={2}
      gap={2}
      sx={{ border: "1px dashed grey" }}
    >
      <Box>{post.title}</Box>
      <Box>{post.body}</Box>
      <Box display="flex">
        <DeleteForeverIcon onClick={() => handleDelete(post.id)} />
        <EditIcon onClick={() => handleEdit(post.id)} />
        <Divider />
      </Box>
    </Box>
  );
};
