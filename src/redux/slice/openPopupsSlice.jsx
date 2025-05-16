import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
  isPopupOpen: false,
};

export const popups = createSlice({
  name: "popup",
  initialState: initialValue,
  reducers: {
    openPopup: (state) => {
      state.isPopupOpen = true;
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
    },
    togglePopup: (state) => {
      state.isPopupOpen = !state.isPopupOpen;
    },
  },
});

export const { openPopup, closePopup, togglePopup } = popups.actions;
export default popups.reducer;
