const Brand = require('../../../models/Brand');
const Category = require('../../../models/Category');
const Types = require('../../../models/Types');

const verificacionId = async (id) => {
    try {
        let find = await Types.findById(id);
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' };
        if(find !== null && find.exis) return obj = { bool: true, type: find };
        return obj;
    } catch(error) {
        console.log(error);
    }
};

const verificacionName = async (name) => {
    try {
        let find = await Types.findOne({ name: name });
        let obj = { bool: false, message: 'No lo encontro o exis esta en false'  };
        if(find !== null && find.exis) return obj = { bool: true, type: find};
        return obj;
    } catch(error) {
        console.log(error);
    }
};

const setExisP = async (brand, category, type) => {
    try {
        let findB = await Brand.findOne({ name: brand });
        let findC = await Category.findOne({ name: category });
        let findT = await Types.findOne({ name: type });
        let find = await Product.find({ brand: findB._id, category: findC._id, type: findT._id });
        // console.log('find setExisP: ', find);
        if (find.length !== 0) {
            let arrayDelete = [];
            find.forEach(async (p) => {
                // console.log('p setExisP: ', p);
                let deleted = await Product.findByIdAndUpdate(p._id, {
                    exis: false
                }, { new: true });
                deleted = await deleted.save();
                arrayDelete.push(deleted.name);
            });
            // console.log('arrayDelete setExisP: ', arrayDelete);
            return arrayDelete;
        }
        return 'No se encontro nada';
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    verificacionName,
    verificacionId,
    setExisP
};