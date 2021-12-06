const { Router } = require('express');
const userRoutes = require('./routes.user');

const router = Router();

router.use('/user', userRoutes);

module.exports = router; 