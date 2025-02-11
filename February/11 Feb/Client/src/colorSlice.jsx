import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"MyColor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state)=>{
        state.color="blue";
    }
}
})
export const {changeColor}=colorSlice.actions;
export default colorSlice.reducer;