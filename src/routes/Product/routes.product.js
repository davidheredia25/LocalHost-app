const { Router } = require('express');
const upload = require('../Multer/Middleware.js');
const {  
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct,
    updateRating,
    getTalles
} = require('./Controllers/all.controllers');

const router = Router();

//         /product
router.get('/talles', getTalles);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/create', upload.single('image'), createProduct);
router.put('/update/:id', updateProduct);
router.put('/update/rating/:id', updateRating);
router.put('/delete/:id', deleteProduct);

module.exports = router;