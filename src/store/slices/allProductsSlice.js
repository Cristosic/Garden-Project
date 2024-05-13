import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allProductsData: [],
};

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async () => {
    const res = await fetch("http://localhost:3333/products/all");
    const data = await res.json();
    return data;
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProductsData = action.payload;
        state.status = "ready";
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = "error";
      });      
  },
});

export default allProductsSlice.reducer;


export const {} = allProductsSlice.actions;
