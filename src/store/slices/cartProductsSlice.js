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
  },
});

export const { addInCart, deleteOutCart } = cartSlice.actions;

export default cartSlice.reducer;