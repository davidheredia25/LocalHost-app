import { createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from "../reducers/cart.reducer.js";
import {productsReducer} from "../reducers/products.reducer.js";
import {userReducer} from "../reducers/user.reducer.js";
import thunk from "redux-thunk" ;




const store= createStore(
	combineReducers({
		cart: cartReducer,
		products: productsReducer,
		user: userReducer
	}), composeWithDevTools(
		applyMiddleware(thunk) 
	));

export default store;