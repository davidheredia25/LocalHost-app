const Brand = require('../../../models/Brand');
const { verificacionId } = require('./middleware');

const deleteBrand = async (req, res) => {
    const { brand } = req.body;
    // Acá se eliminarían todos los productos de esa marca y también la marca del modelo Brand
    
    /*  const { id } = req.params;
    // console.log('id deleteBrand', id);
    try {
        let verificacion = await verificacionId(id);

        if(verificacion.bool) {
            let deleted = await Brand.findByIdAndDelete(id)
            // console.log('deleted deleteBrand', deleted);
            if(deleted)  return res.json(deleted);
            return res.send('No se elimino correctamente');
        }
        res.send('No se encontro la marca');
    } catch (error) {
        console.log(error);
    } */
};

module.exports = {
    deleteBrand
};