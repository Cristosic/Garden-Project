import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart: (state, action) => {
      const newProduct = state.products.find(el => el.id === action.payload.id);
      if (newProduct) {
        newProduct.amount += 1;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
      }
    },
    deleteOutCart: (state, action) => {
      state.products = state.products.filter(el => el.id !== action.payload.id);
    },
    increment: (state, action) => {
      const product = state.products.find(el => el.id === action.payload);
      if (product) {
        product.amount += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.products.find(el => el.id === action.payload);
      if (product && product.amount > 1) {
        product.amount -= 1;
      }
    }
  },
});

export const { addInCart, deleteOutCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;