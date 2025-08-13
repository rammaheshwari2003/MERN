import axios from "axios";
import { useState, useEffect } from "react";
import Base_Url from "../config/Base_Url";
import Table from 'react-bootstrap/Table';
const Order=()=>{
const [mydata, setMydata]= useState([]);
const loadData=async()=>{
       let api=`${Base_Url}/admin/getproduct`;
       try {
          const response = await axios.get(api);
          console.log(response.data);
          setMydata(response.data);
       } catch (error) {
        console.log(error);
       }
}


useEffect(()=>{
    loadData();
}, []);

  let sno=0;
const ans=mydata.map((key)=>{ 
      return(
        <>
          <tr>
            <td>{++sno}</td>
            <td><img src={`${key.image}`} style={{width:"50px", height:"50px"}} /></td>
            <td>{key.name}</td>
            <td>{key.totalamount}</td>
            <td>{key.customername}</td>
            <td>{key.address}</td>
            {/* <td>{key.mobile}</td> */}
            <td>{key.email}</td>
            <td>{key.dop}</td>
            <td>{key.orderId}</td>
          </tr>
        </>
      )
});


    return(
        <>
         <h1> Customer Orders</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Image</th>
          <th>Products Name</th>
          <th>Total Amount</th>
          <th>Customer name</th>
          <th>Shipping Address</th>
          {/* <th>Contact no</th> */}
          <th>Email</th>
          <th> Date of Purchasing </th>
          <th>Order Id</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
     </Table>
        </>
    )
}
export default Order;