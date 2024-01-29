import { createSlice } from "@reduxjs/toolkit";


const liveChatSlice= createSlice({
    name:"liveChatSlice",
    initialState:{
        liveChatArray:[],
    },
    reducers:{
        addLiveChat:(state,action)=>{
            if(state.liveChatArray.length===3){
                state.liveChatArray.splice(2,1);
            }

            state.liveChatArray=[action.payload,...state.liveChatArray];
        }
    }
})

export const {addLiveChat}=liveChatSlice.actions;
export default liveChatSlice.reducer