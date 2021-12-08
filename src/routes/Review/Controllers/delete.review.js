const Review = require('../../../models/Review');
const { verificacionId } = require('./middleware');

const deleteReview = async (req, res) => {
    const { id } = req.params;
    console.log('id deleteReview', id);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion deleteReview', verificacion);
        
        if(verificacion.bool) {
            let deleted = await Review.findByIdAndDelete(id);
            console.log('deleted deleteReview', deleted);
            res.json(deleted);
        }
        res.send('No se encontro la review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteReview
};