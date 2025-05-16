import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isImportfilePopupOpen: false,
};

export const importFile = createSlice({
  name: "import",
  initialState: initialValue,
  reducers: {
    openImportFilePopup: (state) => {
      state.isImportfilePopupOpen = true;
    },
    closeImportFilePopup: (state) => {
      state.isImportfilePopupOpen = false;
    },
    toggleImportFilePopup: (state) => {
      state.isImportfilePopupOpen = !state.isImportfilePopupOpen;
    },
  },
});

export const {
  openImportFilePopup,
  closeImportFilePopup,
  toggleImportFilePopup,
} = importFile.actions;

export default importFile.reducer;
