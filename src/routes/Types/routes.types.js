const { Router } = require('express');
const {  
    getTypes, 
    getTypesById,
    updateTypes,
    deleteTypes,
    createTypes
} = require('./Controllers/all.controllers');

const router = Router();

//          /types
router.get('/', getTypes);
router.get('/:id', getTypesById);
router.post('/create', createTypes);
router.put('/update/:id', updateTypes);
router.delete('/delete', deleteTypes);

module.exports = router;