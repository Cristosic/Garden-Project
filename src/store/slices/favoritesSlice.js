import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: JSON.parse(localStorage.getItem("favoritesCards")) || []
};

export const favoritesCardSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const card = state.cards.find(el => el.id === action.payload.id);
      if (!card) {
        state.cards.push(action.payload);
        localStorage.setItem("favoritesCards", JSON.stringify(state.cards));
      }
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter(el => el.id !== action.payload.id);
      localStorage.setItem("favoritesCards", JSON.stringify(state.cards));
    },
  }
});

export const { addCard, deleteCard } = favoritesCardSlice.actions;

export default favoritesCardSlice.reducer;
