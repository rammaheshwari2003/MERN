import { useEffect, useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import i1 from "../images/i1.jpg"
import { useDispatch } from "react-redux";
import { addToCart,CartDetails } from "../cartSlice";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home=()=>{

    const [data,setData]=useState([]);

    const dispatch= useDispatch();
    const navigate = useNavigate();

const Authenticate=async()=>{
                const token=localStorage.getItem("token");
                if(token){
                let api=`${Base_Url}/customer/userauthenticate`;
                const response=await axios.get(api,{
                 headers:{Authorization : `Bearer ${token}`},
                });
                localStorage.setItem("id", response.data._id);
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("email", response.data.email);
            }
        }

const loadData=async()=>{
        let api=`${Base_Url}/customer/showproduct`;
        try {
             const response=await axios.get(api);
             setData(response.data);
        } catch (error) {
             console.log(error);
        }
    }

        useEffect(()=>{
            loadData();
            Authenticate();
        },[])

const BookData=data.map((key)=>{
              return(
                     <Card style={{ width: '18rem' }} >
                       <Card.Body>
                          <img src={`${Base_Url}/${key.defaultImage}`}  style={{cursor:"pointer",width:"260px",height:"300px"}} 
                            onClick={()=>{navigate(`/productdetails/${key._id}`),dispatch(CartDetails({id:key._id, name:key.bookname, author:key.author,description:key.description, category:key.category, publisher:key.publisher, price:key.price, mrp:key.mrp, language:key.language, defaultImage:key.defaultImage, images:key.images,qnty:1}))}} 
                              /><hr />
                                <Card.Title>{key.bookname}</Card.Title>
                                  <Card.Text>
                                    <h5>Author : {key.author}</h5>
                                    <h5>MRP : <span style={{textDecoration:"line-through"}}>{key.mrp}</span></h5>
                                   <h5>Price {key.price}</h5>
                                <h5>Language : {key.language}</h5>
                              </Card.Text>
                            <Button variant="primary"
                          onClick={()=>{dispatch(addToCart({id:key._id, name:key.bookname, author:key.author,description:key.description, category:key.category, publisher:key.publisher, price:key.price, mrp:key.mrp, language:key.language, defaultImage:key.defaultImage, images:key.images,qnty:1}))}}
                        >Add to Cart</Button>
                     </Card.Body> 
                   </Card>
                   )
               })

return(
        <>
          <img src={i1}  width="100%" height="300px"/>

          <div style={({display:"flex",flexWrap:"wrap",gap:"20px"})}>
          {BookData}
          </div>
        </>
      )
}
export default Home;