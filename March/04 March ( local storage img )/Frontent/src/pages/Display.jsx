import { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [data, setData]=useState([]);


  const loadData=async()=>{
    let api="http://localhost:8000/employee/display";
    const response=await axios.get(api);
    setData(response.data);
  }

  useEffect(()=>{
    loadData();
  },[])

  const ans=data.map((key)=>{
    <tr>
      <td>{key.id}</td>
      <td>{key.name}</td>
      <td>{key.designation}</td>
      <td>{key.salary}</td>
      <td><img src={key.images}  /></td>
    </tr>
  })
  
  return (
    <>
    <h1>Employee Data Display</h1>
    <hr />
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {ans}
      </table>

    
    </>
  )
};

export default Display;