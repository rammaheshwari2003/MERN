import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("username") && !localStorage.getItem("useremail")){
            navigate("/login");
        }
    },[])

    const logout=()=>{
        // localStorage.removeItem("username");
        // localStorage.removeItem("useremail");
        localStorage.clear();
        navigate("/login")
    }
    return(
        <>
        <center>
        <h1>Welcome to EmployeeHome</h1>

        </center>

        {/* Welcome : {localStorage.getItem("username")}
           Email : {localStorage.getItem("useremail")} |
         <span onClick={logout}> <a href="#"> Logout</a> </span> */}
           

        
        </>
    )               
}
export default Home;