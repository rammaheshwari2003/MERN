import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:"todo",
    initialState:{
        Task:[]
    },
    reducers:{
        addTask:(state, actions)=>{
            state.Task.push(actions.payload);
        },
        delTask:(state, actions)=>{
            state.Task=state.Task.filter((key)=> key.id != actions.payload.id );
        },
 
        taskComp:(state, actions)=>{
            for(var i=0; i<state.Task.length; i++){
                if(state.Task[i].id==actions.payload.id){
                    state.Task[i].taskStatus=false;
                }
            }
        },
        inComTask:(state, actions)=>{
            for(var i=0; i<state.Task.length; i++){
                if(state.Task[i].id==actions.payload.id){
                    state.Task[i].taskStatus=true;
                }
            }
        }
    }
}) 
export const {addTask, delTask, taskComp, inComTask}= todoSlice.actions;
export default todoSlice.reducer;
