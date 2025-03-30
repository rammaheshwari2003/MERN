import { Outlet } from "react-router-dom";
import AdminTopHeader from "./component/AdminTopHeader";
import SideMenu from "./component/SideMenu";

const AdminDashBaord=()=>{
    return(
        <>
        <AdminTopHeader />
        <div id="SideOutler">
            <div id="sideBar">
        <SideMenu />
        </div>
        <div id="outlet">
        <Outlet  />
        </div>
        </div>
        
        </>
    )
}
export default AdminDashBaord;