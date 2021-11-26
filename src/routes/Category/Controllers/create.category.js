const Category = require('../../../models/Category');
const { 
    verificacionName,
    verificacionT
} = require('./middleware');

const createCategory = async (req, res) => {
    const { name, typesId } = req.body;
    console.log('name createCategory', name);
    console.log('typesId createCategory', typesId);
    try {
        let verificacionCategory = await verificacionName(name);
        console.log('verificacionCategory createCategory', verificacionCategory);
        if(verificacion.bool)  return res.send(`La categoria ${name} ya existe`);
        
        for (let i = 0; i < typesId.length; i++) {
            let verificacionTypes = await verificacionT(typesId[i]);
            console.log('verificacionTypes createCategory', verificacionTypes);
            if(verificacionTypes.bool)  continue;
            return res.send('No se encuentra este type');
        }
        
        let newCategory = new Category({
            name,
            typesId
        });
        newCategory = await newCategory.save();
        console.log('newCategory createCategory', newCategory);
        res.json(newCategory)
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createCategory
}