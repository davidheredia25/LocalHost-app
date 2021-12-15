const { Router } = require('express');
const { 
    createTicket,
    deleteTicket,
    getTicketById,
    getTicket,
    updateTicket
 } = require('./Controllers/all.controllers');

const router = Router();

//          /ticket
router.get('/', getTicket);
router.get('/:id', getTicketById);
router.post('/create', createTicket);
router.put('/update/:id', updateTicket);
router.put('/delete', deleteTicket);

module.exports = router;