const Ticket = require('../../../models/Ticket')

const {
    verificacionId,
} = require('./middleware');


// SDK de Mercado Pago
const mercadopago = require('mercadopago');

const { ACCESS_TOKEN } = process.env;

//Agrega credenciales cuenta vendedor
mercadopago.configure({
    access_token: ACCESS_TOKEN
});



const checkoutMp = async (req, res) => {
const { products } = req.body;

    const { userId } = req.params;
    console.log('userId checkoutMp: ', userId)
    try {
        
        let verificacionUser = await verificacionId(userId);
        console.log('verificacionUser checkoutMp: ', verificacionUser);
        
        if (verificacionUser.bool) {
            
            const tickets = await Ticket.find();
            const id_orden = tickets.length++;
            console.log('id_orden checkoutMp: ', id_orden)
            

            // user.cart.qtyCart: cantidad
            // user.cart.cart.price: precio
            // user.cart.cart.name: nombre
            const items_ml = verificacionUser.user.cart.map(i => ({
                title: i.cart.name,
                unit_price: i.cart.price ,
                quantity: i.qtyCart,

            }))
            
            console.log('items_ml checkoutMp: ', items_ml)
            // Crea un objeto de preferencia
            let preference = {
                items: items_ml,
                external_reference: `${id_orden}`,
                payment_methods: {
                    excluded_payment_types: [
                        {
                            id: "atm"
                        }
                    ],
                    installments: 3  //Cantidad máximo de cuotas
                },
                back_urls: {
                    success: 'http://localhost:3000/profile/misordenes',
                    failure: 'http://localhost:3000/profile/misordenes',
                    pending: 'http://localhost:3000/profile/misordenes',
                },
            };
            console.log('preference checkoutMp: ', preference)

            const response = await mercadopago.preferences.create(preference)
            console.log('response', response)
            await axios.post(`http://localhost:4000/ticket/create`, { id_orden, user });
            global.id = response.id
            return res.json(response)
            // .then(function (response) {
            //     console.info('respondio', response.body.init_point)
            //     //Este valor reemplazará el string"<%= global.id %>" en tu HTML

            //     global.id = response.body.id;
            //     console.log(response.body)
               
            //    return res.redirect(response.body.init_point);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // })
        }
        res.send("Deberás logearte como usuario")
    } catch (error) {
        console.log(error)
    }
}


// //Ruta que recibe la información del pago
//  router.get("/pagos", (req, res) => {
//      console.info("EN LA RUTA PAGOS ", req)
//      const payment_id = req.query.payment_id
//      const payment_status = req.query.status
//      const external_reference = req.query.external_reference
//      const merchant_order_id = req.query.merchant_order_id
//      console.log("EXTERNAL REFERENCE ", external_reference)

///     Aquí edito el status de mi orden
    //  Order.findByPk(external_reference)
    //      .then((order) => {
    //          order.payment_id = payment_id
    //          order.payment_status = payment_status
    //          order.merchant_order_id = merchant_order_id
    //          order.status = "completed"
    //          console.info('Salvando order')
    //          order.save()
    //              .then((_) => {
    //                  console.info('redirect success')

    //                  return res.redirect("http:localhost:3000")
    //              })
    //              .catch((err) => {
    //                  console.error('error al salvar', err)
    //                  return res.redirect(`http:localhost:3000/?error=${err}&where=al+salvar`)
    //              })
    //      })
    //      .catch(err => {
    //          console.error('error al buscar', err)
    //          return res.redirect(`http:localhost:3000/?error=${err}&where=al+buscar`)
    //      })

//     //proceso los datos del pago 
//     //redirijo de nuevo a react con mensaje de exito, falla o pendiente
// })


// //Busco información de una orden de pago
//  router.get("/pagos/:id", (req, res) => {
//      const mp = new mercadopago(ACCESS_TOKEN)
//      const id = req.params.id
//      console.info("Buscando el id", id)
//      mp.get(`/v1/payments/search`, { 'status': 'pending' }) {"external_reference":id})
//          .then(resultado => {
//              console.info('resultado', resultado)
//              res.json({ "resultado": resultado })
//          })
//          .catch(err => {
//              console.error('No se consulto:', err)
//              res.json({
//                  error: err
//              })
//          })
//  })

module.exports = {
    checkoutMp
};