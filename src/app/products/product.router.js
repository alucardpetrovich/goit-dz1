const ProductController = require('./product.controller');

module.exports = {
    basePath: '/products',

    routes: {
        'GET /': ProductController.getAllProducts,
    }
};
