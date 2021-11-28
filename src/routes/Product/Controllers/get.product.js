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
        let getAllProducts = await Product.find();
        // console.log('getAllProducts getProducts', getAllProducts);
        // filter
        let filtered = [];
        let filterBrand = [];
        let filterCategories = [];
        let filterTypes = [];
        if(brand !== "") {
            filterBrand = await filterB(brand);
            // console.log('filterBrand getProducts', filterBrand);
            filtered = [...filterBrand];
        }  

        if(category !== "") {
            filterCategories = await filterC(category, filterBrand);
            // console.log('filterCategories getProducts', filterCategories);
            filtered = [...filterCategories];
        } 
        
        if(type !== "") {
            filterTypes = await filterT(type, filterCategories);
            // console.log('filterTypes getProducts', filterTypes);
            filtered = [...filterTypes];
        }

        // Search
        if(name === "" && filtered.length === 0) return res.json(getAllProducts);
        
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
    console.log('id getProducts', id);
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