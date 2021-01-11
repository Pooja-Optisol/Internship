const db = require("../models");
const Book = db.book;
const Register = db.register;
const User = db.user;
exports.userBook = (req, res) => {
    Book.create({
        //user_id: req.body.user_id,
        from: req.body.from,
        to: req.body.to,
        vehicleType: req.body.vehicleType
    }).then(book => {
        //return res.status(200).send({message:"Database updated"});
        Register.findAll({
            where: {
              currentLocation: book.from,
              vehicleType: book.vehicleType 
            }
        }).then(result => {
                book.setRegisters(result);
                res.send(result);
          }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}

exports.userConfirm = (req, res) => {
    const id = req.body.user_id;
    User.findOne({
        where: {
            id
        },
        // include: [{ model: Register }]
    }).then(result => {
        res.send(result);
    }).catch(error => res.send(error));
}

// exports.test = (req, res) => {
//     const id = req.body.user_id;
//     // console.log(id);
//     // res.end();
//     User.findOne({
//         where: {
//             id
//         },
//         // include: [{ model: Register }]
//     }).then(result => {
//         res.send(result);
//     }).catch(error => res.send(error));
// }