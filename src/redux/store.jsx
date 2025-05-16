import { configureStore } from "@reduxjs/toolkit";
import rightSideBarReducer from "./slice/rightSideBarToggle";
import popupNavBarReducer from "./slice/navBarPopupSlice";
import notifactionPopupReducer from "./slice/notifactionPopupSlice";
import profilePopupBarReducer from "./slice/profulePopupSlice";
import popupsReducer from "./slice/openPopupsSlice";
import importFileReducer from "./slice/importFileSlice";
import calanderReducer from "./slice/calanderSlice";

export const store = configureStore({
  reducer: {
    rsideBar: rightSideBarReducer,
    navPopup: popupNavBarReducer,
    notifactionPopup: notifactionPopupReducer,
    profilePopup: profilePopupBarReducer,
    popupsNormal: popupsReducer,
    meetingFiles: importFileReducer,
    calanderOpen: calanderReducer,
  },
});
