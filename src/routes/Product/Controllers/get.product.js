const Product = require('../../../models/Product');
const { 
    verificacionId,
    filterB,
    filterC,
    filterT 
} = require('./middleware');

const getProducts = async (req, res) => {
    const { 
        name,
        brand, 
        category, 
        type
    } = req.query;
    console.log('name getProducts', name);
    console.log('brand getProducts', brand);
    console.log('category getProducts', category);
    console.log('type getProducts', type);
    try {
        let getAllProducts = await Product.find()
        .populate('brand', ['name'])
        .populate('category', ['name'])
        .populate('type', ['name']);
        // console.log('getAllProducts getProducts', getAllProducts);
        
        // filter
        let filtered = [];

        if(brand !== "") filtered = await filterB(brand, getAllProducts);
        // console.log('filterBrand getProducts', filterBrand);

        if(category !== "") {
            if(filtered.length === 0 ) filtered = await filterC(category, getAllProducts);
            else filtered = await filterC(category, filtered);
        } 
        // console.log('filterCategories getProducts', filterCategories);
        
        if(type !== "") {
            if(filtered.length === 0)  filtered = await filterT(type, getAllProducts);
            else filtered = await filterT(type, filtered);
        }
        // console.log('filterTypes getProducts', filterTypes);

        // Search
        if(name === undefined && filtered.length === 0) return res.json(getAllProducts);
        
        if(filtered.length === 0) {
            let getProductsName = await getAllProducts.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));    
            // console.log('getProductsName getProducts', getProductsName);
            return res.json(getProductsName);
        }
        let getProductsFilterName = await filtered.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));    
        // console.log('getProductsFilterName getProducts', getProductsFilterName);
        res.json(getProductsFilterName);
    } catch (error) {
        console.log(error);
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    // console.log('id getProducts', id);
    try {
        let verificacion = await verificacionId(id);
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