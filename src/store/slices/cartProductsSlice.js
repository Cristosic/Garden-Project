import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
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
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    deleteOutCart: (state, action) => {
      state.products = state.products.filter(el => el.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { addInCart, deleteOutCart } = cartSlice.actions;

export default cartSlice.reducer;