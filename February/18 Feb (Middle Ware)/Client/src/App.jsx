import axios from "axios";
const App=()=>{

  
  const handleSubmit=()=>{
      let api="http://localhost:8000/home"
      axios.get(api).then((res)=>{
          console.log(res.data)
      })
  }
  const handleSubmit1=()=>{
      let api="http://localhost:8000/service";
      axios.get(api).then((res)=>{
        console.log(res.data)
    })
  }
  const handleSubmit2=()=>{
      let api="http://localhost:8000/about";
      axios.get(api).then((res)=>{
        console.log(res.data)
    })
  }




  return(
    <>
        <h1>Welcome</h1>
        <button onClick={handleSubmit}>Home</button>
        <button onClick={handleSubmit1}>Service</button>
        <button onClick={handleSubmit2}>About</button>
    </>
  )
}
export default App;