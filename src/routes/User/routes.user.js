const { Router } = require('express');
const { 
    createUser,
    deleteUser,
    getUser,
    getUserById,
    updateUser
 } = require('./Controllers/all.controllers');

const router = Router();

//          /user
router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;