import axios from "axios";
import { useState } from "react";


const Search=()=>{
    const [rno, setRno]=useState("");
    const [mydata, setMydata]=useState([]);

    const handleSubmit=()=>{
        let api="http://localhost:8080/students/datasearch";
        axios.post(api, {rollno:rno}).then((res)=>{
            setMydata(res.data);
        })
    }


    if(mydata==0){
      var nodata= "No Data Found";
    }
    else{
    var ans=mydata.map((key)=>{
        return(
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
        )
    })
}

    return(
        <>
        <h1>Search</h1>

        Enter RollNo : <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
        <button onClick={handleSubmit}>Search</button>

            <hr />

            <table border={2} width="50%">
                <tr>
                    <th>RollNo</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                {ans}
                {nodata}
            </table>
        
        </>
    )
}
export default Search;