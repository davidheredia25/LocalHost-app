const Brand = require('../../../models/Brand');
const Product = require("../../../models/Product");
const { verificacionId } = require('./middleware');

const getBrand = async (req, res) => {
    const { name } = req.query;
    // console.log('name getBrand', name);
    try {
        let brands = await Brand.find();
        console.log("brands", brands);
        let products = await Product.find().populate("brand", ["name"]).populate("category", ["name"]).populate("type")
        let brandCategories;
        brands.forEach(b => {
            let brandName = b.name;
            let productsFiltered = products.filter(x => x.brand.name === brandName);
            /* brandCategories = products.map(x => x.category[0])
            brandCategories = [...new Set(brandCategories)]
            console.log("17", brandCategories)
            brandCategories = brandCategories.map(x => {
                return {
                    name: x,
                    types: []
                }
            })
            // brandCategories = [{name: "indumentaria", types: []}, {}, {}, ...]
            productsFiltered.forEach(el => {
                let productCategory = el.category;
                let productType = el.types;
                brandCategories = brandCategories.map(x => {
                    if(x.name === productCategory) {
                        x.types = [...x.types, productType]
                    }
                })
            }) */
        })
        return res.json(brandCategories);

        /* console.log('getAll getBrand', getAllBrand); */
        if(!name)  return res.json(brands);
        
        let getBrandByName = getAllBrand.filter(b => b.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('getByName getBrand', getBrandByName);
        res.json(getBrandByName);
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
        res.send('No se encontro la marca');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getBrand,
    getBrandById
};