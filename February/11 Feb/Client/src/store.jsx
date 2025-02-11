import {configureStore} from "@reduxjs/toolkit";
import myReducer from "./counterSlice"
import colorReducer from "./colorSlice"
const store=configureStore({
    reducer:{
        MyCounter:myReducer,
        MyColor:colorReducer
    }

})
export default store;
