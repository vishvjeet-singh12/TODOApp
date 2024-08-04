const jwt=require("jsonwebtoken")
const UserModel = require("../Model/UserModel");
const UserMiddelware=async(req,res,next)=>{
    const token=req.header("Authorization");
     if(!token){
        res.json({
            message:"Token is not provided"
        })
     }
     const jsonwebtoken=token.replace("Bearer ","").trim();
       try {
         const jwtVerified=jwt.verify(jsonwebtoken,process.env.JWT_SECRET_KEY);
         const UserData=await UserModel.findOne({email:jwtVerified.email},{password:0});
          
         req.user=UserData;
         req.token=token;
         
         next();
       } catch (error) {
        console.log(error);
       }
}
module.exports=UserMiddelware;