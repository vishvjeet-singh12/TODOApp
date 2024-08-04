const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String, 
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
});

UserSchema.pre("save",async function(next){
    const user=this;
    if(!user.isModified("password")){
          next();
    }
    try {
         const saltRound=10;
         const hash_password=await bcrypt.hash(user.password,saltRound);
         user.password=hash_password;
    } catch (error) {
        console.log(error);
    }
})

UserSchema.methods.generateToken=async function(){
    try {
         return jwt.sign({
           userId:this._id.toString(),
           email: this.email
         },
         process.env.JWT_SECRET_KEY,
         {
            expiresIn:"50d"
         }
        )
    } catch (error) {
        
    }
}
const UserModel=mongoose.model("todoadata",UserSchema);
module.exports=UserModel;