import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from "./youtubeSlice";
import appSlice from "./appSlice";

const store=configureStore(
    {
        reducer:{
            youtube:youtubeSlice,
            appSlice:appSlice,
        }
    }
);

export default store;