const { Router } = require('express');
const passport = require("passport");
const upload = require('../Multer/Middleware.js');
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
    enviarMail

 } = require('./Controllers/all.controllers');


const router = Router();


//          /user
router.get('/', getUser);
//router.get('/:userId', getUserByID);
router.post('/create', createUser);
router.put('/edit/:id', upload.single('image'), editDateUser);
router.put('/update/:id', updateUser);
router.get('/get/cart/:id', getCartUser);
router.put('/cart/:userId', addCart);
router.put('/cart/delete/:id', deleteCart)
router.put('/cart/deleteOne/:id/:productId', deleteCartOne)
router.delete('/delete/:id', deleteUser);
router.post('/register', passport.authenticate("register", { session: false }), postUser);
router.post('/login', postLogin);
router.post('/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/loginG', loginGoogle);
router.post('/checkoutMp/:userId', checkoutMp);
router.put("/login/password/:id", forgotPassword);
router.post('/nodemailer', enviarMail);


module.exports = router;