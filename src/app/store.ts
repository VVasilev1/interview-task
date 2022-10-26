import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import postReducer from "./features/post";
export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer
  }
});

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState) => state.user.value;

export const selectPost = (state: RootState) => state.post.value;
