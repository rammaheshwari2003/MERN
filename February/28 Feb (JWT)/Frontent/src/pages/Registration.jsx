import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration=()=>{
 const [input, setInput] = useState({});
 const navigate = useNavigate();
 const handleInput=(e)=>{
   let name= e.target.name ;
   let value= e.target.value;
   setInput(values=>({...values, [name]:value}));
   console.log(input);
 }

 const handleSubmit=async()=>{
    let api="http://localhost:8000/user/registration";
    try {
    const response = await axios.post(api, input);
    if(response.status===200){
    // console.log(response.data);
    alert(response.data.msg);
    navigate("/login");
    }else{
        alert(response.data.msg);
    }

    } catch (error) {
        console.log(error);
        
    }
 }

  return(
      <>
        <h1> Registration </h1>      
         Enter Username: <input type="text" name="name" onChange={handleInput}  />
         <br />
         Enter  Email : <input type="email" name="email" onChange={handleInput}  />
         <br />
         Enter Password : <input type="password" name="password" onChange={handleInput} />
         <br />
         <button onClick={handleSubmit} > Register</button>
      </>
    )
  }
  export default Registration;