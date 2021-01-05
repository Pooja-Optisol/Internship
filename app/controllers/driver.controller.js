const db = require("../models");
const RegisterDriver = db.registerdriver

exports.driverRegister = (req, res) => {
    RegisterDriver.create({
        user_id: req.body.user_id,
        currentLocation: req.body.currentLocation,
        vehicleType: req.body.vehicleType
    }).then(registerdriver => {
        return res.status(200).send({message:"Database updated"});
    })
}