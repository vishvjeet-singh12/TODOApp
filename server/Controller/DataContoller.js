const DataModel=require("../Model/DataModel");
 
const Data=async(req,res)=>{
    try {
         const {title,date,amount}=req.body;
         const UserData=await DataModel.create({title,date,amount});
         res.json({
            message:"Data is added",
            data:UserData
         })
    } catch (error) {
        console.log(error);
    }
}
const getAllData=async(req,res)=>{
    try {
         const allData=await DataModel.find();
         res.json({
            message:"AllData",
            allData
         })
    } catch (error) {
        console.log(error);
    }
}
const deleteById=async(req,res)=>{
    try {
         const id=req.params.id;
         await DataModel.deleteOne({_id : id});
         res.json({
            message:"Successfully Deleted"
         })
    } catch (error) {
        console.log(error);
    }
}
const editById=async(req,res)=>{
    try {
        const id=req.params.id;
        const DatasDetail=await DataModel.findOne({_id : id});
    
        res.json({
            message:"DataDetails",
            DatasDetail
        })  
    } catch (error) {
        console.log(error);
    }
}
const updateById=async(req,res)=>{
    try {
        const id=req.params.id;
        const UpdatedData=req.body;
        const DataUpdation=await DataModel.updateOne(
            {_id :id},
         {
            $set:UpdatedData
         }
        )
       return res.json({
        message:"Data Successfully Updated",
        DataUpdation
       })
    } catch (error) {
        console.log(error);
    }
}
module.exports={Data,getAllData,deleteById,editById,updateById};