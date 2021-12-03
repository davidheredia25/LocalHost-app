const Brand = require('../../../models/Brand');
const Category = require('../../../models/Category');
const Types = require('../../../models/Types');

const verificacionName = async (name) => {
    try {
        let find = await Brand.find({name: name});
        // console.log('find.length verificacionName', find.length);
        let obj = { bool: false };
        if(find.lenght !== 0) return obj = { bool: true };
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionId = async (id) => {
    try {
        let find = await Brand.findById(id);
        // console.log('find verificacionId', find);

        let obj = { bool: false }; 
        if(find !== null) return obj = { bool: true, brand: find };

        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionC = async (name) => {
    try {
        let find = await Category.findOne({name: name}); 
        // console.log('find verificacionC', find);

        let obj = { bool: false }; 
        if(find !== null) return obj = { bool: true, category: find._id };

        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionT = async (name) => {
    try {
        let find = await Types.findOne({name: name}); 
        // console.log('find verificacionT', find);

        let obj = { bool: false }; 
        if(find !== null) return obj = { bool: true, type: find._id };

        return obj;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    verificacionId,
    verificacionName,
    verificacionC,
    verificacionT
};