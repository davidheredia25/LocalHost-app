const Category = require('../../../models/Category');
const { verificacionName } = require('./middleware');

const createCategory = async (req, res) => {
    const { name } = req.body;
    console.log('name createCategory', name);
    try {
        let verificacionCategory = await verificacionName(name);
        console.log('verificacionCategory createCategory', verificacionCategory);
        if(verificacion.bool)  return res.send(`La categoria ${name} ya existe`);
        
        let newCategory = new Category({ name });
        newCategory = await newCategory.save();
        console.log('newCategory createCategory', newCategory);
        res.json(newCategory);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createCategory
}