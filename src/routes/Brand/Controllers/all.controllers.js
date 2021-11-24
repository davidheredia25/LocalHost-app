const { updateBrand } = require('./update.brand');
const { createBrand } = require('./create.brand');
const { deleteBrand } = require('./delete.brand');
const { getBrand, getBrandById } = require('./get.brand');


module.exports = {
    updateBrand,
    createBrand,
    deleteBrand,
    getBrandById,
    getBrand
};