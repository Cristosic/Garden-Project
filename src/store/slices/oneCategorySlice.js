import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  oneCategoriesData: [],
  filterProductsData: [],
  status: "",
  error: "",
};

export const getOneCategory = createAsyncThunk(
  "oneCategory/getOneCategory",
  async (categoryId) => {
    try {
      const res = await fetch(`http://localhost:3333/categories/${categoryId}`);
      if (!res.ok) {
        throw new Error("No data found");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const oneCategorySlice = createSlice({
  name: "oneCategory",
  initialState,
  reducers: {
    //Сортировка select
    sortOneCategoryAction: (state, action) => {
      const select = action.payload;
      if (select === "default") {
        state.filterProductsData = [...state.oneCategoriesData];
      } else {
        const sortCard = [...state.filterProductsData];
        if (select === "price-high-low") {
          sortCard.sort((a, b) => b.price - a.price);
        } else if (select === "price-low-high") {
          sortCard.sort((a, b) => a.price - b.price);
        } else if (select === "newest") {
          sortCard.sort((a, b) => a.title.localeCompare(b.title));
        }
        state.filterProductsData = sortCard;
      }
    },
    //Фильтрация по цене from = to
    filterOneCategoryPriceAction: (state, action) => {
      const { min_price, max_price } = action.payload;
      state.filterProductsData = state.oneCategoriesData.filter(
        (el) =>
          (min_price === 0 || el.price >= min_price) &&
          (max_price === Infinity || el.price <= max_price)
      );
    },
    //Фильтрация чекбокс
    filterOneCategorySaleAction: (state, action) => {
      if (action.payload) {
        state.filterProductsData = state.oneCategoriesData.filter(
          (product) => product.discont_price !== null
        );
      } else {
        state.filterProductsData = [...state.oneCategoriesData];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.oneCategoriesData = action.payload;
        state.filterProductsData = action.payload;
        state.status = "ready";
      })
      .addCase(getOneCategory.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default oneCategorySlice.reducer;
export const {
  sortProductsAction,
  filterPriceAction,
  filterSaleProductsAction,
} = oneCategorySlice.actions;
