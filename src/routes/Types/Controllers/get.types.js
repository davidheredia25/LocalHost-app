const Types = require('../../../models/Types');
const { verificacionId } = require('./middleware');

const getTypes = async (req, res) => {
    const { name } = req.query;
    // console.log('name getTypes', name);
    try {
        let getAllTypes = await Types.find({ exis: true });
        // console.log('getAll getTypes', getAllTypes);
        if(!name)  return res.json(getAllTypes);
        
        let getTypesByName = getAllTypes.filter(b => b.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('getByName getTypes', getTypesByName);
        res.json(getTypesByName);
    } catch (error) {
        console.log(error);
    }
};

const getTypesById = async (req, res) => {
    const { id } = req.params;
    // console.log('id getTypesById', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion getTypesById', verificacion);

        if(verificacion.bool) return res.json(verificacion.type);
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getTypes,
    getTypesById
};