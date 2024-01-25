import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from "./youtubeSlice";

const store=configureStore({
    {
        reducer:{
            youtube:youtubeSlice
        }
    }
});

export default store;