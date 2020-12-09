const Product = require('../models/shop-db');

exports.getIndex = (req,res,next) => {
    Product.fetchAll()
    .then(([rows,metaData]) => {
        res.render('shop', {
            prods:rows,
            docTitle:'Shop',
            path:'/',
        });
    })
    .catch(err => {
        console.log(err);
    });
}