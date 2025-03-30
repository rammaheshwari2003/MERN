import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { MdLockReset } from "react-icons/md";


const SideMenu=()=>{
    return(
        <>
       <div id="adminSideMenu">
        <nav id="adminSideNav">
            <ul>
                <Link to="adminHome"><IoMdHome id="sideIcon"></IoMdHome>Home</Link>
                <Link to="addminAddProduct"><MdOutlineSystemUpdateAlt id="sideIcon"></MdOutlineSystemUpdateAlt>Add Product</Link>
                <Link to="adminManageProduct"><GrUpdate id="sideIcon"></GrUpdate>Manage Product</Link>
                <Link to="adminResetPassword"><MdLockReset id="sideIcon"></MdLockReset>Reset Password</Link>
            </ul>
        </nav>
       </div>
       
        </>
    )
}
export default SideMenu;