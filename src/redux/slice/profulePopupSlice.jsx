import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isProfilePopupBarOpen: false,
};

export const profilePopupBar = createSlice({
  name: "profilePopupBar",
  initialState: initialValue,
  reducers: {
    openProfilePopupBar: (state) => {
      state.isProfilePopupBarOpen = true;
    },
    closeProfilePopupBar: (state) => {
      state.isProfilePopupBarOpen = false;
    },
    toggleProfilePopupBar: (state) => {
      state.isProfilePopupBarOpen = !state.isProfilePopupBarOpen;
    },
  },
});

export const {
  openProfilePopupBar,
  closeProfilePopupBar,
  toggleProfilePopupBar,
} = profilePopupBar.actions;
export default profilePopupBar.reducer;
