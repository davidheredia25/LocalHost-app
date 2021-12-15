const Product = require('../../../models/Product');
const {
    verificacionId,
    verificacionB,
    verificacionC,
    verificacionT
} = require('./middleware');

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        brand, //String
        categories, //String
        types, //String
        price,
        color,
        talle,
        stock
    } = req.body;
    // console.log('id updateProduct: ', id);
    // console.log("body (T.C.B.N.T) updateProduct: ", types, categories, brand, name, talle);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion updateProduct', verificacion);

        if (verificacion.bool) {
            if (brand !== "") {
                let verificacionBrand = await verificacionB(brand);
                // console.log('verificacionBrand updateProduct', verificacionBrand);
                if (verificacionBrand.bool) brand = verificacionBrand.brand
                else return res.send(`${verificacionBrand.message} la marca ${brand}`);
            }
            // console.log('brand updateProduct', brand);

            if (categories !== "") {
                let verificacionCategory = await verificacionC(categories);
                // console.log('verificacionCategory updateProduct', verificacionCategory);
                if (verificacionCategory.bool) categories = verificacionCategory.category
                else return res.send(`${verificacionCategory.message} la categoria ${categories}`);
            }
            // console.log('categories updateProduct', categories);

            if (types !== "") {
                let verificacionType = await verificacionT(types);
                // console.log('verificacionType updateProduct', verificacionType);
                if (verificacionType.bool) types = verificacionType.type
                else return res.send(`${verificacionType.message} el tipo ${types}`);
            }
            // console.log('types updateProduct', types);

            let update = await Product.findByIdAndUpdate(id, {
                name: name,
                brand: brand,
                category: categories,
                type: types,
                price: price,
                color: color,
                talle: talle,
                stock: stock
            }, { new: true });
            update = await update.save();
            // console.log('update updateProduct', update);
            return res.json(update);
        }
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

const updateRating = async (req, res) => {
    const { id } = req.params;
    const { newReview } = req.body;
    // console.log('body', req.body);
    // console.log(`newReview, id updateRating: ${newReview}, ${id}`);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion updateRating:', verificacion);

        if (verificacion.bool) {
            let { cinco, cuatro, tres, dos, uno } = verificacion.product.numReviews;
            let count;
            let change;
            switch (newReview.rating) {
                case 1:
                    count = uno + 1;
                    change = 'uno';
                    break;
                case 2:
                    count = dos + 1;
                    change = 'dos';
                    break;
                case 3:
                    count = tres + 1;
                    change = 'tres';
                    break;
                case 4:
                    count = cuatro + 1;
                    change = 'cuatro';
                    break;
                case 5:
                    count = cinco + 1;
                    change = 'cinco';
                    break;
                default:
                    return res.send('Hubo un error, los nros tiene que ser entre 1 y 5');
            };
            let multi = (5 * cinco) + (4 * cuatro) + (3 * tres) + (2 * dos) + (1 * uno);
            let sum = cinco + cuatro + tres + dos + uno;
            const newRating = multi / sum;
            // console.log('newRating updateRating: ', newRating);

            let update = await Product.findByIdAndUpdate(id, {
                rating: newRating,
                numReviews: {
                    ...verificacion.product.numReviews,
                    [change]: count
                },
                reviews: [...verificacion.product.reviews, newReview._id]
            }, { new: true });

            update = await update.save();
            // console.log('update updateRating: ', update);
            return res.json(update);
        }
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateProduct,
    updateRating
};