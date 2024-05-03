import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

export const favoritesCardSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const list = state.card.find(el => el.id === action.payload.id);
      if (!list) {
        state.card.push(action.payload);
      }
    },
    deleteCard: (state, action) => {
      state.card = state.card.filter(el => el.id !== action.payload.id);
    },
  }
});

export const { addCard, deleteCard } = favoritesCardSlice.actions;

export default favoritesCardSlice.reducer;
