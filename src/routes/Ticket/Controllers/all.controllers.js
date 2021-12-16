const { createTicket } = require('./create.ticket');
const { deleteTicket } = require('./delete.ticket');
const { getTicket, getTicketById, getUserTickets } = require('./get.ticket');
const { updateTicket } = require('./update.ticket');

module.exports = {
    createTicket,
    deleteTicket,
    getTicketById,
    getTicket,
    updateTicket,
    getUserTickets
};