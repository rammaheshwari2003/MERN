import { useState } from 'react';
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { Category } from '../cartSlice';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

const Header=()=>{

  const [selectCategory, setSelectCategory]= useState("");
  const [categorys, setCategory]= useState("");

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleSelectCategory=async(category)=>{
                   setSelectCategory(category);
                   try {
                     let api=`${Base_Url}/customer/category?category=${category}`;
                     let response=await axios.get(api);
                     setCategory(response.data);
                     dispatch(Category(response.data));
                     navigate(`/categorys/${category}`);
                   } catch (error) {
                     console.log(error);
                   }
             }

  return(
         <>
           <div>
            <Navbar bg="dark" data-bs-theme="dark">
              <Container style={{margin:"auto"}}>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="home"  style={{color:"white"}}>Home</Nav.Link>
                    <Dropdown onSelect={handleSelectCategory}>
                      <Dropdown.Toggle variant="white" id="dropdown-basic" style={{color:"white", border:'none'}} > Category </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="Cooking Food">Cooking & Food</Dropdown.Item>
                            <Dropdown.Item eventKey="Health Wellness">Health & Wellness</Dropdown.Item>
                            <Dropdown.Item eventKey="Politics">Politics</Dropdown.Item>
                            <Dropdown.Item eventKey="Religious">Religious</Dropdown.Item>
                          <Dropdown.Item eventKey="Self-Help Motivation">Self-Help & Motivation</Dropdown.Item>
                        <Dropdown.Item eventKey="Technology">Technology</Dropdown.Item>
                      <Dropdown.Item eventKey="Trading">Trading</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link as={Link} to="myorder"  style={{color:"white"}}>My Order</Nav.Link>

                </Nav>
              </Container>
            </Navbar>
          </div>
        </>
    )
}
export default Header;