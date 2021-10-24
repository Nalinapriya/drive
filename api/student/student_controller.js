const {
    insert
  } = require("./student_model");

module.exports={
    insertMark: (req, res) => {
        const body = req.body;
        body.Total_marks=body.CN+body.DAA+body.DS+body.OOAD+body.JAVA+body.OOPS;
        body.percentage=body.Total_marks/6;
        insert(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            body: results
          });
        });
    }

}