import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import CardData from "./pages/cartData";
import Registration from "./pages/Registration";


import AdminLogin from "./admin/AdminLogin";

import AdminDashBaord from "./admin/AdminDashboard";
import AdminHome from "./admin/AdminHome";
import AddProduct from "./admin/AddProduct";
import ManageProduct from "./admin/ManageProduct";
import ResetPassword from "./admin/ResetPassword";
import CheckOut from "./pages/CheckOut";
import CartDetail from "./pages/CartDetail";
import Categorys from "./pages/Categorys";
import Order from "./admin/Order";
import EditProduct from "./admin/EditProduct";
import MyOrder from "./pages/MyOrder";
const App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="home" element={<Home />} />
       <Route path="cartdata" element={<CardData />} />
       <Route path="myorder" element={<MyOrder />} />
       <Route path="checkout" element={<CheckOut />} />
       <Route path="productdetails/:id" element={<CartDetail />} />
       <Route path="categorys/:category" element={<Categorys />} />
       </Route>
      </Routes>

      <Routes>
        <Route path="registration" element={<Registration />} />
        <Route path="adminlogin" element={<AdminLogin />} />
      </Routes>

      <Routes>
        <Route path="admindashboard" element={<AdminDashBaord />}>
        <Route index element={<AdminHome />} />
        <Route path="adminHome" element={<AdminHome />} />
        <Route path="addminAddProduct" element={<AddProduct/>} />
        <Route path="order" element={<Order/>} />
        <Route path="adminManageProduct" element={<ManageProduct />} />
        <Route path="adminResetPassword" element={<ResetPassword />} />
        <Route path="editproduct/:id" element={<EditProduct />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App;