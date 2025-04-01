import { useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
const AddProduct=()=>{

        const [input, setInput]=useState({});
        const [image, setImage]=useState("");

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
       let response=await axios.post(api,{input,image});
       console.log(response.data);
        
    }

    return(
        <>
        <h1>Add Product</h1>
        <hr />
        <form>
            <label>Book Name</label>
              <input type="text" name="bookname" onChange={handleInput} required/> <br />
                <label>Author Name</label>
                  <input type="text" name="author" onChange={handleInput} required/> <br />
                    <label>Category</label>
                      <input type="text" name="category" onChange={handleInput} required/> <br />
                        <label>Description</label>
                          <input type="text" name="description" onChange={handleInput} required/> <br />
                             <label>Publisher</label>
                               <input type="text" name="publisher" onChange={handleInput} required/> <br />
                                 <label>Language</label>
                                   <select name="language" onChange={handleInput} required>
                                     <option>Select Langauage</option>
                                     <option value="Hindi">Hindi</option>
                                     <option value="English">English</option>
                                        </select> <br />
                                           <label>MRP</label>
                                             <input type="number" name="mrp" onChange={handleInput} required/> <br />
                                                <label>Price</label>
                                                  <input type="number" name="price" onChange={handleInput} required/> <br />
                                             <label>Upload Image</label>
                                              <input type="file" onChange={handleFile} multiple/> <br />
             <button onClick={handleSubmit}>Add Product</button>
        </form>
        
        </>
    )
}
export default AddProduct;