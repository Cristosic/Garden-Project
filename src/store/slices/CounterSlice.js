import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState, 
  reducers: {
    increase: (state) => {
      state.counter += 1;
    },
    decrease: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
