const User = require('../../../models/User');

const getUser = async (req, res) => {
    try {
      let user= await  User.find();
      console.log(user)
      res.json(user);
    } catch (error) {
        console.log(error);
    }
};

const getUserById = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
};

const getUserByID = async (req, res) => {
    const { userId } = req.params;
    console.log(userId)
    try {
      let user = await User.findById(userId)
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
    getUser,
    getUserByID
};