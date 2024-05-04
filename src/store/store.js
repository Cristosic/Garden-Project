import { configureStore } from "@reduxjs/toolkit";
import saleProductsReducer from "./slices/saleProductsSlice";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    saleProducts: saleProductsReducer,
    categories: categoriesReducer
  },
});
