const pool = require("../../config/database");

module.exports = {
    create: (data,callBack) => {
        pool.query(
            `insert into driver(DriverFirstName, DriverLastName, DriverGender, DriverEmail, DriverCell, DriverPassword) values (?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.cell,
                data.password
            ],
            (error,results,fields) => {
                if(error)
                {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getDrivers: callBack => {
        pool.query(
            `select DriverID, DriverFirstName, DriverLastName, DriverGender, DriverEmail, DriverCell from driver`,
            [],
            (error,results,fields) =>
            {
                if(error)
                {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    getDriversById: (id,callBack) => {
        pool.query(
            `select DriverID, DriverFirstName, DriverLastName, DriverGender, DriverEmail, DriverCell from driver where DriverID = ?`,
            [
                id
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    updateDriver: (data,callBack) => {
        pool.query(
            `update driver set DriverFirstName=?,DriverLastName=?,DriverGender=?,DriverEmail=?,DriverCell=? where DriverID=?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.cell,
                data.id 
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deleteDriver: (id,callBack) => {
        pool.query(
            `delete from driver where DriverID=?`,
            [
                id
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    }
};