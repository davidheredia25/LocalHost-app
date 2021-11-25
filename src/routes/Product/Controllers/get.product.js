const Product = require('../../../models/Product');

const getProduct = async (req, res) => {
    const {name} = req.query;

    try {
        let product= await Product.find();
        if(name){
             product = product.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
             if(product.length===0){
                 res.json({error: 'Not Found'})
             }  
        }
        res.json(product)
    } catch (error) {
        console.log(error);
    }
};




const getProductById = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getProduct,
    getProductById
};