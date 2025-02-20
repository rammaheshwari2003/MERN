
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const Display = () => {
    const [display,setDisplay]=useState([])
    const getdata=()=>{
        let api="http://localhost:8080/user/display";
        axios.get(api).then((res)=>{
            setDisplay(res.data)
            console.log(res.data)
        })
    }

    useEffect(()=>{
        getdata()
    },[])

    const ans=display.map((key)=>{
        return(
            <>
           <tr>
            <td>{key.firstname}</td>
            <td>{key.lastname}</td>
            <td>{key.userId.username}</td>
            <td>{key.userId.email}</td>
            
           </tr>
            </>

        )
    })

    return (
        <>
        <center> <h1>Display  Data</h1></center>
        <hr/>
            

            <Table striped bordered hover id="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          
          
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
