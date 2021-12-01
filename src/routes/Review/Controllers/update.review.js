const Review = require('../../../models/Review');
const { verificacionId } = require('./middleware');

const updateReview = async (req, res) => {
    const { id, rating, comment } = req.body;
    // console.log('rating comment id updateReview', rating, comment, id); 
    try {
        let verificacion = await verificacionId(id); 
        // console.log('verificacion updateReview', verificaion); 
        
        if(verificacion.bool) {
            let update = await Review.findByIdAndUpdate(id, {
                rating: rating,
                comment: comment
            }, { new: true });
            update = await update.save();
            // console.log('update updateReview', update); 
            return res.json(update);
        }
        res.send('No se encontro la review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateReview
};