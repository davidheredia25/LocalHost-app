const Category = require('../../../models/Category');
const Product = require("../../../models/Product")
const { verificacionId } = require('./middleware');

const deleteCategory = async (req, res) => {
    
    const { brand, category } = req.body; 
    
    // Acá hay que borrar todos los productos que coincidan con esa marca y categoría conjuntamente

    let verifyCategory = await Product.findOne({ category: category })
    if (!verifyCategory) {
        // eliminar ese type de su tabla, 
        // porque si entra en este if significa que no existen más productos con ese type
    }

    /* const { id } = req.params;
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
    */
}; 

module.exports = {
    deleteCategory
};