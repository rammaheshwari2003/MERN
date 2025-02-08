import { useRef } from "react";


const App=()=>{
  const myRef=useRef("");

  const myVal=()=>{
    myRef.current.style.color="yellow";
    myRef.current.style.backgroundColor="gray";
    myRef.current.style.padding="20px";
    myRef.current.style.border="2px solid black";
    myRef.current.style.fontSize="50px";
  }

  return(
    <>
      
      <h1>Welcome</h1>
      <button onClick={myVal}>Click</button>
      <br />

      <div ref={myRef}>Cybrom Bhopal</div>
       
    </>
  )
}
export default App;