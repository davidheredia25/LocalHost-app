const mongoose = require('mongoose');

const MONGODB_URI = `mongodb+srv://molucax:74DmtnKCB3APPtKE@drinkscluster.miouw.mongodb.net/VSClothes?retryWrites=true&w=majority`;

mongoose
    .connect(MONGODB_URI, {
        useUnifiedTopology: true,
 		useNewUrlParser: true
    })
    .then(db => console.log(`Base de datos conectada con: ${db.connection.name}`))
    .catch(err => console.log(err));