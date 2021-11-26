const Brand = require('../../../models/Brand');
const { 
    verificacionId,
    verificacionC,
    verificacionT
} = require('./middleware');

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name, categories, types } = req.body;
    console.log('id updateBrand', id);
    console.log('name updateBrand', name);
    console.log('categories updateBrand', categories);
    console.log('types updateBrand', types);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion updateBrand', verificacion);

        if(verificacion.bool) {
            let verificacionCategory = [];
            for (let i = 0; i < categories.length; i++) {
                let verificacionCa = await verificacionC(categories[i]);
                console.log('verificacionCa updateBrand', verificacionCa);
                if(verificacionCa.bool)  continue
                return res.send('No se encuentra este type');
                verificacionCategory.push(varificacionCa.category);
            };
            console.log('verificacionCategory updateBrand', verificacionCategory);
    
            let verificacionTypes = [];
            for(let i = 0; i < types.length; i++) {
                let verificacionTy = await verificacionT(types[i]);
                console.log('verificacionTy updateBrand', verificacionTy);
                if(verificacionTy.bool) continue
                else return res.send('Algunas de las categoria no es valida');
                verificacionTypes.push(verificacionTy.type);
            };
            console.log('verificacionTypes updateBrand', verificacionTypes);

            let update = await Brand.findByIdAndUpdate(id, {
                name: name,
                categories: {
                    name: verificacionCategory,
                    types: verificacionTypes
                }
            }, {new: true});
            update = await update.save();
            console.log('update updateBrand', update);
            return res.json(update);
        }
        res.send('No se recivio nombre o id del producto');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateBrand
};