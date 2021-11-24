const { Router } = require('express');
const reviewRoutes = require('./routes.review');

const router = Router();

router.use('/review', reviewRoutes);

module.exports = router;