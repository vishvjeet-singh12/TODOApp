const mongoose=require("mongoose");

const URI=process.env.MONDODB_URI;
const Database=()=>{
   mongoose.connect(URI).then(()=>{
    console.log("Database is Connected");
   }).catch((err)=>{
    console.log(err);
   })
}
module.exports=Database;