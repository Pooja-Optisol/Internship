const db = require('../utils/database');

module.exports = class Product {
    constructor(id, title, imageURL, description, price)
    {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.description == description;
        this.price = price;
    }
    save() {
        return db.execute('INSERT INTO products (title,price,imageURL,description) VALUES (?,?,?,?)',
        [this.title,this.price,this.imageURL,this.description]
        );
    }
}