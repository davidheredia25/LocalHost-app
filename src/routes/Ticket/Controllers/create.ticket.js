const Ticket = require('../../../models/Ticket');

const createTicket = async (req, res) => {
    const { id_orden, user } = req.body;
    console.log('body createTicket: ', id_orden, user);
    try {
        if (user !== null) {
            if(user.cart !== 0 && user.direction) {
                let arrayProduct = [];
                let precioT = 0;
                console.log('user.cart createTicket: ', user.cart);
                for (let i = 0; i < user.cart; i++) {
                    let objProduct = {
                        product: user.cart[i].cart,
                        talle: user.cart[i].talle,
                        qty: user.cart[i].qtyCart
                    }
                    arrayProduct.push(objProduct);
    
                    precioT += user.cart[i].cart.price * user.cart[i].qtyCart;
                };
                console.log('arrayProduct createTicket: ', arrayProduct);
                console.log('precioT createTicket: ', precioT);

                let created = new Ticket({
                    numOrden: id_orden,
                    products: arrayProduct,
                    direccion: user.direction,
                    user: user._id,
                    precioTotal: precioT 
                });
                created = await created.save();
                console.log('created createTicket: ', created);
                return res.json(created);
            }
            return res.send('No tienes direccion o no tienes productos en el carrito');
        };
        res.send('No hay usuario para cerar el ticket');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createTicket
};