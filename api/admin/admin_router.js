const{saveEmp}=require("./admin_controller");
const adminRouter=require("express").Router();

adminRouter.post("/",saveEmp);
module.exports=adminRouter;