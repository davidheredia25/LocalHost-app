const Product = require('../../../models/Product');
const { 
    verificacionId,
    verificacionB,
    verificacionC,
    verificacionT
} = require('./middleware');

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { 
        name,
        brand, //String
        categories, //String
        types, //String
        price, 
        color, 
        talle, 
        stock,
        // review
    } = req.body;
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion updateProduct', verificacion);
        
        if(verificacion.bool) {
            if(brand !== "") {
                let verificacionBrand = await verificacionB(brand);
                // console.log('verificacionBrand updateProduct', verificacionBrand);
                if(verificacionBrand.bool) brand = verificacionBrand.brand
                else return res.send(`No se encontro la marca ${brand}`); 
            }
            // console.log('brand updateProduct', brand);
            
            if(categories !== "") {
                let verificacionCategory = await verificacionC(categories);
                // console.log('verificacionCategory updateProduct', verificacionCategory);
                if(verificacionCategory.bool) categories = verificacionCategory.category  
                else return res.send(`No se encontro la categoria ${categories}`); 
            } 
            // console.log('categories updateProduct', categories);
            
            if(types !== "") {
                let verificacionType = await verificacionT(types);
                // console.log('verificacionType updateProduct', verificacionType);
                if(verificacionType.bool) types = verificacionType.type 
                else return res.send(`No se encontro el tipo ${types}`); 
            }
            // console.log('types updateProduct', types);
            
            let update = await Product.findByIdAndUpdate(id, {
                name: name,
                brand: brand,
                category: categories, 
                type: types, 
                price: price, 
                color: color, 
                talle: talle, 
                stock: stock,
                // review: review  
            }, { new: true });
            update = await update.save();
            // console.log('update updateProduct', update);
            return res.json(update);
        }
        res.send('No se encontro el producto para editarlo');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateProduct
};