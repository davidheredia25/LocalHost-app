const User = require('../../../models/User');
const { verificacionId } = require('./middleware');

const deleteUser = async (req, res) => {
    const { id } = req.params;
    // console.log('id deleteUser: ', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion deleteUser: ', verificacion);
        if(verificacion.bool) {
            let deleted = await User.findByIdAndUpdate(id, {
                exis: false
            },{ new: true });
            deleted = await deleted.save();
            // console.log('deleted deleteUser: ', deleted);
            if(deleted)  return res.json(deleted);
            return res.send('Hubo un error al borrar el user');
        }
        res.send('No se encontro el user');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteUser
};