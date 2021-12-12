const Category = require('../../../models/Category');
const { verificacionId } = require('./middleware'); 

const getCategory = async (req, res) => {
    const { name } = req.query;
    // console.log('name getCategory', name);
    try {
        let getAllCategories = await Category.find({ exis: true });
        // console.log('getAll getCategory', getAllCategories);
        if(!name)  return res.json(getAllCategories);
        
        let getCategoriesByName = getAllCategories.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('getByName getCategory', getCategoriesByName);
        res.json(getCategoriesByName);
    } catch (error) {
        console.log(error);
    }
};

const getCategoryById = async (req, res) => {
    const { id } = req.params;
    // console.log('id getCategory', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion getCategory', verificacion);
        
        if(verificacion.bool) return res.json(verificacion.category);
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getCategoryById,
    getCategory
};