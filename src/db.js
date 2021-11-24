const mongoose = require('mongoose');

const URL


mongoose
    .connect(URL, {
        useUnifiedTopology: true,
 		useNewUrlParser: true
    })
    .then(db => console.log(`Base de datos conectando con: ${db.connection.name}`))
    .catch(err => console.log(err));