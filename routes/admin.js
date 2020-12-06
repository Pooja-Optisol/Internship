const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const products = [];
router.get('/addProduct',(req,res,next) => {
    res.render('add-product',{prods : products, docTitle: 'Add Product',productCSS:true});
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    //res.send('<form action = "/admin/product" method="POST"><input type="text" name="title"></input><button type="submit">Send</button></form>');

})
router.post('/product', (req,res,next) => {    //While router.use allows get and post requests router.get/router.post would only allow that specific kind of request
    // console.log(req.body);  //Yields an object(key value pairs) containing the sent data. body is accessible since we called bodyParser.urlencoded();
    // console.log(req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;