const {
    insertAdmin,
    insertStudent
  } = require("./registration_model");
  const{genSaltSync,hashSync,compareSync}=require("bcrypt");
module.exports={
    insertUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        const result = compareSync(body.confirmPassword,body.password);
        if(!result){
            return res.status(500).json({
                success: 0,
                message: "passwords do not match"
              });
        }else{
        if(body.user=="admin")
        {
        insertAdmin(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
    }
    else if(body.user=="student"){
        insertStudent(body, (err, results) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                success: 0,
                message: "Database connection errror"
              });
            }
            return res.status(200).json({
              success: 1,
              data: results
            });
          });
    }
    else{
        return res.status(200).json({
            success: 1,
            message:"invalid user"
          });
    }
}
}

}