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
        description,
        brand, //String
        categories, //String
        types, //String
        price, 
        color, 
        talle, 
        stock,
        image
    } = req.body;
    console.log("name ctm", name )
    console.log("brand createproduct", brand )
    console.log("types createproduct", types )
    console.log("categories createproduct", categories )

    try {
        let verificacion = await verificacionName(name);
        console.log('verificacion createProduct', verificacion);
        if(verificacion.bool) return res.send(`El producto ${name} ya existe`);
        
        let brands;
        if(brand !== '') {
            let verificacionBrand = await verificacionB(brand);
            console.log('verificacionBrand createProduct', verificacionBrand);
            if(verificacionBrand.bool) brands = verificacionBrand.brand
            else return res.send('La marca no es valida');
        } 

         console.log('brand createProduct', brand);

        let category;
        if(categories !== '') {
            let verificacionCategory = await verificacionC(categories);
            console.log('verificacionCategory createProduct', verificacionCategory);
            if(verificacionCategory.bool) category = verificacionCategory.category
            else return res.send('La categoria no es valida');
        }
         console.log('categories createProduct', category);
        
         let type;
        if(types !== '') {
            let verificacionTypes = await verificacionT(types);
             console.log('verificacionTypes createProduct', verificacionTypes);
            if(verificacionTypes.bool) type = verificacionTypes.type
            else return res.send('El tipo no es valido');
        }
         console.log('types createProduct', type);

        let newProduct = new Product({
            name,
            description,
            brand: brands,
            category: category,
            type: type,
            price, 
            color, 
            talle, 
            stock,
            image
        });
        newProduct = await newProduct.save();
         console.log('newProduct createProduct', newProduct);
        res.json(newProduct);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createProduct
};