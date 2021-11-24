const { Router } = require('express');
const {
    updateBrand,
    createBrand,
    deleteBrand,
    getBrandById,
    getBrand
} = require('./Controllers/all.controllers');

const router = Router();

//          /brand
router.get('/', getBrand);
router.get('/:id', getBrandById);
router.post('/create', createBrand);
router.put('/update/:id', updateBrand);
router.delete('/delete/:id', deleteBrand);

module.exports = router;