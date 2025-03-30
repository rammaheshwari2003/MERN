import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";


const TopHeader=()=>{
    return(
        <>
        <div id="TopHeader">
            <div></div>
        <div id="topIcons">
        <FaSearch />
        <FaHeart />
        <FaShoppingCart />
        <RiUser3Fill />
        </div>
        </div>
        </>
    )
}
export default TopHeader;