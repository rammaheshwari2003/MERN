import { BrowserRouter,Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Display from "./Pages/Display"
import Insert from "./Pages/Insert"
import Search from "./Pages/Search"
import Update from "./Pages/Update";
import Edit from "./Pages/Edit";

const App=()=>{
  return(
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="search" element={<Search/>}/> 
      <Route path="update" element={<Update/>}/>
      <Route path="edit/:id" element={<Edit/>}/>


      </Route>

      </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;