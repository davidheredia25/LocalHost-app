const Ticket = require('../../../models/Ticket');
const User = require('../../../models/User');
const Product = require('../../../models/Product');

const verificacionNumOrder = async (numOrder) => {
    try {
        let find = await Ticket.findOne({numOrder: numOrder});
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' }
        if(find !== null && find.exis) return obj = { bool: true, ticket: find };
        return obj
    } catch (error) {
        console.log(error);
    }
};

const verificacionId = async (id) => {
    try {
        let find = await Ticket.findById(id);
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' };
        if(find !== null && find.exis) return obj = { bool: true, ticket: find };
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionU = async (id) => {
    try {
        let find = await User.findById(id);
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' }
        if(find !== null && find.exis) return obj = { bool: true, user: find };
        return obj
    } catch (error) {
        console.log(error);
    }
};

const verificacionP = async (name) => {
    try {
        let find = await Ticket.findOne({name: name});
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' }
        if(find !== null && find.exis) return obj = { bool: true, ticket: find };
        return obj
    } catch (error) {
        console.log(error);
    }
};

const addUser = async (userId, arrayProductId, ticketId) => {
    try {
        let find = await User.findById(userId);
        let add = await User.findByIdAndUpdate(userId, {
            productsBought: arrayProductId,
            ticket: [...find.ticket, ticketId]
        },{ new: true });
        add = await add.save();
        return add;
    } catch (error) {
        console.log(error);
    }
};

const setStock = async (stock, id) => {
    try {
        let find = await Product.findById(id);
        let preStock = find.talle.find(x => x.name === stock.talle);
        let obj = {
            name: stock.talle,
            stockTalle: preStock.stockTalle - stock.qty
        };
        let talle = find.talle.filter(t => t.name !== obj.name);
        let update = await Product.findByIdAndUpdate(id, {
            talle: [...talle, obj]
        }, { new: true });
        await update.save();
        return update;
    } catch (error) {
        console.log(error);
    }
}


const setCart = async(id) => {
    try {   
        let user = await User.findByIdAndUpdate(id, {
            cart: []
        }, { new: true });
        await user.save()
        return user;

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    verificacionNumOrder,
    verificacionId,
    verificacionP,
    verificacionU,
    addUser,
    setStock,
    setCart
}