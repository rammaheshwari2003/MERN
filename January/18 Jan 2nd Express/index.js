// const express=require("express");
// const app=express();

// app.get("/", (req, res)=>{
//     res.send(" Hello i am learn MERN Stack");
// })

// app.get("/home", (req, res)=>{
//     res.send("This is my home page");
// })

// app.post("/dataSave", (req,res)=>{
//     res.send("Data save successfully");
// })


// app.listen(8000, ()=>{
//     console.log("Server run on 8000");
// });






const express=require("express");
const app=express();
const port=9000;

app.get("/student/home", (req, res)=>{
    res.send("This is student home page");
})

app.get("/student/about", (req, res)=>{
    res.send("This is student about page");
})

app.get("/student/fees", (req,res)=>{
    res.send("This is student fees page");
})


app.get("/teacher/home", (req, res)=>{
    res.send("This is teacher home page");
})

app.get("/teacher/about", (req, res)=>{
    res.send("This is teacher about page");
})

app.get("/teacher/dep", (req,res)=>{
    res.send("This is teacher departement  page");
})


app.listen(port, ()=>{
    console.log(`Server run on ${port}`);
});