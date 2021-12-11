const User = require("../../../models/User");

const updateCartArray = async (req, res) => {
    const { cart } = req.body;
    console.log(cart)
    try {
        res.json(cart)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    updateCartArray
}