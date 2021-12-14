const Brand = require('../../../models/Brand');
const Category = require('../../../models/Category');
const Product = require('../../../models/Product');

const verificacionId = async (id) => {
    try {
        let find = await Category.findById(id);
        // console.log('find verificacionId', find);
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' };
        if(find !== null && find.exis) return obj = { bool: true, category: find };
        return obj;
    } catch(error) {
        console.log(error);
    }
};

const verificacionName = async (name) => {
    try {
        let find = await Category.findOne({name: name});
        console.log('find verificacionName', find);
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' };
        if(find !== null && find.exis) return obj = { bool: true, category: find };
        return obj;
    } catch(error) {
        console.log(error);
    }
};

const setExisP = async (brand, category) => {
    try {
        let findB = await Brand.findOne({ name: brand })
        let findC = await Category.findOne({ name: category })
        let find = await Product.find({ brand: findB._id, category: findC._id });
        console.log('find setExisP: ', find);
        if (find.length !== 0) {
            let arrayDelete = [];
            find.forEach(async (p) => {
                console.log('p setExisP: ', p);
                let deleted = await Product.findByIdAndUpdate(p._id, {
                    exis: false
                }, { new: true });
                deleted = await deleted.save();
                arrayDelete.push(deleted);
            });
            console.log('arrayDelete setExisP: ', arrayDelete);
            return arrayDelete;
        }
        return 'No se encontro nada';
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    verificacionId,
    verificacionName,
    setExisP
};