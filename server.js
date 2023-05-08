const express=require("express")
const app=express();
app.use(express.json());
app.set("view engine","ejs");
app.use("/user",require("./routes/user"));
// app.get("/user",(req,res)=>res.send("hello guys"));
app.listen(3000,(err)=>err?console.log(err):console.log("server is running"));
