import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Base_Url from "../config/Base_Url";
import { addToCart,CartDetails } from "../cartSlice";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Categorys=()=>{

    const Products=useSelector(state=>state.categorys.categorys);

    const dispatch=useDispatch();
    const navigate=useNavigate();

const BookData=Products.map((key)=>{
               return(
                      <>
                        <Card style={{ width: '18rem' }}>
                           <Card.Body>
                              <img src={`${Base_Url}/${key.defaultImage}`}  style={{cursor:"pointer",width:"260px",height:"300px"}} 
                               onClick={()=>{navigate("/productdetails"),dispatch(CartDetails({id:key._id, name:key.bookname, author:key.author,description:key.description, category:key.category, publisher:key.publisher, price:key.price, mrp:key.mrp, language:key.language, defaultImage:key.defaultImage, images:key.images,qnty:1}))}} 
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
                          >Add to Cart</Button>      </Card.Body>
                        </Card>
                      </>
                    )
                })

    return(
            <>
                    <br />
                    <div style={({display:"flex",flexWrap:"wrap",gap:"20px"})}>
                    {BookData}
                    </div>
            </>
            )
}
export default Categorys;