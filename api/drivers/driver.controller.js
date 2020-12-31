const { create, getDriversById, getDrivers, updateDriver, deleteDriver } = require("./driver.service.js");
const {genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        create(body,(err,results) => {
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    success:0,
                    messsage: "Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    getDriversById: (req,res) => {
        const id = req.params.id;
        getDriversById(id,(err,results)=> {
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json(
                    {
                        success:0,
                        messsage:"Record not found"
                    }
                )
            }
            return res.json(
                {
                    success:1,
                    data:results
                }
            )
        })
    },
    getDrivers: (req,res) => {
        getDrivers((err,results) => {
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json(
                    {
                        success:0,
                        messsage:"Record not found"
                    }
                )
            }
            return res.json(
                {
                    success:1,
                    data:results
                }
            )
        })
    },
    updateDriver: (req,res) => {
        const body = req.body;
        updateDriver(body,(err,results) => {
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json(
                    {
                        success:0,
                        messsage:"Record not found"
                    }
                )
            }
            return res.json(
                {
                    success:1,
                    message:"Updated successfully"
                }
            )
        })
    },
    deleteDriver: (req,res) => {
        const id = req.params.id;
        deleteDriver(id,(err,results) => {
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json(
                    {
                        success:0,
                        messsage:"Record not found"
                    }
                )
            }
            return res.json(
                {
                    success:1,
                    message: "Deleted record"
                }
            )
        })
    }
}