import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    showSidebar:false,
  },
  reducers: {
    toggleShowSidebar: (state, action) => {
      state.showSidebar = !state.showSidebar;
    },
  
  },
});

export const { toggleShowSidebar ,show} = appSlice.actions;
export default appSlice.reducer;
