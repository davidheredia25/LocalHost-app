const Brand = require('../../../models/Brand');

const createBrand = async (req, res) => {
    const { name } = req.body;
    try {
        let verificacion = await Brand.find({name: name});
        if(verificacion)  return res.send(`La marca ${name} ya existe`);

        let newBrand = new Brand({
            name
        });

        newBrand = await newBrand.save();
        res.json(newBrand);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createBrand
};