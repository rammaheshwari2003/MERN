import { useState } from 'react';
import axios from 'axios';
import message from 'antd/lib/message';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registration=()=>{

    const [input, setInput] = useState("");

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput((values=>({...values,[name]:value})));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let api='http://localhost:5000/user/registration';
        axios.post(api,input).then((res)=>
           message.success("You are successfully registered")
    )
    }

    return(
        <>
            <center>
        <h1>User Registration </h1>


        <Form style={{width:"30%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput}/>
     </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile no.</Form.Label>
        <Form.Control type="number" name='number' value={input.number} onChange={handleInput} />
     </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={handleInput} />
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={input.password} onChange={handleInput} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        
    </center>
        </>
    )
}
export default Registration;