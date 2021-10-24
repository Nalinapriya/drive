const pool=require("../../config/database");
module.exports={
    insertAdmin: (data, callBack) => {
        pool.query(
            `INSERT INTO admin( admin_id,firstName, lastName,email,phone,password) 
            VALUES (?,?,?,?,?,?)`,
          [
            data.id,
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.password
          ],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    insertStudent: (data, callBack) => {
        pool.query(
            `INSERT INTO student(stud_id,firstName, lastName,email,phone,password) 
            VALUES (?,?,?,?,?,?)`,
          [
            data.id,
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.password
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