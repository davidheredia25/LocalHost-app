const Category = require('../../../models/Category');


const verificacionName = async (name) => {
    try {
        let find = await Category.find({name: name});
        if(find) return true;
        return false;
    } catch(error) {
        console.log(error);
    }
}

const verificacionType = async (types) => {
    try {
        let find = await Category.find();
        let filtered = find.filter(c => c.types)
        if(find) return true;
        return false;
    } catch(error) {
        console.log(error);
    }
};