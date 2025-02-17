import { Link,Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <>
           <Link to="home">Home </Link> |
           <Link to="registration"> Registration </Link> |
           <Link to="login"> Login </Link> 

           <Outlet />
        </>
    );
};

export default Layout