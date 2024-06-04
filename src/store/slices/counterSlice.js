import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { productId } = action.payload;
      if (state[productId]) {
        state[productId]++;
      } else {
        state[productId] = 1;
      }
    },
    decrement: (state, action) => {
      const { productId } = action.payload;
      if (state[productId] && state[productId] > 1) {
        state[productId]--;
      }
    },
    setCounter: (state, action) => {
      const { productId, amount } = action.payload;
      state[productId] = amount;
    }
  },
});

export const { increment, decrement, setCounter } = counterSlice.actions;

export default counterSlice.reducer;