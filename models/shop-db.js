const db = require('../utils/database');

module.exports = class Fetch {
    constructor(id, title, imageURL, description, price)
    {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.description == description;
        this.price = price;
    }
    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }
}