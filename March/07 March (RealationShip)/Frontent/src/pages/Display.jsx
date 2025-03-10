import { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [data, setData]=useState([]);


  const loadData=async()=>{
    let api="http://localhost:8000/books/display";
    const response=await axios.get(api);
    setData(response.data);
  }

  useEffect(()=>{
    loadData();
  },[])

  const ans=data.map((key)=>{
    return(
    <tr>
      <td>{key.authorName}</td>
      <td>{key.email}</td>
      <td>{key.bookId.bookName}</td>
      <td>{key.bookId.price}</td>
      {/* <td>{
        key.bookId.map((key1)=>{
          return(
            <>
          <p> {key1.bookName}, {key1.price} </p>
            </>
          )
        })
        }
      </td> */}
    </tr>
    )
  })
  
  return (
    <>
    <h1>Display</h1>
    <hr />
     <table border="1">
      <tr>
        <th>Auther Name</th>
        <th>Email</th>
        <th>Book Name</th>
        <th>Price</th>
      </tr>
      {ans}
     </table>

    
    </>
  )
};

export default Display;