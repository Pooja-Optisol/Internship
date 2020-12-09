const Product = require('../models/product-db');
const Fetch = require('../models/shop-db');

// const products = [];
exports.getAddProduct = (req,res,next) => {
    Fetch.fetchAll().then(([rows,metaData]) => {
        res.render('add-product',{
            docTitle: 'Add Product',
            productCSS:true,
            product:rows,
            path:'/'})
    })}

exports.postAddProduct = (req,res,next) => {    //While router.use allows get and post requests router.get/router.post would only allow that specific kind of request
    // console.log(req.body);  //Yields an object(key value pairs) containing the sent data. body is accessible since we called bodyParser.urlencoded();
    // console.log(req.body.title);
    // products.push({title: req.body.title});
    // const product = new Product(req.body.title); //Extracts from add-product.ejs
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const product = new Product(title,imageURL,description,price);
    product.save().then(() => {
        res.redirect('/');
    }).
    catch(error=>console.log(error));
}

// exports.getProduct = (req,res,next) => {
//     // const products = adminData.products;
//     Product.fetchAll(products => {
//         res.render('shop', {prods:products,docTitle:'Shop',path:'/',hasProduct:products.length>0});
//     });
//     // console.log(adminData.products);
//     // res.sendFile(path.join(rootDir,'views','shop.html'));
// }