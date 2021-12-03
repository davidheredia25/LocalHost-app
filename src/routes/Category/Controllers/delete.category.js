const Category = require('../../../models/Category');
const { verificacionId } = require('./middleware');

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    // console.log('id deleteCategory', id);
    try {
        let verificacion = await verificacionId(id);

        if(verificacion.bool) {
            let deleted = await Category.findByIdAndDelete(id);
            // console.log('deleted deleteCategory', deleted);
            if(deleted)  return res.json(deleted);
            return res.send('No se elimino correctamente');
        }
        res.send('No se encontro la categoria');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteCategory
};