const Brand = require('../../../models/Brand');
const { verificacionId } = require('./middleware');

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        let verificacion = verificacionId(id);
        if(name && verificacion) {
            let update = await Brand.findByIdAndUpdate(id, {
                name: name
            }, {new: true});
            update = await update.save();
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