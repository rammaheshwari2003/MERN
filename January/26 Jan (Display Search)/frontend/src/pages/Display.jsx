import axios from "axios";
import { useState, useEffect } from "react";

const Display=()=>{
    const [data, setData]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8080/students/datadisplay";
        axios.get(api).then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[]);

    const ans=data.map((key)=>{
        return(
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
        )
    })

    return(
        <>
        <h1>Display Page</h1>
        <table border="1" width="50%" style={{textAlign:"center"}}>
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;