const Brand = require('../../../models/Brand');

const getBrand = async (req, res) => {
    const { name } = req.body;
    try {
        if(!name) {
            let getAllBrand = await Brand.find();
            return res.json(getAllBrand);
        };
        let getAllBrand = await Brand.find({});
        let getBrandByName = getAllBrand.filter(b => b.name.toLowerCase().include(name.toLowerCase()));
        res.json(getBrandByName);
    } catch (error) {
        console.log(error);
    }
};

const getBrandById = async (req, res) => {
    const { id } = req.params;
    try {
        let brand = await Brand.findById(id);
        if(brand) return res.json(brand);
        res.send('No se encontro la marca');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getBrand,
    getBrandById
};