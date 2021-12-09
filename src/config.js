const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	MONGO_DB: process.env.MONGO_DB || 'VSClothes',
	MONGO_USER: process.env.MONGO_USER || "admin",
	MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
	MONGO_HOST: process.env.MONGO_HOST || "localhost",
	PORT: process.env.PORT || 3000,
	STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'Secrete key',
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'Client ID',
	APP_HOST: process.env.APP_HOST || 'apphost'

}

