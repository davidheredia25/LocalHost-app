const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')

const config = require('./config');
// IMPORTS ROUTES
const BrandRoutes = require('./routes/Brand/index.brand');
const CategoryRoutes = require('./routes/Category/index.category');
const TypesRoutes = require('./routes/Types/index.types');
const ProductsRoutes = require('./routes/Product/index.product');
const UserRoutes = require('./routes/User/index.user');
const TicketRoutes = require('./routes/Ticket/index.ticket');
const ReviewRoutes = require('./routes/Review/index.review');

const app = express();
require("./routes/User/Controllers/middleware")


//Setings
app.set('port', config.PORT);

//Middlewares
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

//Multer
app.use('/public', express.static(`${__dirname}/public/imgs/`))

//Routes
app.use('/', BrandRoutes);
app.use('/', CategoryRoutes);
app.use('/', ProductsRoutes);
app.use('/', ReviewRoutes);
app.use('/', TicketRoutes);
app.use('/', UserRoutes);
app.use('/', TypesRoutes);

module.exports = app;