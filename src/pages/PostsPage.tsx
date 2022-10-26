import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populatePost, updatePost } from "../app/features/post";
import { selectPost } from "../app/store";
import { useLocation } from "react-router-dom";
import { Post } from "../app/components/Post";
import { PostEditModal } from "../app/components/PostEditModal";
import { IPost } from "../app/model/IPost";

export const PostsPage: React.FC<{}> = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const posts: IPost[] = useSelector(selectPost);
  const [postsState, setPostsState] = useState<IPost[]>(posts);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number>();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const location = useLocation();
  const userId = location.search.substring(location.search.indexOf("=") + 1);
  const dispatch = useDispatch();
  const handleSave = () => {
    const selectedPost = posts.find((element) => element.id === selectedId);
    let newPost = { ...selectedPost };
    newPost.title = title;
    newPost.body = body;
    dispatch(updatePost(newPost));
    setOpenEditModal(false);
  };
  const handleEdit = (index: number) => {
    setSelectedId(index);
    setOpenEditModal(true);
  };
  const handleDelete = (index: number) => {
    let newPosts = posts.filter((element) => element.id !== index);
    dispatch(populatePost(newPosts));
  };
  useEffect(() => {
    setPostsState(posts);
  }, [posts]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=` + userId)
      .then((res) => {
        dispatch(populatePost(res.data));
      })
      .catch(function (error) {
        setShowError(true);
      });
  }, [userId, dispatch]);
  if (showError) {
    return <Box>Woops, something went wrong</Box>;
  }
  if (postsState.length < 1) {
    return <Box>No Posts</Box>;
  }
  return (
    <>
      <Box ml={4}>
        {postsState.map((post, index) => {
          return (
            <Post
              key={index}
              post={post}
              handleEdit={(index) => handleEdit(index)}
              handleDelete={(index) => handleDelete(index)}
            />
          );
        })}
      </Box>
      <PostEditModal
        openEditModal={openEditModal}
        setOpenEditModal={(check) => setOpenEditModal(check)}
        setTitle={(event) => setTitle(event)}
        setBody={(event) => setBody(event)}
        handleSave={() => handleSave()}
      />
    </>
  );
};
