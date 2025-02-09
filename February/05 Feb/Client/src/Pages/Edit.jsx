import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { message } from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
 
const Edit = () => {

    const { id } = useParams();
    const [mydata, setMyData] = useState({});
     
    const navigate = useNavigate();


    const loadData = async () => {
        let api = "http://localhost:3000/students/editdata";
        const res = await axios.post(api, { id: id });
        setMyData(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMyData(values => ({ ...values, [name]: value }));
        console.log(mydata);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let api = "http://localhost:3000/students/updatedata";
        
            const res = await axios.post(api, mydata);
            message.success("Data Updated Successfully");
            console.log(res);
            
            navigate("/update")


        
    }

    return (
        <>
    <div id="myForm">
                <h1> Edit Employee Detail: </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Employee No.</Form.Label>
                        <Form.Control type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Employee Name</Form.Label>
                        <Form.Control type="text" name="name" value={mydata.name} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Designation</Form.Label>
                        <Form.Control type="text" name="city" value={mydata.city} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Salary</Form.Label>
                        <Form.Control type="text" name="fees" value={mydata.fees} onChange={handleInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Edit;
