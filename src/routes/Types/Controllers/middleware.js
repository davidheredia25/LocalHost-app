const Types = require('../../../models/Types');

const verificacionId = async (id) => {
    try {
        let find = await Types.findById(id);
        let obj = { bool: false };
        if(find !== null) return obj = { bool: true, type: find };
        return obj;
    } catch(error) {
        console.log(error);
    }
};

const verificacionName = async (name) => {
    try {
        let find = await Types.find({name: name});
        let obj = { bool: false };
        if(find.length !== 0) return obj = { bool: true };
        return obj;
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    verificacionName,
    verificacionId
};