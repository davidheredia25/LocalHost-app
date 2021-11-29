const Product = require('../../../models/Product');
const { 
    verificacionName,
    verificacionB,
    verificacionC,
    verificacionT
} = require('./middleware');

const createProduct = async (req, res) => {
    const { 
        name,
        brand, //String
        categories, //String
        types, //String
        price, 
        color, 
        talle, 
        stock
    } = req.body;
    try {
        let verificacion = verificacionName(name);
        // console.log('verificacion createProduct', verificacion);
        if(verificacion.bool) return res.send(`El producto ${name} ya existe`);

        if(brand !== '') {
            let verificacionBrand = await verificacionB(brand);
            // console.log('verificacionBrand createProduct', verificacionBrand);
            if(verificacionBrand.bool) brand = verificacionBrand.brand
            else return res.send('La marca no es valida');
        } 
        // console.log('brand createProduct', brand);

        if(categories !== '') {
            let verificacionCategory = await verificacionC(categories);
            // console.log('verificacionCategory createProduct', verificacionCategory);
            if(verificacionCategory.bool) categories = verificacionCategory.category
            else return res.send('La categoria no es valida');
        }
        // console.log('categories createProduct', categories);
        
        if(types !== '') {
            let verificacionTypes = await verificacionT(types);
            // console.log('verificacionTypes createProduct', verificacionTypes);
            if(verificacionTypes.bool) types = verificacionTypes.type
            else return res.send('El tipo no es valido');
        }
        // console.log('types createProduct', types);

        let newProduct = new Product({
            name,
            brand: brand,
            category: categories,
            types: types,
            price, 
            color, 
            talle, 
            stock
        });
        newProduct = await newProduct.save();
        // console.log('newProduct createProduct', newProduct);
        res.json(newProduct);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createProduct
};