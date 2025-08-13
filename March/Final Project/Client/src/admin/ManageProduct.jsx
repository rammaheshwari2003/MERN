
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Base_Url from "../config/Base_Url";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const ManageProduct=()=>{

    const[data,setData]=useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const navigate=useNavigate();

    const handleDelete=async(id)=>{
        const api=`${Base_Url}/admin/deleteproduct/?id=${id}`;
        const response= await axios.get(api);
        message.success(response.data.msg);
        loadData();
    }

    const handleEdit=(id)=>{
        navigate(`/admindashboard/editproduct/${id}`);
    }
    
    const loadData=async()=>{
        
    const api=`${Base_Url}/admin/getproductdata`;
    const response=await axios.get(api);
    setData(response.data);

    }

    useEffect(()=>{
        loadData();
    },[])

let so=0;
    const ans=data.map((key)=>{
        return(
            <tr>
                <td>{++so}</td>
                <td><img src={`${Base_Url}/${key.defaultImage}`} width="50px" height="50px" /></td>
                <td>{key.bookname}</td>
                <td>{key.author}</td>
                <td>{key.category}</td>
                <td>{key.publisher}</td>
                <td>{key.price}</td>
                <td>
                    <Button variant="danger" onClick={()=>handleDelete(key._id)}>Delete</Button>
                </td>
                <td>
                    <Button variant="warning" onClick={()=>handleEdit(key._id)}>Edit</Button>
                </td>
            </tr>
        )
    })


    return(
        <>
        <h1>Manage Product</h1> 
        <hr />

         <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Products Image</th>
          <th>Products Name</th>
          <th>Author Name</th>
          <th>Category</th>
          <th>Publisher</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
     </Table>


        </>
    )
}
export default ManageProduct;