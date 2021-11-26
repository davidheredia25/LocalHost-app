const Types = require('../../../models/Ticket');
const { verificacionId } = require('./middleware');

const updateTypes = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log('id updateTypes', id);
    console.log('name updateTypes', name);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion updateTypes', verificacion);

        if(name && verificacion.bool) {
            let update = await Types.findByIdAndUpdate(id, {
                name: name
            }, {new: true});
            update = await update.save();
            console.log('update updateTypes', update);
            return res.json(update);
        }
        res.send('No se recivio nombre o id del tipo');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateTypes
};