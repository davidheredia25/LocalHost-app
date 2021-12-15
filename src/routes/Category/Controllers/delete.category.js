const Category = require('../../../models/Category');
const { 
    verificacionName,
    setExisP
} = require('./middleware');

const deleteCategory = async (req, res) => {
    const { brand, category } = req.body; 
    // console.log('body deleteCategory: ', brand, category);
    try {
        let verificacionCategoria = await verificacionName(category);
        // console.log('verificacionCategoria deleteCategory: ', verificacionCategoria);
        let id = verificacionCategoria.category._id;
        // console.log('id deleteCategory: ', id);
        if (verificacionCategoria.bool) {
            let deleteProduct = await setExisP(brand, category);
            // console.log('deleteProduct deleteCategory: ', deleteProduct);
            let deleted = await Category.findByIdAndUpdate(id, {
                exis: false
            }, { new: true });
            deleted = await deleted.save();
            // console.log('deleted deleteCategory: ', deleted);
            return res.json(deleted, deleteProduct);
        }
        res.send(verificacionCategoria.message);
    } catch (error) {
        console.log(error);
    }
}; 

module.exports = {
    deleteCategory
};