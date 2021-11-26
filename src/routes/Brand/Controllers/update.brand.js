const Brand = require('../../../models/Brand');
const { verificacionId } = require('./middleware');

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name, categoriesId } = req.body;
    console.log('id updateBrand', id);
    console.log('name updateBrand', name);
    console.log('categoriesId updateBrand', categoriesId);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion updateBrand', verificacion);

        for (let i = 0; i < categoriesId.length; i++) {
            let verificacionCategory = await verificacionT(categoriesId[i]);
            console.log('verificacionCategory updateBrand', verificacionCategory);
            if(verificacionCategory.bool)  continue;
            return res.send('No se encuentra este type');
        }

        if(name && verificacion) {
            let update = await Brand.findByIdAndUpdate(id, {
                name: name,
                categories: categoriesId
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