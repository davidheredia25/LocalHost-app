const Types = require('../../../models/Types');
const { verificacionName, setExisP } = require('./middleware');

const deleteTypes = async (req, res) => {
    const { brand, category, type } = req.body; 
    console.log('body deleteTypes: ', brand, category, type);
    try {
        let verificacion = await verificacionName(type);
        // console.log('verificacion deleteTypes', verificacion);

        if(verificacion.bool) {
            let deleteProduct = await setExisP(brand, category, type);
            let deleted = await Types.findByIdAndUpdate(verificacion.type._id, {
                exis: false
            }, { new: true });
            deleted = await deleted.save();  
            // console.log('deleted deleteTypes', deleted);
            return res.json(deleted, deleteProduct);
        }
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    } 
};

module.exports = {
    deleteTypes
};