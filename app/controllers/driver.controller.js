const db = require("../models");
const Book = db.book;
const Register = db.register
const User = db.user;
exports.driverRegister = (req, res) => {
    Register.create({
        //user_id: req.body.user_id,
        currentLocation: req.body.currentLocation,
        vehicleType: req.body.vehicleType
    }).then(register => {
        return res.status(200).send({message:"Database updated"});
    })
}

exports.driverNotify = (req,res) => {
    Register.findOne({
        where: {
            user_id: req.body.user_id
        },
        include: Book
    }).then(result => {
        User.findOne({
            where: {
                id: result
            }
        }).then(result => res.send(result)).catch(err=>console.log(err));
    }).catch(err => console.log(err));
}