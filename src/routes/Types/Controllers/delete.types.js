const Types = require('../../../models/Ticket');
const { verificacionId } = require('./middleware');

const deleteTypes = async (req, res) => {
    const { id } = req.params;
    // console.log('id deleteTypes', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion deleteTypes', verificacion);

        if(verificacion.bool) {
            let deleted = await Types.findByIdAndDelete(id);
            // console.log('deleted deleteTypes', deleted);
            if(deleted)  return res.json(deleted);
            return res.send('No se elimino correctamente');
        }
        res.send('No se encontro el tipo');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteTypes
};