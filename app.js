require("dotenv").config();
const express=require("express");
const app=express();

const registrationRouter=require("./api/registration/registration_router");
//const adminRouter=require("./api/admin/admin_router");
const studentRouter=require("./api/student/student_router");

app.use(express.json());
app.use("/registration",registrationRouter);
//app.use("/admin",adminRouter);
app.use("/student",studentRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running in ",process.env.APP_PORT);
});