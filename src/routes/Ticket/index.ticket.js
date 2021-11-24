const { Router } = require('express');
const ticketRoutes = require('./routes.ticket');

const router = Router();

router.use('/ticket', ticketRoutes);

module.exports = router;