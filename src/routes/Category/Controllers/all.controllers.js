const { deleteCategory } = require('./delete.category');
const { createCategory } = require('./create.category');
const { getCategoryById, getCategory } = require('./get.category');
const { updateCategory } = require('./update.category');


module.exports = {
    createCategory,
    deleteCategory,
    updateCategory,
    getCategoryById,
    getCategory
};