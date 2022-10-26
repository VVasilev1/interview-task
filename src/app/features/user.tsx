import { createSlice } from "@reduxjs/toolkit";
import { UserDefaultState } from "../model/IUser";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: [UserDefaultState] },
  reducers: {
    update: (state, action) => {
      const newState = state.value.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        } else {
          return element;
        }
      });
      state.value = newState;
    },
    populate: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { update } = userSlice.actions;

export const { populate } = userSlice.actions;

export default userSlice.reducer;
