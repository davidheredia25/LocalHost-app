const Brand = require('../../../models/Brand');
const { 
    verificacionId,
    verificacionC,
    verificacionT
} = require('./middleware');

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name, categories, types } = req.body;
    // console.log('id updateBrand', id);
    // console.log('name updateBrand', name);
    // console.log('categories updateBrand', categories);
    // console.log('types updateBrand', types);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion updateBrand', verificacion);

        if(verificacion.bool) {
            let verificacionCategory = [];
            if(categories) {
                for (let i = 0; i < categories.length; i++) {
                    let verificacionCa = await verificacionC(categories[i]);
                    // console.log('verificacionCa updateBrand', verificacionCa);
                    if(verificacionCa.bool) verificacionCategory.push(verificacionCa.category);
                    else return res.send('Algunas de las categoria no es valida');
                };
                // console.log('verificacionCategory updateBrand', verificacionCategory);
            }
    
            let verificacionTypes = [];
            if(types) {
                for(let i = 0; i < types.length; i++) {
                    let verificacionTy = await verificacionT(types[i]);
                    // console.log('verificacionTy updateBrand', verificacionTy);
                    if(verificacionTy.bool) verificacionTypes.push(verificacionTy.type);
                    else return res.send('Algun tipo no es valida');
                };
                // console.log('verificacionTypes updateBrand', verificacionTypes);
            }

            let update = await Brand.findByIdAndUpdate(id, {
                name: name,
                categories: {
                    name: verificacionCategory,
                    types: verificacionTypes
                }
            }, {new: true});
            update = await update.save();
            // console.log('update updateBrand', update);
            return res.json(update);
        }
        res.send('El id del producto no es valido');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateBrand
};