const Types = require('../../../models/Ticket');
const { verificacionName } = require('./middleware');

const createTypes = async (req, res) => {
    const { name } = req.body;
    try {
        let verificacion = await verificacionName(name);
        if (verificacion.bool) return res.send(`El tipo ${name} ya existe`);

        let newType = new Types({ name });
        newType = await newType.save();
        return res.json(newType);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createTypes
};