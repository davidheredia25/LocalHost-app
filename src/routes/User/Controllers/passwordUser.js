const User = require('../../../models/User');

const forgotPassword = async (req, res) =>  {
    const { email, password} = req.body;
    const { id } = req.params;
    try {
        if(email){
        let recuperar = await User.findByIdAndUpdate(id, {
            password: password
        }, { new: true })
        editePassword = await recuperar.save()
        console.log(editePassword)
        res.status(200).send("Contraseña recuperada")
    } else console.log("No se encontro usuario")
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = {
    forgotPassword
}