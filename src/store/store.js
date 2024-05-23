import {configureStore} from "@reduxjs/toolkit"
import allProductsReducer from "./slices/allProductsSlice"
import categoriesReducer from './slices/categoriesSlice'
import favoritesReducer from './slices/favoritesSlice';
import oneCategoryReducer from "./slices/oneCategorySlice";
import themeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer: {
      allProducts: allProductsReducer,
      categories: categoriesReducer,
      favorites: favoritesReducer,
      oneCategory: oneCategoryReducer,
      theme: themeReducer
    }
  })