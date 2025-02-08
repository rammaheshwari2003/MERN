

import { useState,useEffect } from "react";
import axios from "axios";
import message from 'antd/lib/message';
import Table from 'react-bootstrap/Table';

const Search=()=>{

    const [input,setInput]=useState([])
    const [rollno,setrollno]=useState("")

    const getdata=async()=>{
        let api=await`http://localhost:3000/students/getdata`
        axios.post(api,{roll:rollno}).then((res)=>{

            if(res.data.length==0){
                message.error("Data Not Found")
            }

            else{
                setInput(res.data)}
                console.log(res.data);
                
            })
        }
    
            

          let ans=input.map((key)=>{
                return(
                    <>
                    
                        <tr>
                            <td>{key.rollno}</td>
                            <td>{key.name}</td>
                            <td>{key.city}</td>
                            <td>{key.fees}</td>
                        </tr>
                    
                    </>
                )
            })

            return(
                <>

                <h1>Search Page</h1>
                Enter Rollno <input type="text" name="rollno" value={rollno} onChange={(e)=>{setrollno(e.target.value)}} />
                <button onClick={getdata}>Search</button>
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
            )   
}
export default Search   