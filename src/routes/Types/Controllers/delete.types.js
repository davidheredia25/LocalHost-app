const Types = require('../../../models/Types');
const Product = require('../../../models/Product');
const { verificacionId } = require('./middleware');

const deleteTypes = async (req, res) => {
    
    const { brand, category, type } = req.body; 
    
    // Acá hay que borrar todos los productos que coincidan con esa marca, categoría, y tipos

    let verifyType = await Product.findOne({ type: type })
    if (!verifyType) {
        // eliminar ese type de su tabla, 
        // porque si entra en este if significa que no existen más productos con ese type
    }
    

   /*  const { id } = req.params
    // console.log('id deleteTypes', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion deleteTypes', verificacion);

        if(verificacion.bool) {
            let deleted = await Types.findByIdAndDelete(id);
            // console.log('deleted deleteTypes', deleted);
            if(deleted)  return res.json(deleted);
            return res.send('No se elimino correctamente');
        }
        res.send('No se encontro el tipo');
    } catch (error) {
        console.log(error);
    } */
};

module.exports = {
    deleteTypes
};