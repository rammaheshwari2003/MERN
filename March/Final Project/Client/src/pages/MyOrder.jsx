import axios from "axios";
import Base_Url from "../config/Base_Url";
import { useEffect, useState } from "react";

const MyOrder=()=>{

    const [orderdata, setOrderData]=useState([]);

    let LocalEmail=localStorage.getItem("email");


    const loadData=async()=>{
    const api=`${Base_Url}/customer/myorder/?email=${LocalEmail}`
    const response=await axios.get(api);
    setOrderData(response.data);
    }
    console.log(orderdata)

     useEffect(()=>{
        loadData();
    },[])


    const ans=orderdata.map((key)=>{
            
        
        return(
            <>
                <div style={{display:"flex", justifyContent:"space-between",border:"1px solid black", margin:"5px"}}>
                <div style={{padding:"20px"}}>
                    <h3>{key.name}</h3>
                    <h4>₹ {key.totalamount}</h4>
                </div>
                <div>
                <img src={`${key.image}`}  style={{cursor:"pointer",width:"100px",height:"100px", padding:"10px"}} />
                </div>
                </div>
                </>
            )
    })

    return(
        <>

        <div>
            {ans}
            
        </div>
        
        </>
    )
}

export default MyOrder;