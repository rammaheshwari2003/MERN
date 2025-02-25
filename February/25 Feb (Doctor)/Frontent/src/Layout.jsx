import {Outlet} from "react-router-dom";
import TopMenu from "./component/TopMenu";
const Layout=()=>{
    return(
        <>
        <TopMenu />
        <Outlet />
        
        </>
    )
}
export default Layout;