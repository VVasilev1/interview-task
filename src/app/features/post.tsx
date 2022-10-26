import { createSlice } from "@reduxjs/toolkit";
import { PostDefaultState } from "../model/IPost";

export const postSlice = createSlice({
  name: "post",
  initialState: { value: [PostDefaultState] },
  reducers: {
    updatePost: (state, action) => {
      const newState = state.value.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        } else {
          return element;
        }
      });
      state.value = newState;
    },
    populatePost: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { updatePost } = postSlice.actions;

export const { populatePost } = postSlice.actions;

export default postSlice.reducer;
