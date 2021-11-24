const Brand = require('../../../models/Brand');

const verificacionId = async (id) => {
    let find = await Brand.findById(id);
    if(find)  return true;
    return false;
};

const verificacionName = async (name) => {
    let find = await Brand.find({name: name});
    if(find) return true;
    return false;
};

module.exports = {
    verificacionId,
    verificacionName
};