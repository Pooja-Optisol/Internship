const db = require("../models");
const BookDriver = db.bookdriver;

exports.userBook = (req, res) => {
    BookDriver.create({
        user_id: req.body.user_id,
        from: req.body.from,
        to: req.body.to,
        vehicleType: req.body.vehicleType
    }).then(bookdriver => {
        return res.status(200).send({message:"Database updated"});
    })
}