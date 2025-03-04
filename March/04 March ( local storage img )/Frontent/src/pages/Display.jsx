import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/display"); 
        setApiData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const ans=apiData.map((item)=>{
    return(
      <>
      <tr>
        <td>{item.name}</td>
        <td>{item.rollno}</td>
        <td>{item.city}</td>
        <td><img src={item.imgurl} alt="" width="100px" height="100px"/> </td>
      </tr>
      
      
      
      </>
    )

  })
  return (
    <>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th>Image</th>
      </tr>
      {ans}
    </table>
    
    </>
  )
};

export default Display;