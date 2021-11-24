const { Router } = require('express');
const typesRoutes = require('./routes.types');

const router = Router();

router.use('/types', typesRoutes);

module.exports = router;