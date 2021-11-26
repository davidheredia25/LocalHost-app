const Category = require('../../../models/Category');
const Types = require('../../../models/Types');


const verificacionName = async (name) => {
    try {
        let find = await Category.find({name: name});
        let obj = {
            bool: false
        }
        if(find.length !== 0 || find !== null) {
            return obj = {
                bool: true
            }
        }
        return obj;
    } catch(error) {
        console.log(error);
    }
}

const verificacionId = async (id) => {
    try {
        let find = await Category.findById(id);
        let obj = {
            bool: false
        };
        if(find) {
            return obj = {
                bool: true,
                category: find 
            };
        }
        return obj;
    } catch(error) {
        console.log(error);
    }
};

const verificacionT = async (id) => {
    try {
        let find = await Types.findById(id); 
        let obj = {
            bool: false
        };
        if(find.length !== 0 || find !== null) {
            return obj = {
                bool: true
            }
        }
        return obj;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    verificacionId,
    verificacionName
};