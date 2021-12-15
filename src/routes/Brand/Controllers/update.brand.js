const Brand = require('../../../models/Brand');
const { 
    verificacionId,
    verificacionC,
    verificacionT
} = require('./middleware');

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name, categories, types } = req.body;
    // console.log('id updateBrand: ', id);
    // console.log('body updateBrand: ', name, categories, types);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion updateBrand', verificacion);

        if(verificacion.bool) {
            let verificacionCategory = [];
            if(categories.length !== 0) {
                for (let i = 0; i < categories.length; i++) {
                    let verificacionCa = await verificacionC(categories[i]);
                    // console.log('verificacionCa updateBrand', verificacionCa);
                    if(verificacionCa.bool) verificacionCategory.push(verificacionCa.category);
                    else return res.send(verificacionCa.message);
                };
                // console.log('verificacionCategory updateBrand', verificacionCategory);
            }
    
            let verificacionTypes = [];
            if(types.length !== 0) {
                for(let i = 0; i < types.length; i++) {
                    let verificacionTy = await verificacionT(types[i]);
                    // console.log('verificacionTy updateBrand', verificacionTy);
                    if(verificacionTy.bool) verificacionTypes.push(verificacionTy.type);
                    else return res.send(verificacionTy.message);
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
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateBrand
};