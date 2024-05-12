import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: {} 
};

export const favoritesCardSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      if (!state.card[id]) {
        state.card[id] = action.payload;
      }
    },
    deleteCard: (state, action) => {
      const { id } = action.payload;
      const { [id]: deleteElement, ...updatedCard } = state.card;
      state.card = updatedCard;
    },
  }
});

export const { addCard, deleteCard } = favoritesCardSlice.actions;

export default favoritesCardSlice.reducer;
