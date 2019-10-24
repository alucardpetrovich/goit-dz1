const fsPromises = require('fs').promises;

class ProductModel {
    constructor() {
        this._productsPath = './src/db/products/all-products.json';
    }

    async getAllProducts() {
        return fsPromises.readFile(this._productsPath, 'utf8');
    }

}

module.exports = new ProductModel();
