require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");

const router=require("./Router/Router");
const Database=require("./Database");
const ErrorMiddelware=require("./Middelware/ErrorMiddelware");
app.use(express.json());

const corsOptions={
    origin:"http://localhost:3001",
    method:"POST,GET,DELETE,PATCH",
    credentials:true
}
app.use(cors(corsOptions));

app.use("/api",router);
Database();
app.use(ErrorMiddelware)
app.listen(3000,(err)=>{
    if(err){
        consoler.log(err);
    }
    console.log("Server run on port 3000");
})