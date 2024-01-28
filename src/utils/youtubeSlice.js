import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
  name: "youtubeSlice",
  initialState: {
    popularVideos: [],
    recommendations:{},
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    addRecommendations: (state,action)=>{
      state.recommendations=Object.assign(state.recommendations,action.payload)
    }
  },
});

export const { addPopularVideos ,addRecommendations} = youtubeSlice.actions;
export default youtubeSlice.reducer;
