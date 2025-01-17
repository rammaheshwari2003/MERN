                        /*  Read File */

// const http=require("http");
// const fs=require("fs");

// http.createServer(function(req, res){
    
//     fs.readFile("ram.txt", (err, data)=>{
//         if(err) throw err;
//         res.write(data);
//     res.end();

//     })

// }).listen(8000);



                                /* append file -- createfile  */
 /*                               
const fs=require("fs");

// fs.appendFile("rm.txt", " hello i am ram", (err)=>{       // txt
// fs.appendFile("rm.docx", " hello i am ram", (err)=>{     // word 
fs.appendFile("rm.pdf", " hello i am ram", (err)=>{        // pdf
    if(err) throw err;
    console.log("File Created");

})  */

                               /* Open File */

// const fs=require("fs");

// fs.open("ram.pdf", "w", (err, file)=>{
//     if(err) throw err;
//     console.log("File Created");
// })


                               /* Write File (New file create)  */

// const fs=require("fs");


// fs.writeFile("rm.pptx", "hi i am ram maheshwari ", (err)=>{
//     if(err) throw err;

//     console.log("File Created");

// })

                            /* Delete File */

// const fs=require("fs");

// fs.unlink("rm1.txt", (err)=>{
//     if(err) throw err;

//     console.log("File Deleted");
// })


                                /*  Rename File */

    const fs=require    
    fs.rename("rm.pptx","ram.pptx", (err)=>{
        if(err) throw err;

        console.log("File Rename");
    })
                                                                