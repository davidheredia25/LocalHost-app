const { createUser } = require('./create.user');
const { deleteUser } = require('./delete.user');
const { getUserByID, getUser } = require('./get.user');
const { updateUser } = require('./update.user'); 
const { editDateUser } = require('./editDate.user');
const { checkoutMp } = require('./checkoutMp.user');
const { addCart, getCartUser, deleteCart, deleteCartOne } = require('./cart.user');
const { postUser, postLogin, profileAuthenticate, loginGoogle, confirm } = require('./login.user');
const {forgotPassword} = require("./passwordUser");
const { enviarMail } = require('./nodemailer.user');

module.exports = {
    createUser,
    deleteUser,
    getUser,
    getUserByID,
    updateUser,
    editDateUser,
    addCart,
    postUser,
    postLogin,
    profileAuthenticate,
    loginGoogle,
    getCartUser,
    checkoutMp,
    deleteCart, 
    deleteCartOne,
    forgotPassword,
    enviarMail,
    confirm

};