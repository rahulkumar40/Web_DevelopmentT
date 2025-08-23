import { createSlice } from "@reduxjs/toolkit";
export const AppSlice = createSlice({
  name: "blog",
  initialState: [],
  reducers: {
    addBlog: () => {},
    removeBlog: () => {},
  },
});

export const { addBlog, removeBlog } = AppSlice.actions;
export default AppSlice.reducer;
