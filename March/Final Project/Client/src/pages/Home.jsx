import { useEffect, useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import i1 from "../images/i1.jpg"

const Home=()=>{

    const [data,setData]=useState([]);

    const loadData=async()=>{
        let api=`${Base_Url}/customer/showproduct`;
        try {
            const response=await axios.get(api);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loadData();
    },[])

    const BookData=data.map((key)=>{
        return(
            <tr>
                
            </tr>
        )
    })


    return(
        <>
        
        <img src={i1}  width="100%"/>


        {BookData}
        
        </>
    )
}
export default Home;