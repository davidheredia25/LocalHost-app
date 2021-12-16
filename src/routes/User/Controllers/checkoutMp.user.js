const Ticket = require('../../../models/Ticket');
const axios = require('axios');
const { verificacionId } = require('./middleware');

// SDK de Mercado Pago
const mercadopago = require('mercadopago');
const { ACCESS_TOKEN } = process.env;

//Agrega credenciales cuenta vendedor
mercadopago.configure({
    access_token: ACCESS_TOKEN
});

const checkoutMp = async (req, res) => {
    const { userId } = req.params;
    const { products } = req.body;
    // console.log('userId checkoutMp: ', userId)
    try {
        let verificacionUser = await verificacionId(userId);
        // console.log('verificacionUser checkoutMp: ', verificacionUser);
        let user = verificacionUser.user

        if (verificacionUser.bool) {
            const tickets = await Ticket.find();
            const id_orden = tickets.length + 1;
            console.log('id_orden checkoutMp: ', id_orden)
            // user.cart.qtyCart: cantidad
            // user.cart.cart.price: precio
            // user.cart.cart.name: nombre
            const items_ml = user.cart.map(i => ({
                title: i.cart.name,
                unit_price: i.cart.price,
                quantity: i.qtyCart
            }));
            // console.log('items_ml checkoutMp: ', items_ml)
            // Crea un objeto de preferencia
            let preference = {
                items: items_ml,
                external_reference: `${id_orden}`,
                payment_methods: {
                    excluded_payment_types: [
                        {id: "atm"}
                    ],
                    // installments: 3  //Cantidad máximo de cuotas
                },
                back_urls: {
                    success: 'http://localhost:3000/profile/misordenes',
                    failure: 'http://localhost:3000/mercadopago/pagos',
                    pending: 'http://localhost:3000/mercadopago/pagos',
                },
            };
            // console.log('preference checkoutMp: ', preference)

            const response = await mercadopago.preferences.create(preference)
            await axios.post(`http://localhost:4000/ticket/create`, { id_orden, user });
            // console.log('response', response);
            global.id = response.id;
            // console.log('global.id: ', global.id);
            return res.json(response);
        }
        res.send("Deberás logearte como usuario")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkoutMp
};