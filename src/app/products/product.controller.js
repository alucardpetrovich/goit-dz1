const ProductModel = require('./product.model');

class ProductController {
    constructor() {}

    get getAllProducts() {
        return this._getAllProducts.bind(this);
    }

    async _getAllProducts(req, res) {
        const products = await ProductModel.getAllProducts();

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        
        return res.end( products );
    }
}

module.exports = new ProductController();
