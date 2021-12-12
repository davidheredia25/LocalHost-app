const Brand = require('../../../models/Brand');
const { 
    verificacionName,
    setExisP
} = require('./middleware');

const deleteBrand = async (req, res) => {
    const { brand } = req.body; 
    console.log('brand deleteBrand', brand);
    try {
        let verificacion = await verificacionName(brand);
        console.log('verificacion deleteBrand: ', verificacion);

        if (verificacion.bool) {
            let deleteProduct = await setExisP(verificacion.brand._id);
            let deleted = await Brand.findByIdAndUpdate(verificacion.brand._id, {
                exis: false
            }, { new: true });
            deleted = await deleted.save();
            console.log('deleted deleteBrand', deleted);
            if (deleted) return res.json(deleted, deleteProduct);
            return res.send('No se elimino correctamente');
        }
        res.send(verificacion.messaje);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteBrand
};