// import { useState } from "react";
// import axios from "axios";
// const Insert=()=>{

//     const [input, setInput]=useState({});
//     const [selectedFile, setSelectedFile] = useState("");

//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values, [name]:value}));

//     }

    

//     const handleSubmit=async()=>{
//         const formData= new FormData();
//         formData.append("file",selectedFile);   
//         formData.append("upload_preset","My_Photos");
//         formData.append("cloud_name","dfcxovpr5");
//         const api="https://api.cloudinary.com/v1_1/dfcxovpr5/image/upload";
//         const response=await axios.post(api,formData);
//         console.log(response.data);
//         console.log(response.data.url);

//         const api1="http://localhost:8000/user/insert";
//         const response1=await axios.post(api1,{imagename:response.data.url, ...input});
//         alert("Data Insert");
//         console.log(response1.data);
//     }
//     return(
//         <>
//         <h1>Insert Data</h1>
//         <hr />

        
//             Enter RollNo : <input type="text" name="rollno" onChange={handleInput}/><br />
//             Enter Name : <input type="text"name="name" onChange={handleInput}/><br />
//             Enter City : <input type="text" name="city" onChange={handleInput}/><br />
//            Uplod File : <input type="file" onChange={(e)=>setSelectedFile(e.target.files[0])} /> <br />
//             <button onChange={handleSubmit}>Insert</button>
       
//         </>
//     )
// }
// export default Insert;



import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState("");

  const handleInsert = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset","My_Photos");
    formData.append('cloud_name','dfcxovpr5');
    const api='https://api.cloudinary.com/v1_1/dfcxovpr5/image/upload';
    const response = await axios.post(api, formData);
    console.log(response.data.url);

    const api1='http://localhost:8000/user/insert';
    const response1 = await axios.post(api1, { name, rollno, city, img:response.data.url });
    console.log(response1.data);


  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", backgroundColor: "darkred", color: "#39ff14", fontFamily: "monospace" ,width:'400px',margin:'auto',marginTop:'100px',borderRadius:'10px',boxShadow:'10px 0px 10px rgb(5, 23, 2)'}}>
      <h1 style={{ margin: "20px 0", borderBottom: "2px solid #39ff14" }}>Insert</h1>
      <form >
        <label>
          Enter Name :-
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label>
        <label>
          Enter Rollno :-
          <input type="number" value={rollno} onChange={(e) => setRollno(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label>
        <label>
          Enter City :-
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label>
        <label>
          Select File :-
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "5px", margin: "10px 0" }} />
        </label>
        <button onClick={handleInsert} style={{ backgroundColor: "#333", color: "#39ff14", border: "1px solid #39ff14", padding: "10px 20px", margin: "10px 0" }}>Insert</button>
      </form>
    </div>
  );
};

export default Insert;