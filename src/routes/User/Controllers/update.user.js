const User = require('../../../models/User');
const { verificacionId } = require('./middleware');

const updateUser = async (req, res) => {
    const { id } = req.params;
    // console.log('id updateUSer: ', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion updateUSer: ', verificacion);
        if(verificacion.bool) {
            let update;
            if(verificacion.user.isAdmin === true) {
                update = await User.findByIdAndUpdate(id, {
                    isAdmin: false
                }, { new: true });
            } else {
                update = await User.findByIdAndUpdate(id, {
                    isAdmin: true
                }, { new: true });
            }
            update = await update.save();
            // console.log('update updateUSer: ', update);
            return res.json(update);
        }
        res.send('este user no existe');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateUser
};