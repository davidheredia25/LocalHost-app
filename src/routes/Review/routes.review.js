const { Router } = require('express');
const { 
    createReview,
    deleteReview,
    getReviewById,
    getReview,
    updateReview
} = require('./Controllers/all.controllers');

const router = Router();

//          /review
router.get('/', getReview);
router.get('/:id', getReviewById);
router.post('/create', createReview);
router.put('/update', updateReview);
router.delete('/delete', deleteReview);

module.exports = router;