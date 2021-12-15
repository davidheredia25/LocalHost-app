const User = require('../../../models/User');
const { verificacionEmail } = require('./middleware');

const forgotPassword = async (req, res) => {
    const { email, password } = req.body;
    // const { id } = req.params;
    try {
        const verificacion = await verificacionEmail(email);
        if (verificacion.bool) {
            let id = verificacion.user._id;
            let recuperar = await User.findByIdAndUpdate(id, {
                password: password
            }, { new: true })
            editePassword = await recuperar.save()
            // console.log(editePassword)
            return res.send("Contraseña recuperada")
        } 
        res.send("No se encontro usuario");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    forgotPassword
}