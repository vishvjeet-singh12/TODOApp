const {z}=require("zod");

const signupSchema=z.object({
     username:z.
       string({required_error:"Username is required"})
       .trim()
       .min(5,{message:" Username have atleast 5 character is required"})
       .max(255,{message:"Maximum 255 character is required"}),

       email:z.
       string({required_error:"Email is required"})
       .email({message:"Correct Email us required"})
       .trim()
       .min(5,{message:"Email have atleast 5 character is required"}),

       password:z.
       string({required_error:"Password is required"})
       .min(4,{message:"Password have atleast 5 character is required"})
       .max(10,{message:"Password maximum 10 character is accepted"}),

       mobile:z.
       string({required_error:"Mobile Number is required"})
       .max(13,{message:"Mobile no. max 10 charcter is required"})
       .min(10,{message:"Mobile no. min 13 character is accepted"})
});
module.exports=signupSchema;