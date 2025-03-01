import { useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Home=()=>{
  const navigate = useNavigate();

  const userAuthenticate=async()=>{
    const token = localStorage.getItem("token");
    if (token)
    {
      let api="http://localhost:8000/user/userauthenticate";
      const response = await axios.post(api, null, { headers: { "x-auth-token": token } });
      console.log(response.data);
      localStorage.setItem("username", response.data.name);
      localStorage.setItem("useremail", response.data.email);
       navigate("/dashboard");       
    }
  }

useEffect(()=>{
  userAuthenticate();
}, [])


  return(
    <>

      <h1> Welcome To Home Page</h1>
    </>
  )
}
export default Home;