const Category = require('../../../models/Category');

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, typesId } = req.body;
    console.log('id updateCategory', id);
    console.log('name updateCategory', name);
    console.log('typesId updateCategory', typesId);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion updateCategory', verificacion);

        for (let i = 0; i < typesId.length; i++) {
            let verificacionTypes = await verificacionT(typesId[i]);
            console.log('verificacionTypes createCategory', verificacionTypes);
            if(verificacionTypes.bool)  continue;
            return res.send('No se encuentra este type');
        }

        if(name && verificacion) {
            let update = await Category.findByIdAndUpdate(id, {
                name: name,
                types: typesId
            }, {new: true});
            update = await update.save();
            console.log('update updateCategory', update);
            return res.json(update);
        }
        res.send('No se recivio nombre o id del producto');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateCategory
}