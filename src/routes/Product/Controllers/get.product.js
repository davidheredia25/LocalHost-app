const Product = require('../../../models/Product');
const {
    verificacionId,
    filterB,
    filterC,
    filterT
} = require('./middleware');

const getProducts = async (req, res) => {
    const {
        name,
        brand,
        category,
        type,
        order
    } = req.query;
    // console.log('body getProducts: ', name, brand, category, type);
    try {
        let getAllProducts = await Product.find({ exis: true })
            .populate('brand', ['name'])
            .populate('category', ['name'])
            .populate('type', ['name']);
        /* console.log('getAllProducts getProducts', getAllProducts); */

        if (brand) getAllProducts = await filterB(brand, getAllProducts);
        // console.log('filterBrand getProducts', filterBrand);

        if (category) getAllProducts = await filterC(category, getAllProducts);
        // console.log('filterCategories getProducts', filterCategories);

        if (type) getAllProducts = await filterT(type, getAllProducts);
        // console.log('filterTypes getProducts', filterTypes);
        if (name !== '') getAllProducts.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('getProductsName getProducts', getProductsName);
        // console.log('getProductsFilterName getProducts', getProductsFilterName);

        if (order) {
            if (order === "maxP") {
                getAllProducts = getAllProducts.sort(function (a, b) {
                    if (a.price > b.price) return -1;
                    if (b.price > a.price) return 1;
                    return 0;
                })
            }
            if (order === "minP") {
                getAllProducts = getAllProducts.sort(function (a, b) {
                    if (a.price > b.price) return 1;
                    if (b.price > a.price) return -1;
                    return 0;
                })
            }
        }
        res.json(getAllProducts);
    } catch (error) {
        console.log(error);
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    // console.log('id getProducts', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion getProducts', verificacion);

        if (verificacion.bool) return res.json(verificacion.product);
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

const getTalles = async (req, res) => {
    try {
        let product = await Product.find({ exis: true })
        console.log('product getTalles: ', product);
        if (product.length !== 0) {
            let array = [];
            product.forEach(p => {
                p.talle.forEach(obj => {
                    if (obj.name) {
                        array.push(obj.name)
                    }
                })
            })
            array = [...new Set(array)]
            return res.json(array)
        }
        res.send('Hubo un error al traer los Products xd');
    }
    catch (err) {
        console.log(err)
    }
}

const recommended = async (req, res) => {
    try {
        let find = await Product.find();
        console.log('find recommended: ', find);

        if (find.length !== 0) {
            let filtered = find.filter(p => p.rating >= 4);
            console.log('filtered recommended: ', filtered);
            return res.json(filtered);
        }
        res.send('Hubo un error al traerme los products');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getProducts,
    getProductById,
    getTalles,
    recommended
};