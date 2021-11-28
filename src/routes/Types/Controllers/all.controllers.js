const { getTypes, getTypesById } = require('./get.types');
const { deleteTypes } = require('./delete.types');
const { createTypes } = require('./create.types');
const { updateTypes } = require('./update.types');

module.exports = {
    getTypes, 
    getTypesById,
    updateTypes,
    deleteTypes,
    createTypes
};