const { Router } = require('express');
const {  
    createProduct,
    deleteProduct,
    getProductById,
    getProduct,
    updateProduct
} = require('./Controllers/all.controllers');

const router = Router();

//         /product
router.get('/', getProduct);
router.get('/:id', getProductById);
router.get('/create', createProduct);
router.get('/update/:id', updateProduct);
router.get('/delete/:id', deleteProduct);

module.exports = router;