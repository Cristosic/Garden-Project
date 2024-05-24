import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный thunk для получения деталей продукта
export const fetchProductDetails = createAsyncThunk(
  'product/fetchProductDetails',
  async (productId) => {
    const response = await fetch(`http://localhost:3333/products/${productId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data[0];  // Предполагается, что данные продукта находятся в первом элементе массива
  }
);

const oneProductSlice = createSlice({
  name: 'oneProduct',
  initialState: {
    product: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default oneProductSlice.reducer;



