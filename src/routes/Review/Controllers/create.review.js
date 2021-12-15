const Product = require('../../../models/Product');
const axios = require('axios');
const Review = require('../../../models/Review');
const { 
    verificacionU,
    verificacionExis 
} = require('./middleware');

const createReview = async (req, res) => {
    const { id } = req.params;
    const { rating, comment, user } = req.body; // user es el email
    // console.log('body createReview: ', rating, comment, user, id);
    try {
        let verificacionUser = await verificacionU(user);
        // console.log('verificacionUser createReview: ', verificacionUser.user);
        
        if(verificacionUser.bool) {
            let verificacion = await verificacionExis(id, user);
            // console.log('verificacion createReview: ', verificacion);
            if(verificacion.bool)  return res.send('Ya diste una review');
            
            let newReview = new Review({
                rating,
                comment,
                user: verificacionUser.user
            });
            newReview = await newReview.save();
            // console.log('newReview createReview: ', newReview);
            if(newReview) {
                let update = await axios.put(`http://localhost:4000/product/update/rating/${id}`, { newReview });
                // console.log('update createReview: ', update.data);
                return res.json(update.data);
            }
            return res.send('Hubo un problema al cargar los datos'); 
        };
        res.send('Nesesitas un usuario para hacer una review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createReview
};