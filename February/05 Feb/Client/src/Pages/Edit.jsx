// import { useParams } from "react-router-dom"
// import { useEffect,useState } from "react"
// import axios from "axios"
// import { message } from "antd"
// import { useNavigate } from "react-router-dom"
// const Edit=()=>{
//     const navigate=useNavigate()
//     const [input, setInput] = useState({})
//     const handleInput = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }
// const loadData=()=>{
//     let api='http://localhost:8000/student/getEditData';
//     axios.post(api,{id:id}).then((res)=>{
//         setInput(res.data)
//     })
// }


// useEffect(()=>{
//    loadData() 
// },[])
//     const handleSubmit = async () => {
//         let api = "http://localhost:8000/student/editdata";
//         axios.post(api, input).then((res) => {
//             message.success("Data Updated Successfully")
//             navigate("/update")
//         })
//     }
//     const {id}=useParams()
//     return(
//         <>

//     <div id="form" style={{ border: "1px solid black", padding: "20px", borderRadius: "10px", width: "400px", margin: "0 auto", marginBottom: "50px", textAlign: "center", backgroundColor: "#f0f0f0" ,marginTop:"50px"}}>
//         <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>Enter Name</label>
//         <input type="text" name="name" value={input.name} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }} />

//         <label htmlFor="city" style={{ display: "block", marginBottom: "10px" }}>Enter City</label>
//         <input type="text" name="city" value={input.city} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }} />

//         <label htmlFor="course" style={{ display: "block", marginBottom: "10px" }}>Enter Course</label>
//         <input type="text" name="course" value={input.course} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }} />

//         <label htmlFor="fees" style={{ display: "block", marginBottom: "10px" }}>Enter Fees</label>
//         <input type="text" name="fees" value={input.fees} onChange={handleInput} style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }} />

//         <button onClick={handleSubmit} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "20px" }}>Save</button>
//     </div>
// </>
//     )
// }
// export default Edit












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