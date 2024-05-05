import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addNewUser } = userSlice.actions;
export default userSlice.reducer;