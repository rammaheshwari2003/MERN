import axios from "axios";
import { useState } from "react";

const Insert=()=>{
  const [input, setInput]=useState({});
  const [img, setImg]=useState("");

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput({...input,[name]:value});
    console.log(input) 
 }

 const handleImage=(e)=>{
    let value=e.target.files[0];
    setImg(value);
    console.log(img)
 }

 const handleSubmit=async()=>{
  let api="http://localhost:8000/employee/insert";
    let formData=new FormData();
    formData.append("id",input.id);
    formData.append("name", input.name);
    formData.append("designation", input.designation);
    formData.append("salary", input.salary);
    formData.append("image", img);
    const res=await axios.post(api, formData);
    console.log(res.data);
    alert("Data Insert");
 }


  return(
    <>
        <center>
          <h1>Employee Data Insert</h1><hr />

          Enter Employee Id : <input type="text" name="id" onChange={handleInput} /> <br />
          Enter Employee Name : <input type="text" name="name" onChange={handleInput} /> <br />
          Enter Employee Designation : <input type="text"name="designation" onChange={handleInput} /> <br />
          Enter Employee Salary : <input type="text" name="salary" onChange={handleInput} /> <br />
          Employee Image : <input type="file" name="image" onChange={handleImage} /> <br />
          <button onClick={handleSubmit}>Insert</button>
        </center>
    </>
  )
}
export default Insert;