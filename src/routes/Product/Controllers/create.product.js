const Product = require('../../../models/Product');
const cloudinary = require('../../Cloudinary/Middleware')
const fs = require('fs-extra');

const {
    verificacionName,
    verificacionB,
    verificacionC,
    verificacionT
} = require('./middleware');

const createProduct = async (req, res) => {
    const {
        name,
        description,
        brand, // String
        categories, // String
        types, // String
        price,
        color,
        talle, // Array de obj
    } = req.body;
    // console.log("body (T.C.B.N.T) createproduct: ", types, categories, brand, name, talle);
    try {
        let verificacion = await verificacionName(name);
        // console.log('verificacion createProduct', verificacion);
        if (verificacion.bool) return res.send(`El producto ${name} ya existe`);

        let brands;
        if (brand !== "") {
            let verificacionBrand = await verificacionB(brand);
            // console.log('verificacionBrand createProduct', verificacionBrand);
            if (verificacionBrand.bool) brands = verificacionBrand.brand
            else return res.json(verificacionBrand.message);
        } else { return res.send('Se necesita marcas'); }
        // console.log('brands createProduct', brands);

        let category;
        if (categories !== "") {
            let verificacionCategory = await verificacionC(categories);
            // console.log('verificacionCategory createProduct', verificacionCategory);
            if (verificacionCategory.bool) category = verificacionCategory.category
            else return res.json(verificacionCategory.message);
        } else { return res.send('Se necesita categorias') }
        // console.log('category createProduct', category);

        let type;
        if (types !== "") {
            let verificacionTypes = await verificacionT(types);
            // console.log('verificacionTypes createProduct', verificacionTypes);
            if (verificacionTypes.bool) type = verificacionTypes.type
            else return res.json(verificacionTypes.message);
        } else { return res.send('Se necesita tipos') }
        // console.log('type createProduct', type);

        let sumStock = 0;
        talle.forEach(t => sumStock += t.stockTalle);

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            let newProduct = new Product({
                name,
                description,
                brand: brands,
                category: category,
                type: type,
                price,
                color,
                talle,
                stock: sumStock,
                image: result.url
            });
            newProduct = await newProduct.save();
            await fs.unlink(req.file.path);
            // console.log('newProduct createProduct', newProduct);
            return res.json(newProduct);
        }
        let newProduct = new Product({
            name,
            description,
            brand: brands,
            category: category,
            type: type,
            price,
            color,
            talle,
            stock: sumStock,
            image: ''
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