const mercadopago = require('mercadopago');
const {access_token, frontURL} = process.env

mercadopago.configure({
    access_token
});

async function checkoutMP (req, res, next) {
    const { products } = req.body;
    
    const itemsToMP = products.map(product => {
        return {
            unit_price: Number(product.price),
            quantity: Number(product.quantity),
            title: product.name,
        };
    });
    
    const preference = {
        items: itemsToMP,
        external_reference : `${id_orden}`,
        payment_methods: {
            excluded_payment_types: [
              {
                id: "atm"
              }
            ],
            installments: 3  //Cantidad máximo de cuotas
          },
        back_urls: {
            success: frontURL,
            failure: frontURL,
            pending: frontURL,
            // success: 'http://localhost:3000/mercadopago/pagos',
            // failure: 'http://localhost:3000/mercadopago/pagos',
            // pending: 'http://localhost:3000/mercadopago/pagos',
        },
        auto_return: 'approved',
    };
    mercadopago.preferences.create(preference)
    .then(response => {
        res.send(response.body);
    })
    .catch(err => console.log(err));   
}

module.exports = {
    checkoutMP
};