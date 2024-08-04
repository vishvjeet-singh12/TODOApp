const express=require("express");
const router=express.Router();
const controller=require("../Controller/Usercontroller");
const UserMiddelware=require("../Middelware/UserMiddelware")
const DataController=require("../Controller/DataContoller");
const SignupSchema=require("../Middelware/Signupschema");
const Validator=require("../Middelware/Validator");

router.post("/registertodo",Validator(SignupSchema),controller.register);
router.post("/logintodo",controller.login);
router.get("/user",UserMiddelware,controller.user);

router.post("/data",DataController.Data);
router.get("/alldata",DataController.getAllData);
router.delete("/delete/:id",DataController.deleteById);
router.get("/data/edit/:id",DataController.editById);
router.patch("/data/update/:id",DataController.updateById);

module.exports=router;