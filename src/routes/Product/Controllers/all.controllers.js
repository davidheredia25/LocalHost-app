const { createProduct } = require('./create.product');
const { deleteProduct } = require('./delete.product');
const { getProduct, getProductById } = require('./get.product');
const { updateProduct } = require('./update.product');


module.exports = {
    createProduct,
    deleteProduct,
    getProductById,
    getProduct,
    updateProduct
};