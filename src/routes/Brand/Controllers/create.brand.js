const Brand = require('../../../models/Brand');
const { 
    verificacionName, 
    verificacionC 
} = require('./middleware');

const createBrand = async (req, res) => {
    const { name, categories } = req.body;
    console.log('name createBrand', name);
    console.log('categories createBrand', categories);
    try {
        let verificacionBrand = await verificacionName(name);
        console.log('verificacion createBrand', verificacionBrand);
        if(verificacionBrand.bool)  return res.send(`La marca ${name} ya existe`);
        
        for(let i = 0; i < categories.length; i++) {
            let verificacionCategory = await verificacionC(categories[i]);
            console.log('verificacionCategory createBrand', verificacionCategory)
            if(verificacionCategory.bool) continue;
            else return res.send('Algunas de las categoria no es valida'); 
        }
        
        let newBrand = new Brand({
            name,
            categories
        });
        newBrand = await newBrand.save();
        console.log('newBrand createBrand', newBrand);
        res.json(newBrand);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createBrand
};