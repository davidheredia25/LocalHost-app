const Product = require('../../../models/Product');
const { 
    verificacionName,
    
} = require('./middleware');

const createProduct = async (req, res) => {
    const { 
        name,
        brand,
        categories, 
        types, 
        price, 
        color, 
        talle, 
        stock
    } = req.body;
    try {
        let verificacion = verificacionName(name);
        console.log('verificacion createProduct', verificacion);
        if(verificacion.bool) return res.send(`El producto ${name} ya existe`);

        let verificacionBrand = [];
        for(let i = 0; i < categories.length; i++) {
            let verificacionBr = await verificacionC(brand[i]);
            console.log('verificacionBr createProduct', verificacionCa);
            if(verificacionCa.bool) continue
            else return res.send('Algunas de las categoria no es valida');
            verificacionCategory.push(verificacionCa.category);
        }
        console.log('verificacionBrand createProduct', verificacionCategory);

        let verificacionCategory = [];
        for(let i = 0; i < categories.length; i++) {
            let verificacionCa = await verificacionC(categories[i]);
            console.log('verificacionCa createProduct', verificacionCa);
            if(verificacionCa.bool) continue
            else return res.send('Algunas de las categoria no es valida');
            verificacionCategory.push(verificacionCa.category);
        }
        console.log('verificacionCategory createProduct', verificacionCategory);
        
        let verificacionTypes = [];
        for(let i = 0; i < types.length; i++) {
            let verificacionTy = await verificacionT(types[i]);
            console.log('verificacionTy createProduct', verificacionTy);
            if(verificacionTy.bool) continue
            else return res.send('Algunas de las categoria no es valida');
            verificacionTypes.push(verificacionTy.type);
        }
        console.log('verificacionTypes createProduct', verificacionTypes);

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createProduct
};