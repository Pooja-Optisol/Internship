const products = [];
const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProductsFromFile = (cb) => {
        fs.readFile(p,(err,fileContent) => {
            if(err)
            {
                return cb([]);
            }
            cb(JSON.parse(fileContent)); //To convert string read from the file to an array
        })
}
module.exports = class Product {
    constructor(title)
    {
        this.title = title;
    }

    save()
    {
        // products.push(this);
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err) => {
                console.log(err);
            })
        })
        // const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
        // fs.readFile(p,(err,fileContent) => {
            // let products = [];
            // if(!err)
            // {
            //     products = JSON.parse(fileContent); //Returns a JS object
            // }
            // products.push(this);
            // fs.writeFile(p,JSON.stringify(products),(err) => {
            //     console.log(err);
            // })
        // })
    }

    static fetchAll(cb)   //So that I don't have to instantiate an object to call it
    {
        getProductsFromFile(cb);
        // const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
        // fs.readFile(p,(err,fileContent) => {
        //     if(err)
        //     {
        //         cb([]);
        //     }
        //     cb(JSON.parse(fileContent)); //To convert string read from the file to an array
        // })
        // return products;
    }
}
