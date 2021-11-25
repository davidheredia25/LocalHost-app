const Category = require('../../../models/Category');


const verificacionName = async (name) => {
    try {
        let find = await Category.find({name: name});
        if(find) return true;
        return false;
    } catch(error) {
        console.log(error);
    }
}

const verificacionId = async (id) => {
    try {
        let find = await Category.findById(id);
        let obj;
        if(find) {
            obj = {
                bool: true,
                category: find 
            };
            return obj;
        }
        obj = {
            bool: false
        }
        return obj;
    } catch(error) {
        console.log(error);
    }
};


module.exports = {
    verificacionId,
    verificacionName
};