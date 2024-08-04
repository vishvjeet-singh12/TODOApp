const UserModel=require("../Model/UserModel");
const bcrypt=require("bcrypt");
const register=async(req,res)=>{
    try {
        const {username,email,password,mobile}=req.body;
        const userExist=await UserModel.findOne({email});
          if(userExist){
            return res.json({
                message:"User already exist"
             })
          }
        const User=await UserModel.create({username,email,password,mobile});

        res.json({
            message:"Successfully Registered",
        })
    } catch (error) {
         console.log(error);
    }
}

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
         const userExist=await UserModel.findOne({email});

         if(!userExist){
            return res.json({
                message:"User is not Exist"
            })
         }

         const user=await bcrypt.compare(password,userExist.password);
         if(user){
            res.json({
                message:"Successfully Loggedin",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            })
            console.log("User matched")
         }
         else{
            res.json({
                message:"Invalid Email or Password"
            })
            console.log("User does not matched")
         }
    }
    catch(error){
        console.log(error);
    }
}
const user=(req,res)=>{
    try {
        const user=req.user;
     res.json({
        message:"User",
        user
     })
    } catch (error) {
        console.log(error);
    }
}
module.exports={register,login,user}