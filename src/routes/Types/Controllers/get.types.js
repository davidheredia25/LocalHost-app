const Types = require('../../../models/Types');
// const { verificacionId } = require('./middleware');

const getTypes = async (req, res) => {
    const { name } = req.params;
    console.log('name getTypes', name);
    try {
        let getAllTypes = await Types.find();
        console.log('getAll getTypes', getAllTypes);
        if(!name)  return res.json(getAllTypes);

        
        let getTypesByName = getAllTypes.filter(b => b.name.toLowerCase().include(name.toLowerCase()));
        console.log('getByName getTypes', getTypesByName);
        res.json(getTypesByName);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getTypes
};