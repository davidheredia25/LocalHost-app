const Brand = require('../../../models/Brand');
const Category = require('../../../models/Category');

const verificacionId = async (id) => {
    try {
        let find = await Brand.findById(id);
        let obj = {
            bool: false
        };
        if(find.length !== 0 || find !== null) {
            obj = {
                bool: true,
                brand: find
            }
            return obj;
        }
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionName = async (name) => {
    try {
        let find = await Brand.find({name: name});
        console.log('find',find);
        let obj = {
            bool: false
        };
        if(find.lenght === 0 || find === null) {
            obj = {
                bool: true,
            }
            return obj;
        }
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionC = async (id) => {
    try {
        let find = await Category.findById(id); 
        let obj = {
            bool: false
        };
        if(find.length !== 0 || find !== null) {
                obj = {
                bool: true,
            }
            return obj;
        }
        return obj;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    verificacionId,
    verificacionName,
    verificacionC
};