import { useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { message } from 'antd';

const AddProduct=()=>{

        const [input, setInput]=useState({});
        const [image, setImage]=useState("");
        const [messageApi, contextHolder] = message.useMessage();

    const handleInput=(e)=>{
        let name=e.target.name; 
        let value=e.target.value;
        setInput({...input,[name]:value});
        console.log(input);
    }

    const handleFile=(e)=>{
        setImage(e.target.files);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault(); 
         let api=`${Base_Url}/admin/addproduct`;

        const formData=new FormData();
        
        for(let key in input){
          formData.append(key, input[key]);
        }
        
        for(let i=0; i<image.length; i++){
           formData.append("image", image[i]);
        }
       let response=await axios.post(api,formData,{
        headers: { 'Content-Type': 'multipart/form-data' },});
        message.success(response.data.msg);
        
    }

    return(
        <>
        <h1 style={{textAlign:"center",backgroundColor:"grey",color:"white"}}>Add Product</h1>
        <hr />
        <div id="AddProduct">
        <form id="AddProductForm">
            <label>Book Name</label>
              <input type="text" name="bookname" onChange={handleInput} placeholder="Book Name" required/>
                <label>Author Name</label>
                  <input type="text" name="author" onChange={handleInput} placeholder="Author Name" required/> <br />
                    <label>Category</label> &nbsp; &nbsp;&nbsp;
                      <input type="text" name="category" onChange={handleInput} placeholder="e.g. Novel,Technology,etc," required/> 
                        <label>Publisher</label> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                        <input type="text" name="publisher" onChange={handleInput} placeholder="e.g. year" required/> <br />
                        <label>Description</label> 
                          <input type="text" name="description" onChange={handleInput} placeholder="Description" required/> 
                                 <label>Language</label>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                   <select name="language" onChange={handleInput} required>
                                     <option>Select</option>
                                     <option value="Hindi">Hindi</option>
                                     <option value="English">English</option>
                                  </select> <br />
                                <label>MRP</label>  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                              <input type="number" name="mrp" onChange={handleInput} placeholder="e.g. 200 ...." required/> 
                            <label>Price</label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                          <input type="number" name="price" onChange={handleInput} placeholder="e.g. 150 ...." required/> <br />
                        <label>Upload Image</label>
                      <input type="file" onChange={handleFile} multiple required/> <br />
             <button onClick={handleSubmit}>Add Product</button>
        </form>
        </div>
        </>
    )
}
export default AddProduct;