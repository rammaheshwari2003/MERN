import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { message } from 'antd';
import {MyContext} from "../LoginContext";

import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FaShoppingCart,FaSearch,FaHeart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";

const TopHeader=()=>{

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [modalShow, setModalShow] = useState(false);
    const {logedIn, setLogedIn}=useContext(MyContext);
    
    const [search, setSearch] = useState(false);
    const [searchText, setSearchText] = useState("");

    const navigate=useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const Product=useSelector(state=>state.mycart.cart);
    const ProductLength=Product.length;

    const handleSubmit=async(e)=>{
              e.preventDefault();
              let api=`${Base_Url}/customer/login`;
              try {
                let response=await axios.post(api,{email,password});
                message.success(response.data.msg);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("id", response.data.findCustomer._id);
                localStorage.setItem("name", response.data.findCustomer.name);
                localStorage.setItem("email", response.data.findCustomer.email);
                setShow(false);
                setLogedIn(false);
                navigate("/");
              } catch (error) {
                message.error(error.response.data.msg);
              }
        }

            const handleLogoutModel=()=>{
              setModalShow(true);
              setShow1(true);
            }
            const handleLogout=()=>{
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              localStorage.removeItem("id");
              localStorage.removeItem("name");
              setLogedIn(false);
              setShow1(false);
              navigate("/");
            }

            useEffect(() => {
              if (searchText.trim() === "") {
                  setTimeout(() => {
                  setSearch(false);
                }, 500);              
               }
            }, [searchText]);
            

const LocalEmail=localStorage.getItem("email");
const LocalName=localStorage.getItem("name");

    return(
        <>
           <Modal show={show1} onHide={handleClose1} centered >
             <Modal.Header closeButton>
               <Modal.Title>Logout Confirmation</Modal.Title>
                 </Modal.Header>
                   <Modal.Body>
                     <p> Are you sure you want to logout. </p>
                     </Modal.Body>
                   <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose1}>Close</Button>
               <Button variant="primary" onClick={handleLogout}>Confirm</Button>
             </Modal.Footer>
           </Modal>

            <div id="TopHeader">
               <div>
                  <h1>BookBazar</h1>
               </div>

           <div id="topIcons">
             <span> {search ? (<span id="search"><input type="text" placeholder="Search" name="search" onChange={(e)=>{setSearchText(e.target.value)}}  /> | <FaSearch></FaSearch> </span>) : (<> <FaSearch onClick={()=>{setSearch(prev => !prev)}} /> </>)}  </span>
                <span> <FaHeart /> </span>
                  <span> <FaShoppingCart onClick={()=>{navigate("/cartdata")}} /> {Product.length>0 ? (<> {ProductLength}</>) : (<></>)} </span>
    
            {LocalEmail || LocalName ? (<>
            <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic" style={{border:'none',fontSize:"25px", color:"white"}}>
            <RiUser3Fill />
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item> Welcome : {LocalName} </Dropdown.Item>
            <Dropdown.Item> Email : {LocalEmail} </Dropdown.Item> <hr />
            <Dropdown.Item onClick={handleLogoutModel} style={{textAlign:"center"}}> Logout </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </>) : (<>
            <RiUser3Fill onClick={handleShow} />
            </>)}
            </div>

      
              <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton >
                  <Modal.Title style={{ width: '100%', textAlign: 'center' }}> User Login </Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                <Form.Label>Password</Form.Label>
                                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                  </Form.Group>
                                <span style={{display:"flex", justifyContent:"center"}}>
                              <Button variant="primary" type="submit" onClick={handleSubmit} style={{width:"20%", height:"40px"}} > Login </Button> </span>
                            </Form>
                          </Modal.Body>
                        <Modal.Footer style={{display:"flex", flexDirection:"column"}}>
                      <h6 style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>Forgot Password</h6>
                    <h6>New User ? <span style={{color:"blue",cursor:"pointer",textDecoration:"underline"}} onClick={()=>{navigate("/registration")}}> Register </span></h6>
                  </Modal.Footer>
               </Modal>
             </div>
        </>
    )
}
export default TopHeader;