const Brand = require('../../../models/Brand');
const { verificacionId } = require('./middleware');

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name, categories } = req.body;
    console.log('id updateBrand', id);
    console.log('name updateBrand', name);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion updateBrand', verificacion);
        if(name && verificacion) {
            let update = await Brand.findByIdAndUpdate(id, {
                name: name
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