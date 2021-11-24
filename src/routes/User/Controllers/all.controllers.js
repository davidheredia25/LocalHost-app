const { createUser } = require('./create.user');
const { deleteUser } = require('./delete.user');
const { getUserById, getUser } = require('./get.user');
const { updateUser } = require('./update.user');


module.exports = {
    createUser,
    deleteUser,
    getUser,
    getUserById,
    updateUser
};