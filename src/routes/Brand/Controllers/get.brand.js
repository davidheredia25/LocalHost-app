const Brand = require('../../../models/Brand');
const Product = require('../../../models/Product');
const { verificacionId } = require('./middleware');

const getBrandsList = async (req, res) => {
    try {
        let brandsList = await Brand.find();
        // console.log('brandsList getBrandsList: ', brandsList);
        
        if(brandsList.length !== 0) {
            brandsList = brandsList.filter(x => x.exis);
            // console.log('brandsList getBrandsList: ', brandsList);
            return res.json(brandsList);
        }
        res.send('Hubo un problema al traer las Brands');
    }
    catch (error) {
        console.log(error)
    }
}

const getBrand = async (req, res) => {
    try {
        let brands = await Brand.find({ exis: true });
        let products = await Product.find({ exis: true })
        .populate("brand", ["name"])
        .populate("category", ["name"])
        .populate("type");

        let array = [];
        if (brands.length !== 0 && products.length !== 0) {
            brands.forEach(b => {
                let brandName = b.name;
                let brandProducts = products.filter(x => x.brand.name === brandName);
                let brandCategories = brandProducts.map(x => x.category.name)
                brandCategories = [...new Set(brandCategories)]
                let brandObject = {
                    name: brandName,
                    categories: brandCategories.map(x => {
                        return { 
                            name: x, 
                            types: [] 
                        }
                    })
                }
                brandProducts.forEach(x => {
                    let productCategory = x.category.name;
                    let productType = x.type.name;
                    brandObject.categories.forEach(obj => {
                        if(obj.name === productCategory) {
                            obj.types = 
                                !obj.types.length 
                                    ? [productType] 
                                    : [...obj.types, productType];
                            obj.types = [...new Set(obj.types)];
                        }
                    })
                })
                array.push(brandObject);
            })
            return res.json(array);
        }
        res.send('Hubo preoblema al traer brands o Products');
    } catch (error) {
        console.log(error);
    }
};

const getBrandById = async (req, res) => {
    const { id } = req.params;
    // console.log('id getBrandById', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion getBrandById', verificacion);

        if(verificacion.bool) return res.json(verificacion.brand);
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getBrand,
    getBrandById,
    getBrandsList
};