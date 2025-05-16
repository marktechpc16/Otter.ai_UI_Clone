import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isOpen: false,
};

export const rightSideBar = createSlice({
  name: "rsideBar",
  initialState: initialValue,
  reducers: {
    openRsideBar: (states) => {
      states.isOpen = true;
    },
    closeRsideBar: (states) => {
      states.isOpen = false;
    },
    toggleRsideBar: (states) => {
      states.isOpen = !states.isOpen;
    },
  },
});

export const { openRsideBar, closeRsideBar, toggleRsideBar } =
  rightSideBar.actions;
export default rightSideBar.reducer;
