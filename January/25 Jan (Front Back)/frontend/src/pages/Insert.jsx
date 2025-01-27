import { useState } from "react";
import axios from "axios";

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async () => {
        let api = "http://localhost:8080/students/datasave";
        axios.post(api, input).then((res) => {
            alert("Inserted Successfully");
            console.log(res.data);
        })
    };

    
    return (
        <>
            <h1>Insert Page</h1>
            Enter Rollno <input type="text" name="rollno" onChange={handleInput} /><br />
            Enter Name <input type="text" name="name" onChange={handleInput} /><br />
            Enter City <input type="text" name="city" onChange={handleInput} /><br />
            Enter Fees <input type="text" name="fees" onChange={handleInput} /><br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );

};

export default Insert;