const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');
// IMPORTS ROUTES


const app = express();


//Setings
app.set('port', config.PORT);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

//Routes


