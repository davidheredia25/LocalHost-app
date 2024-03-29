const Ticket = require('../../../models/Ticket');
const User = require('../../../models/User');

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


module.exports = {
    verificacionNumOrder,
    verificacionId,
    verificacionP,
    verificacionU,
    addUser
}