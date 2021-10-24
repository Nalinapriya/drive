const{saveEmployee}=require("./admin_model");

module.exports={
    saveEmp:(req,res)=>{
        const body=req.body;
        saveEmployee(body,(err,results)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection  errror"
                });
              }
              return res.status(200).json({
                success: 1,
                data: results
              });
        });
    }
}