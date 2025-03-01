import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit=async()=>{
    let api="http://localhost:8000/user/login";
    try {
    const response = await axios.post(api, {email:email, password:password});
    if(response.status===200){
    localStorage.setItem("token", response.data.token);
    alert(response.data.msg);   
    navigate("/home");
    }else{
        alert(response.data.msg);
    }
        
    } catch (error) {
        alert(error.response.data.msg);
        
    }
  }
  
    return(
      <>
        <h1> Login Page</h1>
         Enter User Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
         <br />
         Enter Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
         <br />
         <button onClick={handleSubmit} > Login</button>
      </>
    )
  }
  export default Login;