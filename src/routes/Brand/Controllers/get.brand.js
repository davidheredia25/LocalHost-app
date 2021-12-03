const Brand = require('../../../models/Brand');
const { verificacionId } = require('./middleware');

const getBrand = async (req, res) => {
    const { name } = req.query;
    // console.log('name getBrand', name);
    try {
        let getAllBrand = await Brand.find();
        // console.log('getAll getBrand', getAllBrand);
        if(!name)  return res.json(getAllBrand);
        
        let getBrandByName = getAllBrand.filter(b => b.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('getByName getBrand', getBrandByName);
        res.json(getBrandByName);
    } catch (error) {
        console.log(error);
    }
};

const getBrandById = async (req, res) => {
    const { id } = req.params;
    // console.log('id getBrandById', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion getBrandById', verificacion);

        if(verificacion.bool) return res.json(verificacion.brand);
        res.send('No se encontro la marca');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getBrand,
    getBrandById
};