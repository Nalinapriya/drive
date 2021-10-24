const pool=require("../config/database");
module.exports={
    saveEmployee:(data,callback)=>{
        pool.query(
            `insert into employee(name,email,phone,vehicleModel,vehicleNum,active) values(?,?,?,?,?,?)`,
            [
                data.name,
                data.email,
                data.phone,
                data.vehicleModel,
                data.vehicleNum,
                data.active
            ],
            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        );
    }
}
