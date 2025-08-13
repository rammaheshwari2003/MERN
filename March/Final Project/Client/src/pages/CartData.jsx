import {useDispatch, useSelector} from "react-redux";
import Base_Url from "../config/Base_Url";
import {useNavigate} from "react-router-dom";
import { qtyIncreament,qtyDecrement,productRemove,CartDetails } from "../cartSlice";

import Table from 'react-bootstrap/Table';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const CardData=()=>{

        const dispatch=useDispatch();
        const navigate=useNavigate();

        const Product= useSelector(state=>state.mycart.cart);

        let totalAmount=0;
        let netAmount=0;
        const showProduct=Product.map((key)=>{
        totalAmount=key.price*key.qnty;
        netAmount+=totalAmount;

    return(
            <>
              <tr>
                <td>
                  <img src={`${Base_Url}/${key.defaultImage}`} width="80px" onClick={()=>navigate(`/productdetails/${key.id}`)} />
                    </td>
                      <td>{key.name}</td>
                        <td>{key.category}</td>
                          <td>{key.publisher}</td>
                            <td>{key.price}</td>
                              <td>
                              <CiCircleMinus style={{cursor:"pointer",fontSize:"25px"}} onClick={()=>{dispatch(qtyDecrement({id:key.id}))}} />
                            {key.qnty}  
                          <CiCirclePlus style={{cursor:"pointer",fontSize:"25px"}} onClick={()=>{dispatch(qtyIncreament({id:key.id}))}}/>
                        </td>
                      <td>{totalAmount}</td>
                    <td>
                  <button onClick={()=>{dispatch(productRemove({id:key.id}))}}>Remove</button>
                </td>
              </tr>            
            </>
        )
    })

return(
        <>
          <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                    <th>Book Name</th>
                      <th>Category</th>
                        <th>Publisher</th>
                          <th>Price</th>
                          <th>Qty</th>
                        <th>Total Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                <tbody>
              {showProduct}
            </tbody>
          </Table>

          
          <div style={{textAlign:"center"}}>
            {Product.length>0 ? (<>
              <h6>
                <span style={{color:"green"}}>Net Amount : </span>
                    {netAmount}
                    </h6>
                <button style={{color:"green",border:"2px solid green"}} onClick={()=>{navigate("/checkout")}} >Checkout</button>
              </>) : (<><h3>No cart available.......</h3></>)}
            </div>
          <br />           
        </>
    )
}
export default CardData;
