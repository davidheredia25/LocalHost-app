const { Router } = require('express');
const {
    updateBrand,
    createBrand,
    deleteBrand,
    getBrandById,
    getBrand,
    getBrandsList
} = require('./Controllers/all.controllers');

const router = Router();

//          /brand
router.get('/', getBrand);
router.get('/list', getBrandsList);
router.get('/:id', getBrandById);
router.post('/create', createBrand);
router.put('/update/:id', updateBrand);
router.put('/delete', deleteBrand);

module.exports = router;