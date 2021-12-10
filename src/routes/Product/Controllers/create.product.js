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
        brand, // Array de String
        categories, // Array de String
        types, // Array de String
        price,
        color,
        talle, // Array de obj
        image
    } = req.body;
    console.log("body (T.C.B.N.T) createproduct: ", types, categories, brand, name, talle);
    try {
        let verificacion = await verificacionName(name);
        console.log('verificacion createProduct', verificacion);
        if (verificacion.bool) return res.send(`El producto ${name} ya existe`);

        let brands = [];
        if (brand.legth !== 0) {
            for(let b = 0; b < brand.legth; b++) {
                let verificacionBrand = await verificacionB(brand[b]);
                console.log('verificacionBrand createProduct', verificacionBrand);
                if (verificacionBrand.bool) brands = verificacionBrand.brand
                else return res.send('La marca no es valida');
            }
        } else { return re.send('Se necesita una marca'); }
        console.log('brands createProduct', brands);

        let category = [];
        if (categories.legth !== 0) {
            for(let c = 0; c < categories.legth; c++) {
                let verificacionCategory = await verificacionC(categories[c]);
                console.log('verificacionCategory createProduct', verificacionCategory);
                if (verificacionCategory.bool) category = verificacionCategory.category
                else return res.send('La categoria no es valida');
            }
        } else { return res.send('Se necesita una categoria') }
        console.log('category createProduct', category);

        let type = [];
        if (types.legth !== 0) {
            for(let t = 0; t < types.legth; t++) {
                let verificacionTypes = await verificacionT(types[t]);
                console.log('verificacionTypes createProduct', verificacionTypes);
                if (verificacionTypes.bool) type = verificacionTypes.type
                else return res.send('El tipo no es valido');
            }
        } else { return res.send('Se necesita una tipos') } 
        console.log('type createProduct', type);

        let sumStock = 0;
        talle.forEach(t => sumStock += t.stockTalle);

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