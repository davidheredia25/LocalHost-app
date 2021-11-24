const Brand = require('../../../models/Brand');

const deleteBrand = async (req, res) => {
    const { id } = req.params;
    try {
        let deleted = await Brand.findByIdAndDelete(id)
        if(deleted)  return res.json(deleted);
        res.send('No se elimino correctamente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteBrand
};