const { Router } = require('express');
const productRoutes = require('./routes.product');

const router = Router();

router.use('/product', productRoutes);

module.exports = router;