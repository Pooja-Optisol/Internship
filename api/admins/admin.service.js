const pool = require("../../config/database");

module.exports = {
    adminLogin: (email,callBack) => {
        pool.query(
            `select * from admin where AdminEmail = ?`,
            [email],
            (error,results,fields) => {
                if(error)
                {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    }
}