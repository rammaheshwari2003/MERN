// import { useRef } from "react";



// const App=()=>{
//   const myRef=useRef("");

//   const myVal=()=>{
//     myRef.current.style.color="yellow";
//     myRef.current.style.backgroundColor="gray";
//     myRef.current.style.padding="20px";
//     myRef.current.style.border="2px solid black";
//     myRef.current.style.fontSize="50px";
//   }
  
//   const myVal2=()=>{
//     myRef.current.style=""
//   }

//   return(
//     <>
      
//       <h1>Welcome</h1>
//       <button onClick={myVal}>Click</button>
//       <button onClick={myVal2}>Click</button>
//       <br />

//       <div ref={myRef}>Cybrom Bhopal</div>
       
//     </>
//   )
// }
// export default App;


/*
import { useRef } from "react";


const App=()=>{
  
  const myRef=useRef("");

  const val1=()=>{
    myRef.current.style.fontSize="30px";
  }
  const val2=()=>{
    myRef.current.style.border="2px solid black";
    myRef.current.style.backgroundColor="Yellow";
    
  }
  const val3=()=>{
    myRef.current.style.borderRadius="50%";
    myRef.current.style.width="150px";
    myRef.current.style.height="150px";
    myRef.current.style.padding="80px";
    myRef.current.style.textAlign="center";

    
  }
  

  return(
    <>
      
      <h1>Welcome To Cybrom</h1>
      <button onClick={val1}>Click 1</button>
      <button onClick={val2}>Click 2</button>
      <button onClick={val3}>Click 3</button> <br />
      <div ref={myRef}>Welcome to Bhopal</div>
       
    </>
  )
}
export default App;

*/

import { useReducer } from "react";

const App=()=>{


  // const reducers=(state, actions)=>{
  //   switch(actions){
  //     case "Increment" : return state+1;
  //     case "Decrement" : return state>0 ? state-1 : state;
  //   }
  // }
  
  // const [count, dispatch]=useReducer(reducers, 0);



    const changeColor=(state, actions)=>{
        switch(actions){
          case "redcolor": return state="red";
          case "greencolor": return state="green";
          case "bluecolor": return state="blue";
          case "yellowcolor": return state="yellow";
        }
    }

  const [color, mydis]=useReducer(changeColor, "pink");
  
  
  return(
    <>
        {/* <button onClick={()=>{dispatch("Increment")}}>Increment</button>
        <h1>Count : {count} </h1>
        <button onClick={()=>{dispatch("Decrement")}}>Decrement</button> */}


        <button onClick={()=>{mydis("redcolor")}}>Red</button>
        <button onClick={()=>{mydis("greencolor")}}>green</button>
        <button onClick={()=>{mydis("bluecolor")}}>Blue</button>
        <button onClick={()=>{mydis("yellowcolor")}}>Yellow</button>
        <br />
        <div style={{width:"350px" , backgroundColor:color, height:"250px"}}></div>
    </>
  )
}
export default App;