const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://MarcoCarballo:Marcuss1991@cluster0.p7uoj.mongodb.net/VSClothes?retryWrites=true&w=majority' //`mongodb+srv://molucax:74DmtnKCB3APPtKE@cluster0.9llb5.mongodb.net/VSClothes?retryWrites=true&w=majority`;

mongoose
    .connect(MONGODB_URI, {
        useUnifiedTopology: true,
 		useNewUrlParser: true
    })
    .then(db => console.log(`Base de datos conectada con: ${db.connection.name}`))
    .catch(err => console.log(err));