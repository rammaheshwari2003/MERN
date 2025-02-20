import { useState } from "react";

import axios from "axios";
import  { message } from "antd";
const Insert=()=>{

    const [input, setInput] = useState("");


    const handleInput=(e)=>{
        const name=e.target.name;
        const val=e.target.value;
        setInput(values=>({...values,[name]:val}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        let api=("http://localhost:8080/user/insert")

        axios.post(api,input).then((res)=>{
            message.success("Data Insert Successfully")
            alert("Data Insert Successfully")
        })


    }

    return(
        <>
                <center>
                <h1>Insert Data</h1>
                <hr />

                Enter username  : <input type="text" name="username"   onChange={handleInput}/> <br /> <br />
                Enter Email : <input type="text" name="email"  onChange={handleInput}/> <br /> <br />
                Enter First Name : <input type="text" name="firstname"  onChange={handleInput}/> <br /> <br />
                Enter Last Name : <input type="text" name="lastname"  onChange={handleInput}/> <br /> <br />
               
                <button onClick={handleSubmit}>Insert</button>

                </center>

        </>
    )               
}
export default Insert;
