const Product = require('../../../models/Product');
const Order = require('../../../models/order');


const addCartItem = async (req, res) => {
    const {idUser} = req.params
    const{id, name, quantity, price} = req.body
    if (!User)

    try {
        
    } catch (err) {
        console.error(err)
    }
};


module.exports = {
     addCartItem,
}