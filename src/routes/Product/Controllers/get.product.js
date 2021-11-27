const Product = require('../../../models/Product');
const { verificacionId } = require('./middleware');

const getProducts = async (req, res) => {
    const { name } = req.query;
    console.log('name getProducts', name);
    try {
        let getAllProducts = await Product.find();
        // console.log('getAllProducts getProducts', getAllProducts);
        if(!name) return res.json(getAllProducts);
        
        let getProductsName = await product.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));    
        // console.log('getProductsName getProducts', getProductsName);
        res.json(getProductsName);
    } catch (error) {
        console.log(error);
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    console.log('id getProducts', id);
    try {
        let verificacion = verificacionId(id);
        // console.log('verificacion getProducts', verificacion);

        if(verificacion.bool) return res.json(verificacion.product);
        res.send('No se encontro el producto');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getProducts,
    getProductById
};