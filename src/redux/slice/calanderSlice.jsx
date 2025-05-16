import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isCalanderOpen: false,
};

export const calander = createSlice({
  name: "calander",
  initialState: initialValue,
  reducers: {
    openCalander: (state) => {
      state.isCalanderOpen = true;
    },

    closeCalander: (state) => {
      state.isCalanderOpen = false;
    },

    toggleCalander: (state) => {
      state.isCalanderOpen = !state.isCalanderOpen;
    },
  },
});

export const { openCalander, closeCalander, toggleCalander } = calander.actions;
export default calander.reducer;
