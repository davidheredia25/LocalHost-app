const { Router } = require('express');
const passport = require("passport");
const { 
    createUser,
    deleteUser,
    getUser,
    getUserById,
    updateUser,
    editDateUser,
    addCartItem

 } = require('./Controllers/all.controllers');
const {
    postUser,
    postLogin,
    profileAuthenticate
} = require("./Controllers/login.user")
const router = Router();

//          /user
router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/create', createUser);
router.put('/edit/:id', editDateUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.post('/register', passport.authenticate("register", { session: false }), postUser);
router.post('/login', postLogin);
router.get('/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/addItem', addCartItem);


module.exports = router;