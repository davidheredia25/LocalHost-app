const { Router } = require('express');
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { 
    createUser,
    deleteUser,
    getUser,
    getUserByID,
    updateUser,
    editDateUser,
    addCart

 } = require('./Controllers/all.controllers');
const {
    postUser,
    postLogin,
    profileAuthenticate
} = require("./Controllers/login.user")
const router = Router();

//          /user
router.get('/', getUser);
//router.get('/:userId', getUserByID);
router.post('/create', createUser);
router.put('/edit/:id', editDateUser);
router.put('/update/:id', updateUser);
router.put('/cart/:idUser/:idItem', addCart);
router.delete('/delete/:id', deleteUser);
router.post('/register', passport.authenticate("register", { session: false }), postUser);
router.post('/login', postLogin);
router.post('/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);



module.exports = router;