const { Router } = require('express');
const brandRoutes = require('./routes.brand');

const router = Router();

router.use('/brand', brandRoutes);

module.exports = router;