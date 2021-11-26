const Product = require('../../../models/Product');
const { verificacionName } = require('./middleware');

const createProduct = async (req, res) => {
    const {name, brandId, categoriesId, typesId, price, color, talle, stock} = req.body;
    try {
        letverif 
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createProduct
};