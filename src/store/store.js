import {configureStore} from "@reduxjs/toolkit"
import saleProductsReducer from "./slices/saleProductsSlice"

export const store = configureStore({
    reducer: {
      saleProducts: saleProductsReducer
    }
  })