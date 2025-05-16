import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isNotifactionBarOpen: false,
};

export const notifactionPopup = createSlice({
  name: "notifactionPopup",
  initialState: initialValue,
  reducers: {
    openNotifactionOpup: (state) => {
      state.isNotifactionBarOpen = true;
    },
    closeNotifactionOpup: (state) => {
      state.isNotifactionBarOpen = false;
    },
    toggleNotifactionOpup: (state) => {
      state.isNotifactionBarOpen = !state.isNotifactionBarOpen;
    },
  },
});

export const {
  openNotifactionOpup,
  closeNotifactionOpup,
  toggleNotifactionOpup,
} = notifactionPopup.actions;

export default notifactionPopup.reducer;
