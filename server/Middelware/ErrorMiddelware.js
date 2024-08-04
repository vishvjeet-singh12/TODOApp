const ErrorMiddelware=(err,req,res,next)=>{
    const status=err.status || 422;
    const message=err.message || "Fill out correct details";
    const extraDetails=err.extraDetails;

    return res.status(status).json({message,extraDetails});

}
module.exports=ErrorMiddelware;