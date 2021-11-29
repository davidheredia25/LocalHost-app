const Category = require('../../../models/Category');

const verificacionId = async (id) => {
    try {
        let find = await Category.findById(id);
        // console.log('find verificacionId', find);
        let obj = { bool: false };
        if(find.length !== 0) return obj = { bool: true, category: find };
        return obj;
    } catch(error) {
        console.log(error);
    }
};

const verificacionName = async (name) => {
    try {
        let find = await Category.findOne({name: name});
        console.log('find verificacionName', find);
        let obj = { bool: false };
        if(find !== null) return obj = { bool: true };
        return obj;
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    verificacionId,
    verificacionName
};