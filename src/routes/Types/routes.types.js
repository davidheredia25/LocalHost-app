const { Router } = require('express');
const { 
    createTypes,
    deleteTypes,
    updateTypes,
    getTypesById,
    getTypes
} = require('./Controllers/all.controllers');

const router = Router();

router.get('/', getTypes);
router.get('/:id', getTypesById);
router.post('/create', createTypes);
router.put('/update/:id', updateTypes);
router.delete('/delete/:id', deleteTypes);

module.exports = router;