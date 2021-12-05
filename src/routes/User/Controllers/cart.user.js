const Product = require('../../../models/Product');
const Order = require('../../../models/order');


const addCartItem = async (req, res, next) => {
    const {idUser} = req.params
    const{id, quantity} = req.body
    if (!idUser) return next({message:"el ID no es correcto"})
    if (!quantity) return next({message:"la cantidad es requerida"})
    try {
        const product = await Product.findById(id);
        if (!product) {
            return next({message:"Producto no encontrado"})
        };
        const quantityStock = Number(quantity);
        if (product.stock < quantityStock) {
            return next({mesaage: "No hay stock suficiente"})
        };
        const price = product.price 
        const user = await User.findOne({
            where: {
                id: idUser
            }
        });
        if (!user) {
            return next({message: "usuario no encontrado"})
        };
        let order = await Order.findOne({ where: { UserId: idUser, status: 'cart' } });
        if (!order) {
            order = await Order.create()
            await user.addOrder(order);
        };
        let orderItem = await Order.findOne({
            where: {
                orderID: order.id,
                productID: id,
            }
        })
        if(!orderItem) {
            orderItem = await Order.create({
                orderID: order.id,
                productID: id,
                name: product.name,
                quantity,
                price: product.price
            })
        }
        else {
            orderItem.quantity+=quantity
            await orderItem.save()
        }
        const productsOrder = await Order.findAll({
            where: {
                orderID: order.id
            }
        })
        const productsIds = productsOrderLines.map(order => {
            return {
                id: order.productID
            }
        })
        const productsToSend = await Product.findAll({
            where: {
                [Op.or]: productsIds
            },
            attributes: {
                exclude
            }
        })
        const addQuantity = productsToSend.map(async product => {
            const index = productsOrderLines.findIndex(productOrderLine => productOrderLine.productID === product.id)
            await product.setDataValue('quantity', productsOrderLines[index].quantity)
        })
        await Promise.all(addQuantity).then(() => {return}).catch(err => console.error(err))
        return res.send(productsToSend);
    } catch (err) {
        console.error(err)
        next(err)
    }
};


module.exports = {
     addCartItem,
}