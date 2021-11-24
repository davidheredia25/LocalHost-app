const { createTypes } = require('./create.types');
const { deleteTypes } = require('./delete.types');
const { updateTypes } = require('./update.types');
const { getTypes, getTypesById } = require('./get.types');


module.exports = {
    createTypes,
    deleteTypes,
    updateTypes,
    getTypesById,
    getTypes
}