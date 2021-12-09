const { Router } = require('express');
const {  
    createCategory,
    deleteCategory,
    updateCategory,
    getCategoryById,
    getCategory
} = require('./Controllers/all.controllers');

const router = Router();

//          /category
router.get('/', getCategory);
router.get('/:id', getCategoryById);
router.post('/create', createCategory);
router.put('/update/:id', updateCategory);
router.delete('/delete', deleteCategory);


module.exports = router