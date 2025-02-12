import {configureStore} from "@reduxjs/toolkit";
import colorReducer from "./colorSlice"
const store=configureStore({
    reducer:{
        MyColor:colorReducer
    }

})
export default store;
