import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { sidebarToggle } = uiSlice.actions;

export default uiSlice.reducer;
