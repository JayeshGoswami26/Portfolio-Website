import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  isDarkMode: boolean;
};

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggle: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});
export const { themeToggle } = themeSlice.actions;
export default themeSlice.reducer;
