import { useState } from "react";
import { message } from 'antd';
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import i1 from "../images/i1.jpg"
const AdminLogin=()=>{
    const[adminId,setAdminId ]=useState("");
    const[adminPass,setadminPass ]=useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const navigate=useNavigate();

    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const api=`${Base_Url}/admin/adminlogin`;
            let response=await axios.post(api,{adminId,adminPass});
            message.success(response.data.msg);
            localStorage.setItem("adminName", response.data.Admin.name);
            // localStorage.setItem("adminID", response.data.Admin.adminId);
            setTimeout(()=>{
                navigate("/admindashboard");
            },1000)
        } catch (error) {
            message.error(error.response.data.msg);
            // alert(error.response.data.msg);
        }
    }

    return(
        <>
            <div id="adminLogin">
                {/* <img src={i1}  /> */}
                <div id="adminLoginForm">
              <h1>Admin Login</h1> <hr />
                    <form>
                       <label>Admin Id </label> 
                         <input type="text" name="adminId" onChange={(e)=>{setAdminId(e.target.value)}} placeholder="Enter Admin Id" require/> <br />
                           <label>Password </label>
                             <input type="password" name="adminPass" onChange={(e)=>{setadminPass(e.target.value)}} placeholder="Enter Password" require/> <br /> <br />
                                <button onClick={handleSubmit}>Login</button>
                            </form>
                        </div>
                    </div>
        
        </>
    )
}
export default AdminLogin;