
const { deleteUser } = require('./delete.user');
const { getUserByID, getUser } = require('./get.user');
const { updateUser } = require('./update.user'); 
const { editDateUser } = require('./editDate.user');
const { checkoutMp } = require('./checkoutMp.user');

const { postUser, postLogin, profileAuthenticate, loginGoogle, confirm } = require('./login.user');
const { addCart, getCartUser, deleteCart, deleteCartOne, Join } = require('./cart.user');
const {forgotPassword} = require("./passwordUser");
const { enviarMail } = require('./nodemailer.user');
const { enviarMailTicket } = require('./mailTicket.user')

module.exports = {
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
    confirm,
    Join,
  enviarMailTicket
};