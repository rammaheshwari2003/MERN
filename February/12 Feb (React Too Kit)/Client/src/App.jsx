import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./colorSlice"; // Corrected the import statement
import { useState } from "react";

import { addTask,delTask,taskComp,inComTask } from "./todoSlice";

const App = () => {

    const [val, setVal]=useState("");

    const dispatch = useDispatch();
    const bgColor = useSelector(state => state.MyColor.color);



    /* Todo List   */ 
    const [task, setTask]=useState("");
    const mydis=useDispatch();
    const MyData=useSelector(state=>state.todo.Task);

    let sno=0;
    const ans=MyData.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                
                <td>
                    {key.taskStatus ?  (<>{key.data}</>) : (<>
                    <span style={{color:"red", textDecoration:"line-through"}}>{key.data}</span></>) }
                </td>
                <td>
                <button onClick={()=>{mydis(delTask({id:key.id}))}}>Delete</button>
                </td>

                <td>
                    {key.taskStatus ? (<>
                        <button onClick={()=>{mydis(inComTask({id:key.id}), taskStatus=true)}}>InComplete</button>

                        </>) : (<>
                    <button onClick={()=>{mydis(taskComp({id:key.id}), taskStatus=false)}}>Complete</button>

                    </>)}
                    
                </td>
            </tr>
        </>
        )
    })



    return (
        <>
            <center>

                <h1>Background Color Change</h1>
                Enter Color : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
                <button onClick={() => dispatch(changeColor({bgColor:val}))}>Click Here</button> <br /><br />
                {/* <button onClick={() => dispatch(changeColor(val))}>Click Here</button> <br /><br /> */}

                <div style={{ width: "200px", height: "150px", backgroundColor: bgColor }}></div>



            <hr /><hr /> 


            Enter Task : <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} /> 
            <button onClick={()=>{mydis(addTask({id:Date.now(),data:task}))}}>Add</button> 
            </center>

         <br />

        <table width="100%" border={2}>
            <tr>
                <th>Sno</th>
                <th>Task</th>
                <th>Delete</th>
                <th>Done / Not </th>
                <th>Edit</th>
            </tr>
            {ans}
        </table>


        </>
    );
}

export default App;

