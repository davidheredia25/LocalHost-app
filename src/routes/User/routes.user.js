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
    loginGoogle
} = require('./Controllers/all.controllers');


const router = Router();


//          /user
router.get('/', getUser);
//router.get('/:userId', getUserByID);
router.post('/create', createUser);
router.put('/edit/:id', uploadFile(), editDateUser);
router.put('/update/:id', updateUser);
router.put('/cart/:idUser/:idItem', addCart);
router.delete('/delete/:id', deleteUser);
router.post('/register', passport.authenticate("register", { session: false }), postUser);
router.post('/login', postLogin);
router.post('/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/loginG', loginGoogle);


module.exports = router;