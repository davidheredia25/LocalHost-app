const Product = require('../../../models/Product');
const { verificacionId } = require('./middleware');

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    // console.log('id deleteProduct', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion deleteProduct', verificacion);

        if (verificacion.bool) {
            let deleted = await Product.findByIdAndDelete(id)
                .populate('brand', ['name'])
                .populate('category', ['name'])
                .populate('type', ['name']);
            // console.log('deleted deleteProduct', deleted);
            if (deleted) return res.json(deleted);
            return res.send('No se pudo eliminar este producto');
        }
        res.send('No se pudo encontrar este Producto');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteProduct
};