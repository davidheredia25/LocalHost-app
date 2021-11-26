const Category = require('../../../models/Category');
const { verificacionId } = require('./middleware');

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log('id updateCategory', id);
    console.log('name updateCategory', name);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion updateCategory', verificacion);

        if(name && verificacion.bool) {
            let update = await Category.findByIdAndUpdate(id, {
                name: name,
                types: typesId
            }, {new: true});
            update = await update.save();
            console.log('update updateCategory', update);
            return res.json(update);
        }
        res.send('No se recivio nombre o id de la categoria');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateCategory
}