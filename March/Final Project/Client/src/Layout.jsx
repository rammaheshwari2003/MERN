import { Outlet } from "react-router-dom";
import TopHeader from "./component/TopHeader";
import Header from "./component/Header";
import Footer from "./component/Footer";

const Layout=()=>{
    return(
        <>
        <div id="toppart">
        <TopHeader />
        <Header />
        </div>
        <Outlet />        
        <Footer />
        </>
    )
}
export default Layout;