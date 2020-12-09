// const path = require('path');
const express = require('express');
const router = express.Router();
//const rootDir = require('../utils/path');
const productsController = require('../controllers/products');

router.get('/addProduct',productsController.getAddProduct);
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    //res.send('<form action = "/admin/product" method="POST"><input type="text" name="title"></input><button type="submit">Send</button></form>');

//})
router.post('/product', productsController.postAddProduct);

module.exports = router;
//exports.products = products;