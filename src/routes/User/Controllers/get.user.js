const User = require('../../../models/User');
const { verificacionId } = require('./middleware');

const getUser = async (req, res) => {
    try {
      let user = await  User.find({ exis: true });
      // console.log(user)
      if(user.length !== 0) return res.json(user)
      res.send('Hubo Un error al traer los User');
    } catch (error) {
      console.log(error);
    }
  };
  
  const getUserByID = async (req, res) => {
    const { userId } = req.params;
    // console.log(userId)
    try {
      let verificacion = await verificacionId(userId);
      
      if(verificacion.bool) return res.json(verificacion.user);
      res.send(verificacion.message);
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
    getUser,
    getUserByID
};