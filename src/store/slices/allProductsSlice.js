import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allProductsData: [],
  filterProductsData: [],
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
    sortProductsAction: (state, action) => {
      const sortType = action.payload;
      if (sortType === "default") {
        state.filterProductsData = [...state.allProductsData];
      } else {
        const sortCard = [...state.filterProductsData];
        if (sortType === "price-high-low") {
          sortCard.sort((a, b) => b.price - a.price);
        } else if (sortType === "price-low-high") {
          sortCard.sort((a, b) => a.price - b.price);
        }
        state.filterProductsData = sortCard;
      }
    },
    filterPriceAction: (state, action) => {
      const { min_price, max_price } = action.payload;
      state.filterProductsData = state.allProductsData.filter(
        (el) =>
          (!min_price || el.price >= min_price) &&
          (!max_price || el.price <= max_price)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProductsData = action.payload;
        state.filterProductsData = action.payload;
        state.status = "ready";
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default allProductsSlice.reducer;

export const { sortProductsAction, filterPriceAction } =
  allProductsSlice.actions;
