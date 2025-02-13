import {configureStore} from "@reduxjs/toolkit";
import colorReducer from "./colorSlice"

import MyTodo from "./todoSlice";

const store=configureStore({
    reducer:{
        MyColor:colorReducer,
        todo:MyTodo
    }

})
export default store;
