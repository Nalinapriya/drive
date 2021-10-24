const {
    insertMark
  } = require("./student_controller");

const router=require("express").Router();
const{checkToken}=require("../../auth/token_vaildation");
router.post("/",  insertMark);

module.exports=router;
