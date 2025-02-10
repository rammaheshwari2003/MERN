// import { useMemo, useState } from "react";

// const App=()=>{
//   const [add, setAdd]=useState(0);
//   const [sub, setSub]=useState(100);

//   const mymulti=useMemo(()=>{
//     console.log("*****")
//     return add*2;
//   }, [add])

//   return(
//     <>
//       <h1>Multipication : {mymulti}</h1>
      
//       <h1>Addition : {add}</h1>
  
//       <button onClick={()=>{setAdd(add+1)}}>Add</button>

//       <h1>Subtraction : {sub}</h1>
//       <button onClick={()=>{setSub(sub-1)}}>Sub</button>
    
//     </>
//   )
// }
// export default App;









// import { useState,useMemo } from "react";

// const App=()=>{
//   const [num, setNum]=useState(0);
//   const [city, setCity]=useState("");

//   const MyMulti=useMemo(mymulti, [num])

//     function mymulti(){
//       for(var i=0; i<1000000000; i++){}
//         return num*2;
//     }


//   return(
//     <>
//         Enter Number : <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}/> 
//         Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />

//         {/* <h1>Multi : {mymulti()}</h1> */}
//         <h1>Multi : {MyMulti}</h1>

        
//     </>
//   )
// }
// export default App;




          /* --------------- Call Back  ------------- */


import Call2 from "./Call2";
import { useCallback, useState } from "react";

  const App=()=>{
    const [count, setCount]=useState(0);
    const [task, setTask]=useState([]);

    const myAdd=()=>{
      setTask(values=>([...values, "New Task"]))
    }

    const MyTaskAdd= useCallback(myAdd, [task])


    return(
      <>
          <Call2 task={task} addtask={MyTaskAdd} />

          <button onClick={()=>{setCount(count+1)}}>Click Here</button>
          Count : {count}
    
      </>
    )
  }
  export default App;