const Brand = require('../../../models/Brand');

const deleteBrand = async (req, res) => {
    const { id } = req.params;
    console.log('id deleteBrand', id);
    try {
        let deleted = await Brand.findByIdAndDelete(id)
        console.log('deleted deleteBrand', deleted);
        if(deleted)  return res.json(deleted);
        res.send('No se elimino correctamente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteBrand
};