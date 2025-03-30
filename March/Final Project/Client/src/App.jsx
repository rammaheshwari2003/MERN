import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";

import AdminLogin from "./admin/AdminLogin";

import AdminDashBaord from "./admin/AdminDashboard";
import AdminHome from "./admin/AdminHome";
import AddProduct from "./admin/AddProduct";
import ManageProduct from "./admin/ManageProduct";
import ResetPassword from "./admin/ResetPassword";
const App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       </Route>
      </Routes>

      <Routes>
        <Route path="adminlogin" element={<AdminLogin />} />
      </Routes>

      <Routes>
        <Route path="admindashboard" element={<AdminDashBaord />}>
        <Route index element={<AdminHome />} />
        <Route path="adminHome" element={<AdminHome />} />
        <Route path="addminAddProduct" element={<AddProduct/>} />
        <Route path="adminManageProduct" element={<ManageProduct />} />
        <Route path="adminResetPassword" element={<ResetPassword />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App;