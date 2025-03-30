import { useEffect } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const AdminTopHeader=()=>{
    const navigate=useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("adminName")){
            localStorage.clear();
            navigate("/adminlogin");
        }
    },[navigate])

   
    let logout=()=>{
        localStorage.clear();
        navigate("/adminlogin");
    }

    return(
        <>
        <div id="adminTopMenu">
            <h1>Admin </h1>
            <div id="adminTopIcons">
                <h4 onClick={logout}>Logout<IoMdLogOut /></h4>
            </div>
        </div>
        </>
    )
}
export default AdminTopHeader;