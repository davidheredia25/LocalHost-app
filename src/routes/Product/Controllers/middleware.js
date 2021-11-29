const Product = require('../../../models/Product');
const Brand = require('../../../models/Brand');
const Category = require('../../../models/Category');
const Types = require('../../../models/Types');

const verificacionName = async (name) => {
    try {
        let find = await Product.find({name: name});
        // console.log('find verificacionName', find);
        let obj = { bool: false };
        if(find.lenght !== 0 || find !== null) return obj = { bool: true };
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionId = async (id) => {
    try {
        let find = await Product.findById(id)
        .populate('brand', ['name'])
        .populate('category', ['name'])
        .populate('type', ['name']);
        // console.log('find verificacionId', find);
        let obj = { bool: false };
        if(find.length !== 0 || find !== null) return obj = { bool: true, product: find };
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionB = async (name) => {
    try {
        let find = await Brand.find({name: name}); 
        // console.log('find verificacionB', find);
        let obj = { bool: false };
        if(find.length !== 0 || find !== null) return obj = { bool: true, brand: find._id };
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionC = async (name) => {
    try {
        let find = await Category.find({name: name}); 
        // console.log('find verificacionC', find);
        let obj = { bool: false };
        if(find.length !== 0 || find !== null) return obj = { bool: true, category: find._id };
        return obj;
    } catch (error) {
        console.log(error);
    }    
};    

const verificacionT = async (name) => {
    try {
        let find = await Types.find({name: name}); 
        // console.log('find verificacionT', find);
        let obj = { bool: false };
        if(find.length !== 0 || find !== null) return obj = { bool: true, type: find._id };
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const filterB = async (name, array) => {
    try {
        // console.log('array filterT', array);        
        let filterBr = await array.filter(p => p.brand.name === name);
        // console.log('filterBr filterB', filterBr);
        return filterBr;
    } catch (error) {
        console.log(error);
    }
};

const filterC = async (name, array) => {
    try {
        // console.log('array filterT', array);        
        let filterCa = await array.filter(p => p.category.name === name);
        // console.log('filterCa filterC', filterCa);
        return filterCa;
    } catch (error) {
        console.log(error);
    }
};

const filterT = async (name, array) => {
    try {
        // console.log('array filterT', array);        
        let filterTy = await array.filter(p => p.type.name === name);
        // console.log('filterTy filterT', filterTy);
        return filterTy;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    verificacionId,
    verificacionName,
    verificacionB,
    verificacionC,
    verificacionT,
    filterB,
    filterC,
    filterT
};