import { useEffect, useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {cartEmpty} from "../cartSlice";
const CheckOut = () => {
    const [cusData, setCusData] = useState({});
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const loadData=async()=>{
        let api=`${Base_Url}/customer/getdata?id=${localStorage.getItem("id")}`;
      
        try {
             const response = await axios.get(api);
             console.log(response.data);
             setCusData(response.data);
        } catch (error) {
           console.log(error);
        }
      
      }

      useEffect(()=>{
        if (!localStorage.getItem("email"))
            {
               navigate("/");
            }
        loadData();
      },[])


      const Product= useSelector(state=>state.mycart.cart);
      let totalAmount=0;
      let imgURL="";
      let Pname="";
      const ans=Product.map((key)=>{
          totalAmount+=key.price * key.qnty;
          imgURL=`${Base_Url}/${key.defaultImage}`;
          Pname+=key.name;

          return(
              <>
                 <tr>
                  <td>{key.price * key.qnty}</td>
                                 </tr>
              </>
          )
      })
      



      const handlePay = async () => {
        try {
          const orderURL = "http://localhost:8000/api/payment/orders";
          const {data} = await axios.post(orderURL,{amount: totalAmount, customername:cusData.name, address:cusData.address, contact:cusData.contact, email:cusData.email, proname:Pname, image:imgURL});
          console.log(data);
          initPay(data.data);
          dispatch(cartEmpty());
        } catch (error) {
          console.log(error);
        }
      };

      // const [shoe,setShoe] = useState({
      //   name: "Training Shoes",
      //   creator: "Nike",
      //   img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   price: 500,
      // });

      const initPay = (data) => {
        const options = {
          key : "rzp_test_B2mjkPYweZw7rj",
          amount: data.amount,
          currency: data.currency,
          name: Pname,
          description: "Test",
          image:imgURL,
          order_id: data.id,
          handler: async (response) => {
            try {
              const verifyURL = "https://localhost:8000/api/payment/verify";
              const {data} = await axios.post(verifyURL,response);
            } catch(error) {
              console.log(error);
            }
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };

      useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);
      
      
    return(
        <>
        <h1>Checkout</h1>
        <div style={{width:"300px", margin:"auto", fontSize:"20px", fontWeight:"bold"}}>
          Customer Name : {cusData.name}
          <br/>
          Shipping Address : {cusData.address}
          <br/>
          City : {cusData.city}
          <br/>
          Pincode : {cusData.pincode}
          <br/>
          Contact no :  {cusData.mobile}
          <br />
          Email :  {cusData.email}
          <br/>
          <br/>
           <Button onClick={handlePay} style={{backgroundColor:"green"}} > Pay Now </Button>
          <br/>   <br/>  <br/>
          <h4 align="center" style={{color:"green"}}> Your Total Paybale Amount : {totalAmount}</h4>

          <div /></div>
        </>
    )
}
export default CheckOut;
