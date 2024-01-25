import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
  name: "youtubeSlice",
  initialState: {
    popularVideos: [],
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export const { addPopularVideos } = youtubeSlice.actions;
export default youtubeSlice.reducer;
