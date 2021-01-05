const db = require("../models");
const registerdriver = require("../models/registerdriver");
const BookDriver = db.bookdriver;
const RegisterDriver = db.registerdriver

exports.userBook = (req, res) => {
    BookDriver.create({
        user_id: req.body.user_id,
        from: req.body.from,
        to: req.body.to,
        vehicleType: req.body.vehicleType
    }).then(bookdriver => {
        // return res.status(200).send({message:"Database updated"});
        RegisterDriver.findAll({
            where: {
              currentLocation: bookdriver.from
            }
          }).then(result => {
              res.send(result);
          });
    })
}