import { createContext, useState } from "react";

const MyContext=createContext();

const LoginContext=({children})=>{
    const [logedIn, setLogedIn]=useState(false);
    return(
        <>
        <MyContext.Provider value={{logedIn, setLogedIn}}>
             {children}
        </MyContext.Provider>
        
        </>
    )
}
export {MyContext};
export default LoginContext;