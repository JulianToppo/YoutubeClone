import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from "./youtubeSlice";
import appSlice from "./appSlice";
import livechatSlice from "./livechatSlice";

const store=configureStore(
    {
        reducer:{
            youtube:youtubeSlice,
            appSlice:appSlice,
            liveChat:livechatSlice,
        }
    }
);

export default store;