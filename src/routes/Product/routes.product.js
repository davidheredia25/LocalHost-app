const { Router } = require('express');
const {  
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct,
    updateRating
} = require('./Controllers/all.controllers');

const router = Router();

//         /product
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/create', createProduct);
router.put('/update/:id', updateProduct);
router.put('/update/rating/:id', updateRating);
router.delete('/delete/:id', deleteProduct);

module.exports = router;