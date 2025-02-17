import { BrowserRouter,Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App=()=>{
  return(
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />

      </Route>

      </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;