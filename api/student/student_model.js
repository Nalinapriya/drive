const pool=require("../../config/database");
module.exports={
    insert: (data, callBack) => {
        pool.query(
            `INSERT INTO marks( stud_id, CN, DAA, DS, OOAD, JAVA, OOPS, Total_marks, percentage, pass_fail) 
            VALUES (?,?,?,?,?,?,?,?,?,?)`,
          [
            data.stud_id,
            data.CN,
            data.DAA,
            data.DS,
            data.OOAD,
            data.JAVA,
            data.OOPS,
            data.Total_marks,
            data.percentage,
            data.pass_fail
          ],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
    }

};