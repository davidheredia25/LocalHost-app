const Brand = require('../../../models/Brand');
const axios = require('axios');
const { 
    verificacionName,
    verificacionC,
    verificacionT
} = require('./middleware');

const createBrand = async (req, res) => {
    const { name, categories, types } = req.body;
    // console.log('name createBrand', name);
    // console.log('categories createBrand', categories);
    // console.log('types createBrand', types);
    try {
        let verificacionBrand = await verificacionName(name);
        // console.log('verificacion createBrand', verificacionBrand);
        if(verificacionBrand.bool)  return res.send(`La marca ${name} ya existe`);
        
        let verificacionCategory = [];
        for (let c = 0; c < categories.length; c++) {
            let name = categories[c];
            let verificacionCa = await verificacionC(name);
            // console.log('verificacionCa createBrand', verificacionCa);
            if(verificacionCa.bool) {verificacionCategory.push(verificacionCa.category)}
            else {
                let newCategory = await axios.post('http://localhost:4000/category/create', { name });
                // console.log('newCategory createBrand: ', newCategory.data);
                if(newCategory.data !== null) verificacionCategory.push(newCategory.data._id)
                else return res.send(`Hubo un error al crear la categoria ${name}`);
            }
        }
        // console.log('verificacionCategory createBrand', verificacionCategory);
        
        let verificacionTypes = [];
        for (let t = 0; t < types.length; t++) {
            let name = types[t]
            let verificacionTy = await verificacionT(name);
            // console.log('verificacionTy createBrand', verificacionTy);
            if(verificacionTy.bool) {verificacionTypes.push(verificacionTy.type)}
            else {
                let newType = await axios.post('http://localhost:4000/types/create', { name });
                // console.log('newType createBrand', newType.data);
                if (newType.data !== null)  verificacionTypes.push(newType.data._id)
                else return res.send(`Hubo un error al crear el type ${name}`);
            }
        }
        // console.log('verificacionTypes createBrand', verificacionTypes);
        
        let newBrand = new Brand({
            name,
            categories: {
                name: verificacionCategory,
                types: verificacionTypes
            }
        });
        newBrand = await newBrand.save();
        // console.log('newBrand createBrand', newBrand);
        res.json(newBrand);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createBrand
};