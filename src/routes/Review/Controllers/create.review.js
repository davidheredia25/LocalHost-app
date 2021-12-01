const Review = require('../../../models/Review');
const { 
    verificacionU,
    verificacionExis 
} = require('./middleware');

const createReview = async (req, res) => {
    const { rating, comment, user } = req.body; // user es el email
    // console.log('body createReview', rating, comment, user);
    try {
        let verificacionUser = await verificacionU(user);
        // console.log('verificacionUser createReview', verificacionUser);
        
        if(verificacionUser.bool) {
            let verificacion = await verificacionExis(user);
            // console.log('verificacion createReview', verificacion);
            if(verificacion.bool)  return res.send('Ya diste una review');
            
            let newReview = new Review({
                rating,
                comment,
                user: verificacionUser.user
            });
            newReview = await newReview.save();
            // console.log('verificacion createReview', verificacion);
            return res.json(newReview); 
        };
        res.send('Nesesitas un usuario para hacer una review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createReview
};