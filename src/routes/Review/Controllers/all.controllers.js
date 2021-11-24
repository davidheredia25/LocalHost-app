const { createReview } = require('./create.review');
const { deleteReview } = require('./delete.review');
const { getReview, getReviewById } = require('./get.review');
const { updateReview } = require('./update.review');

module.exports = {
    createReview,
    deleteReview,
    getReviewById,
    getReview,
    updateReview
};