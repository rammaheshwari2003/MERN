
import { useState, useEffect } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home=()=>{
const [mydata, setMydata] = useState([]);
const loadData=async()=>{
    let api=`${BASE_URL}/doctor/homedoctorsdisplay`;
    try {
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    } catch (error) {
         console.log(error);
    }
}

useEffect(()=>{
    loadData();
}, []);


const ans= mydata.map((key)=>{
    return(
        <>
           <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.specialization}
          Address : {key.address} City : {key.city} Mobile : {key.mobile}
          Email : {key.email}
        </Card.Text>
        <Button variant="primary">Appointemtn Now!</Button>
      </Card.Body>
    </Card>
        
        </>
    )
})



    return(
        <>
          <h1> Welcome To Online Appointment System</h1>

        <div id="homeDoctors">
        {ans}
        </div>
         

        </>
    )
}


export default Home;
