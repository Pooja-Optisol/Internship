const { Router } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/all",(req,res) => {
    db.dummy.findAll().then(dummies => res.send(dummies));
})

router.get("/find/:id",(req,res) => {
    db.dummy.findAll({
        where: {
            id: req.params.id
        }
    }).then(data => res.send(data));
})

router.post('/new',(req,res) => {
    db.dummy.create({
        text: req.body.text
    }).then(submittedData => res.send(submittedData));
});

router.put('/edit',(req,res) => {
    db.dummy.update({
        text: req.body.text
    },
    {
        where: { id: req.body.id }
    }).then(() => res.send("Success!"));
});

router.delete('/delete/:id',(req,res) => {
    db.dummy.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Success!"));
})

module.exports = router;