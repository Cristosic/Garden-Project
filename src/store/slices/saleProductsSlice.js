import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  saleProductsData: [],
};

export const getSaleProducts = createAsyncThunk(
  "saleProducts/getSaleProducts",
  async () => {
    const res = await fetch("http://localhost:3333/products/all");
    const data = await res.json();
    return data.filter(el => el.discont_price !== null);
  }
);

const saleProductsSlice = createSlice({
  name: "saleProducts",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getSaleProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSaleProducts.fulfilled, (state, action) => {
        state.saleProductsData = action.payload;
        state.status = "ready";
      })
      .addCase(getSaleProducts.rejected, (state) => {
        state.status = "error";
      });      
  },
});

export default saleProductsSlice.reducer;


export const {} = saleProductsSlice.actions;
