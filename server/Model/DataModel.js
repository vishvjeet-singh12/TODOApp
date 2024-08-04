const mongoose=require("mongoose");
const DataSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }
})
const DataModel=mongoose.model("TodoData",DataSchema);
module.exports=DataModel;