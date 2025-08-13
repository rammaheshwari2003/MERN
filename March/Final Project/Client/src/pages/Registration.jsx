import { useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { message } from 'antd';
import { useNavigate } from "react-router-dom";


const Registration=()=>{
    const [input, setInput]=useState({});
    const [messageApi, contextHolder] = message.useMessage();
    const navigate=useNavigate();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput({...input,[name]:value});
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        let api=`${Base_Url}/customer/registration`;
        try {
            let response=await axios.post(api, input);
            message.success(response.data.msg);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            message.error(error.response.data.msg);
        }       
    }

return(
        <>
        <form>
            <label>Enter Name </label>
              <input type="text" name="name" onChange={handleInput} /> <br />               
                <label>Enter Address </label>
                  <input type="text" name="address" onChange={handleInput}/> <br />
                    <label>Enter City </label>
                      <input type="text" name="city" onChange={handleInput}/> <br />
                        <label>Enter Pincode </label>
                        <input type="number" name="pincode" onChange={handleInput}/> <br />
                      <label>Enter Mobile No. </label>
                    <input type="number" name="mobile" onChange={handleInput}/> <br />
                  <label>Enter Email </label>
                <input type="email" name="email"  onChange={handleInput}/> <br />
              <label>Enter Password </label>
           <input type="password" name="password" onChange={handleInput}/> <br />
              
               <button onClick={handlesubmit}>Register</button>

        </form>
        </>
    )
}
export default Registration;