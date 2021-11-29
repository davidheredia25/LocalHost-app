const Brand = require('../../../models/Brand');
const { 
    verificacionName,
    verificacionC,
    verificacionT
} = require('./middleware');

const createBrand = async (req, res) => {
    const { name, categories, types } = req.body;
    // console.log('name createBrand', name);
    // console.log('categories createBrand', categories);
    // console.log('types createBrand', types);
    try {
        let verificacionBrand = await verificacionName(name);
        // console.log('verificacion createBrand', verificacionBrand);
        if(verificacionBrand.bool)  return res.send(`La marca ${name} ya existe`);
        
        let verificacionCategory = [];
        for(let i = 0; i < categories.length; i++) {
            let verificacionCa = await verificacionC(categories[i]);
            // console.log('verificacionCa createBrand', verificacionCa);
            if(verificacionCa.bool) continue
            else return res.send('Algunas de las categoria no es valida');
            verificacionCategory.push(verificacionCa.category);
        }
        // console.log('verificacionCategory createBrand', verificacionCategory);
        
        let verificacionTypes = [];
        for(let i = 0; i < types.length; i++) {
            let verificacionTy = await verificacionT(types[i]);
            // console.log('verificacionTy createBrand', verificacionTy);
            if(verificacionTy.bool) continue
            else return res.send('Algunas de las categoria no es valida');
            verificacionTypes.push(verificacionTy.type);
        }
        // console.log('verificacionTypes createBrand', verificacionTypes);
        
        let newBrand = new Brand({
            name,
            categories: {
                name: verificacionCategory,
                types: verificacionTypes
            }
        });
        newBrand = await newBrand.save();
        console.log('newBrand createBrand', newBrand);
        res.json(newBrand);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createBrand
};