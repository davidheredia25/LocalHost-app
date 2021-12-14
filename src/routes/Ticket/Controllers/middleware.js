const Ticket = require('../../../models/Ticket');

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
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' }
        if(find !== null && find.exis) return obj = { bool: true, ticket: find };
        return obj
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    verificacionNumOrder,
    verificacionId
}