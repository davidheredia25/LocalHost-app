const Ticket = require('../../../models/Ticket');
const { verificacionId } = require('./middleware');

const getTicket = async (req, res) => {
    try {
        let tickets = await Ticket.find({ exis: true });

        if(tickets.length !== 0) return res.json(tickets);
        res.send('No se encontro tickets existentes');
    } catch (error) {
        console.log(error);
    }
};

const getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        let verificacion = await verificacionId(id);

        if(verificacion.bool)  return res.json(verificacion.ticket);
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getTicket,
    getTicketById
};