const Review = require('../../../models/Review');
const User = require('../../../models/User');
const Product = require('../../../models/Product');

const verificacionId = async (id) => {
    try {
        let find = await Review.findById(id)
        .populate('user', ['fristName', 'lastName', 'email']);
        let obj = { bool: false };
        if(find !== null)  return obj = { bool: true, review: find };
        return obj;     
    } catch (error) {
        console.log(error);
    }
};

const verificacionU = async (email) => {
    try {
        let find = await User.findOne({email: email});
        let obj = { bool: false };
        if(find !== null)  return obj = { bool: true, user: find._id };
        return obj;
    } catch (error) {
        console.log(error)
    }
};

const verificacionExis = async (id, email) => {
    try {
        let find = await Product.findById(id);
        // console.log('find verificacionExis', find.reviews);
        let obj = { bool: false };
        let veri = [];
        if (find.reviews && find.reviews !== null)  veri = find.reviews.filter(r => r.user.email === email);
        // console.log('veri verificacionExis', veri);
        if(veri.length !== 0)  return obj = { bool: true };
        return obj;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    verificacionId,
    verificacionU,
    verificacionExis
};