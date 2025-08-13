// import { useSelector,useDispatch } from "react-redux";
// import Base_Url from "../config/Base_Url";
// import { addToCart } from "../cartSlice";
// import { useNavigate } from "react-router-dom";

// import Button from 'react-bootstrap/Button';

// const CartDetail=()=>{
    
//     const Product=useSelector(state=>state.cartDetails.cartDetails);

//     const dispatch=useDispatch();
//     const navigate=useNavigate();


//     return(
//             <>
//                 <div id="cartDetails">
//                   <aside>
//                     <img src={`${Base_Url}/${Product.defaultImage}`}  />
//                       </aside>
//                         <div>
//                           <h3>{Product.name}</h3>
//                             <h5> <span style={{fontSize:"25px"}}>₹ {Product.price}</span> &nbsp;  <span style={{textDecoration:"line-through", color:"gray"}}>₹{Product.mrp}</span></h5>
//                               <div>
//                                 <h5 style={{textDecoration:"underline"}}>Product Details : </h5>
//                                   <h6>Author : {Product.author}</h6>
//                                   <h6>Publisher : {Product.publisher}</h6>
//                                   <h6>Category : {Product.category}</h6>
//                                 <h6>Language : {Product.language}</h6>
//                               <h6>Description : <p><span style={{textWrap:"wrap"}}> {Product.description} </span></p></h6>
//                             </div>
//                           <div>
//                         <Button variant="warning" onClick={()=>{dispatch(addToCart(Product))}}>Add to Cart</Button> &nbsp;
//                       <Button variant="success" onClick={()=>{navigate("/checkout")}}>Buy Now</Button> 
//                     </div>
//                   </div>
//                 </div>
//              </>
//         )
// }
// export default CartDetail;


import { useParams } from "react-router-dom";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { useEffect, useState } from "react";
import { addToCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
const CartDetail = () => {
  const {id}= useParams();
  
  const [data, setData]=useState({});
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const loadData=async()=>{
    let api=`${Base_Url}/customer/getproduct?id=${id}`;
    let response=await axios.get(api);
    setData(response.data);
  }

  useEffect(()=>{
    loadData();
  },[])

  console.log(data);

  return(
                <>
                    <div id="cartDetails">
                      <aside>
                        <img src={`${Base_Url}/${data.defaultImage}`}  />
                          </aside>
                            <div>
                              <h3>{data.name}</h3>
                                <h5> <span style={{fontSize:"25px"}}>₹{data.price}</span> &nbsp;  <span style={{textDecoration:"line-through", color:"gray"}}>₹{data.mrp}</span></h5>
                                  <div>
                                    <h5 style={{textDecoration:"underline"}}>Product Details : </h5>
                                      <h6>Author : {data.author}</h6>
                                      <h6>Publisher : {data.publisher}</h6>
                                      <h6>Category : {data.category}</h6>
                                    <h6>Language : {data.language}</h6>
                                  <h6>Description : <p><span style={{textWrap:"wrap"}}> {data.description} </span></p></h6>
                                </div>
                              <div>
                            <Button variant="warning" onClick={()=>{dispatch(addToCart({id:data._id,name:data.bookname,price:data.price,category:data.category,publisher:data.publisher,defaultImage:data.defaultImage,qnty:1}))}}>Add to Cart</Button> &nbsp;
                          <Button variant="success" onClick={()=>{navigate("/checkout")}}>Buy Now</Button> 
                        </div>
                      </div>
                    </div>
                 </>
            )
  
}
export default CartDetail;