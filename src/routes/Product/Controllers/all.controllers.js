const { createProduct } = require('./create.product');
const { deleteProduct } = require('./delete.product');
const { getProducts, getProductById, getTalles } = require('./get.product');
const { updateProduct, updateRating } = require('./update.product');


module.exports = {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct,
    updateRating,
    getTalles
};