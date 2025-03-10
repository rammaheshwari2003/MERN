import axios from "axios";
import { useState } from "react";

const Insert=()=>{
  const [input, setInput]=useState({});

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput({...input,[name]:value});
    console.log(input) 
 }


 const handleSubmit=async()=>{
  let api="http://localhost:8000/books/insert";
  let res=await axios.post(api,input);
  alert(res.data);
   
 }


  return(
    <>
        <center>
          <h1>Insert Book's</h1><hr />

          Enter Author name : <input type="text" name="name"
      onChange={handleInput} />
      <br />
      Enter Email : <input type="email" name="email"  
        onChange={handleInput}  />
      <br />
      Enter Book name : <input type="text" name="bookname" 
      onChange={handleInput} />
      <br />
      Enter Price : <input type="text" name="price" 
      onChange={handleInput} />
      <br />
      <button onClick={handleSubmit}> save!!!</button>
        </center>

    </>
  )
}
export default Insert;