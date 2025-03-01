
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const DashBoard=()=>{


    const navigate = useNavigate();
  const logout=()=>{
       localStorage.clear();
       navigate("/home");
  }


  useEffect(()=>{
    const token= localStorage.getItem("token");
      if(!token)
      {
        navigate("/home");        
      }
  })





    return(
        <>
        <div style={{backgroundColor:"lightgray", padding:"20px", display:"flex", justifyContent:"space-between"}}>
        <h1>Dashboard</h1>
        <h5>Email : {localStorage.getItem("useremail")}</h5>
        <h4 onClick={logout} style={{cursor:"pointer", color:"blue",textDecoration:"underline"}}>Logout</h4>
        </div>

        <div style={{display:"flex", justifyContent:"Center"}}>

        <h1>Welcome to {localStorage.getItem("username")} </h1>
        
        </div>
       
          
        </>
    )
}

export default DashBoard;
