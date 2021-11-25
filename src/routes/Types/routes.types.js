const { Router } = require('express');
const {  
    getTypes
} = require('./Controllers/all.controllers');

const router = Router();

//          /types
router.get('/', getTypes);

module.exports = router;