const Brand = require('../../../models/Brand');
const Category = require('../../../models/Category');
const Types = require('../../../models/Types');
const Product = require('../../../models/Product');

const verificacionName = async (name) => {
    try {
        let find = await Brand.findOne({name: name});
        // console.log('find.length verificacionName: ', find);
        let obj = { bool: false, message: 'No lo encontro o exis esta en false' };
        if(find !== null && find.exis) return obj = { bool: true, brand: find};
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionId = async (id) => {
    try {
        let find = await Brand.findById(id);
        // console.log('find verificacionId', find);

        let obj = { bool: false, message: 'No lo encontro o exis esta en false' }; 
        if(find !== null && find.exis) return obj = { bool: true, brand: find };

        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionC = async (name) => {
    try {
        let find = await Category.findOne({name: name}); 
        // console.log('find verificacionC', find);

        let obj = { bool: false, message: 'No lo encontro o exis esta en false' }; 
        if(find !== null && find.exis) return obj = { bool: true, category: find._id };

        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionT = async (name) => {
    try {
        let find = await Types.findOne({name: name}); 
        // console.log('find verificacionT', find);

        let obj = { bool: false, message: 'No lo encontro o exis esta en false' }; 
        if(find !== null && find.exis) return obj = { bool: true, type: find._id };

        return obj;
    } catch (error) {
        console.log(error);
    }
};

const setExisP = async (brand) => {
    try {
        let find = await Product.find({ brand: brand });
        console.log('find setExisP: ', find);
        if (find.length !== 0) {
            let arrayDelete = [];
            find.forEach(async (p) => {
                console.log('p setExisP: ', p);
                let deleted = await Product.findByIdAndUpdate(p._id, {
                    exis: false
                }, { new: true });
                deleted = await deleted.save();
                arrayDelete.push(deleted.name);
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
    verificacionC,
    verificacionT,
    setExisP
};