const { Router } = require('express');
const passport = require("passport");
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
    forgotPassword,
    enviarMail
 } = require('./Controllers/all.controllers');


 const router = Router(); 


//          /user
router.get('/', getUser);
//router.get('/:userId', getUserByID);
router.post('/create', createUser);
router.put('/edit/:id', editDateUser);
router.put('/update/:id', updateUser);
router.put('/cart/:userId', addCart);
router.delete('/delete/:id', deleteUser);
router.post('/register', passport.authenticate("register", { session: false }), postUser);
router.post('/login', postLogin);
router.post('/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/loginG', loginGoogle);
router.put("/login/password/:id", forgotPassword);
router.post('/nodemailer', enviarMail);


module.exports = router;