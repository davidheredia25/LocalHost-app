const Review = require('../../../models/Review');
const { verificacionId } = require('./middleware'); 

const getReview = async (req, res) => { 
    try {
        let getAll = await Review.find()
        .populate('user', ['fristName', 'lastName', 'email']);
        // console.log('getAll getReview', getAll);
        
        if(getAll.length !== 0)  return res.json(getAll); 
        res.send('Hubo problemas para traer las review o no hay reviews');
    } catch (error) {
        console.log(error);
    }
};

const getReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion getReviewById', verificacion );

        if(verificacion.bool)  return res.json(verificacion.review);
        res.send('No se encontro esta review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getReview,
    getReviewById
};