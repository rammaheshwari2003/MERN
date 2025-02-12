import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"MyColor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state, actions)=>{
        state.color=actions.payload.bgColor;
        // state.color=actions.payload;
    }
}
})
export const {changeColor}=colorSlice.actions;
export default colorSlice.reducer;