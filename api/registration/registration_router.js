const {
    insertUser
} = require("./registration_controller");

const {addUserValidation}=require("../../vald/user.validation");
const{mailVerification}=require("../../vef/nodeMailerpro");
const router=require("express").Router();

router.post("/", addUserValidation,mailVerification, insertUser);

module.exports=router;
