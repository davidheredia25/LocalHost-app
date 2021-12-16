const { Router } = require('express');
const passport = require("passport");
const uploadFile = require('../Multer/Middleware.js');
const {
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
    Join

 } = require('./Controllers/all.controllers');


const router = Router();


//          /user
router.get('/', getUser);
//router.get('/:userId', getUserByID);
router.post('/create', createUser);
router.put('/edit/:id', uploadFile(), editDateUser);
router.put('/update/:id', updateUser);
router.get('/get/cart/:id', getCartUser);
router.put('/cart/:userId', addCart);
router.put('/cart/delete/:id', deleteCart)
router.put('/cart/deleteOne/:id/:productId/:talle', deleteCartOne)
router.put('/cart/join/:id', Join)
router.delete('/delete/:id', deleteUser);
router.post('/register', passport.authenticate("register", { session: false }), postUser);
router.post('/login', postLogin);
router.post('/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/loginG', loginGoogle);
router.post('/checkoutMp/:userId', checkoutMp);
router.put("/login/password", forgotPassword);
router.post('/nodemailer', enviarMail);


module.exports = router;