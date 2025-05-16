import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isNavPopupOpen: false,
  setPopupValue: "Home",
};

export const popupNavBar = createSlice({
  name: "navPopup",
  initialState: initialValue,
  reducers: {
    closeNavPopup: (state) => {
      state.isNavPopupOpen = false;
    },
    openNavPopup: (state) => {
      state.isNavPopupOpen = true;
    },
    toggleNavPopup: (state) => {
      state.isNavPopupOpen = !state.isNavPopupOpen;
    },
    setNavItem: (state, actions) => {
      state.setPopupValue = actions.payload;
      state.isNavPopupOpen = false;
    },
  },
});

export const { closeNavPopup, openNavPopup, toggleNavPopup, setNavItem } =
  popupNavBar.actions;

export default popupNavBar.reducer;
