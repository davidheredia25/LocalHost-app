const Brand = require('../../../models/Brand');
const Product = require('../../../models/Product');
const { verificacionId } = require('./middleware');

// No lo quise probar a esta hora pq si me equiboco en algo no tengos los json para 
// agregar los productos de nuevo

const deleteBrand = async (req, res) => {
    // Acá se eliminarían todos los productos de esa marca y también la marca del modelo Brand
    const { id } = req.params; // Solo con esto puedo encontrar las brands de los productos
    console.log('id deleteBrand', id);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion deleteBrand: ', verificacion);

        if (verificacion.bool) {
            let findProduct = await Product.find({ brand: verificacion.brand._id });
            let arrayDelete = [];
            if(findProduct.length !== 0) {
                findProduct.forEach(async (p) => {
                    console.log('p deleteBrand: ', p.name);
                    let deletedProduct = await Product.findByIdAndDelete(p._id);
                    console.log('deletedProduct deleteBrand: ', deletedProduct.name);
                    arrayDelete.push(deletedProduct.name);
                });
            }
            let deleted = await Brand.findByIdAndDelete(id);
            console.log('deleted deleteBrand', deleted);
            if (deleted) return res.json([deleted, ...arrayDelete]);
            return res.send('No se elimino correctamente');
        }
        res.send('No se encontro la marca');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteBrand
};