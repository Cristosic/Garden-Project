import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  oneCategoriesData: [], 
  status: '', 
  error: ''
};

export const getOneCategory = createAsyncThunk(
  'oneCategory/getOneCategory',
  async (categoryId) => {
    try {
      const res = await fetch(`http://localhost:3333/categories/${categoryId}`);
      if (!res.ok) {
        throw new Error('No data found');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const oneCategorySlice = createSlice({
  name: 'oneCategory',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.oneCategoriesData = action.payload;
        state.status = 'ready';
      })
      .addCase(getOneCategory.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  }
});

export default oneCategorySlice.reducer;