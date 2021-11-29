const Types = require('../../../models/Types');
const { verificacionName } = require('./middleware');

const createTypes = async (req, res) => {
    const { name } = req.body;
    // console.log('name createTypes', name);
    try {
        let verificacion = await verificacionName(name);
        // console.log('verificacion createTypes', verificacion);
        if (verificacion.bool) return res.send(`El tipo ${name} ya existe`);
        
        let newType = new Types({ name });
        newType = await newType.save();
        // console.log('newType createTypes', newType);
        return res.json(newType);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createTypes
};