import { useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { message } from 'antd';

const ResetPassword=()=>{

        const [input, setInput]=useState({});
        const [messageApi, contextHolder] = message.useMessage(); 
        
        let adminName= localStorage.getItem("adminName");

        const handleInput=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setInput({...input,[name]:value});
        }

        
        const handleSubmit=async(e)=>{
            e.preventDefault(); 
            setInput(""); 
            try {
                        
                 if(input.newpassword == input.repassword){
                let api=`${Base_Url}/admin/changepassword`;
                let response=await axios.post(api, {...input,adminName});
                console.log(response.data)
                if(response.data.status == 500){
                message.error(response.data.oldPssErr); 
                }
                if(response.data.status == 200){
                message.success(response.data.msg);
                
                }
                }else{
                    message.error("Password does not match, Please try again or correct password");
                }
            } catch (error) {
                message.error;
            }
        }

    return(
        <>
        <h1 style={{backgroundColor:"grey", color:"white", textAlign:"center"}}>Reset Password</h1>
        <hr />


        <form id="resetForm">

            <label>Old Password </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="password" name="oldpassword" onChange={handleInput} placeholder="Enter Old Password"/> <br />

            <label>New Password </label> &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="password" name="newpassword" onChange={handleInput} placeholder="Enter New Password"/> <br />
            
            <label>Re-enter Password </label>
            <input type="password" name="repassword" onChange={handleInput} placeholder="Re-enter Password"/> <br />

             <button onClick={handleSubmit}>Change Password</button>

        </form>

        <p style={{color:"red", fontSize:"20px", fontWeight:"bold", marginTop:"20px", marginLeft:"20px", marginRight:"20px"}}>
            * Password must be at least 6 characters long. <br />
            * Password must contain at least one uppercase letter. <br />
            * Password must contain at least one lowercase letter. <br />
            * Password must contain at least one number. <br />
            * Password must contain at least one special character. <br />
            * Passwords must match.
        </p>
        </>
    )
}
export default ResetPassword;