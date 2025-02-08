
import { useState,useEffect } from "react";
import axios from "axios";

import Table from 'react-bootstrap/Table';


const Display = () => {
    const [input,setInput]=useState([])
    const getdata=()=>{
        let api=("http://localhost:3000/students/data")
        axios.get(api).then((res)=>{
            setInput(res.data)})
    }

    useEffect(()=>{
        getdata()
    },[])

    const ans=input.map((item)=>{
        return(
            <>

           <tr>
            <td>{item.rollno}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.fees}</td>
           </tr>
            </>

        )
    })

    return (
        <>
        <center> <h1>Display Data</h1></center>
        <hr/>
            

            <Table striped bordered hover id="table">
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
      {ans}
        </tbody>
 
    </Table>

          

        </>
    );
};

export default Display;
