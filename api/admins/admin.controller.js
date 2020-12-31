const { adminLogin } = require("./admin.service.js");
const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    adminLogin: (req,res) => {
        const body = req.body;
        adminLogin(body.email,(err,results) => {
            if(err)
            {
                console.log(err);
            }
            if(!results)
            {
                return res.json({
                    success:0,
                    messsage: "Invalid email or password"
                })
            }
            const result = compare(body.password,results.password);
            if(result)
            {
                results.password = undefined;
                const jsontoken = sign({result:results},process.env.JSONWEBTOKEN_KEY,{
                    expiresIn: "1h"
                });
                return res.json({
                    success:1,
                    messsage:"Authorized administrator",
                    token: jsontoken
                });
            }
            else {
                return res.json({
                    success:0,
                    messsage:"Invalid login"
                }); 
            }
        })
    }
}