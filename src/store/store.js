import {configureStore} from "@reduxjs/toolkit"
import saleProductsReducer from "./slices/saleProductsSlice"
import categoriesReducer from './slices/categoriesSlice'
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
    reducer: {
      saleProducts: saleProductsReducer,
      categories: categoriesReducer,
      favorites: favoritesReducer
    }
  })