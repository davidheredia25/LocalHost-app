import { LOGIN_LOCAL, REGISTER_LOCAL } from "../actions/login.actions";
import {GET_USER} from "../actions/products.actions"

const initialState = {
    user: null
}


export default function loginReducer(state = initialState, { type, payload }) {
    switch (action) {
        case GET_USER:
            return {
                ...state,
                user: payload
            }

        case REGISTER_LOCAL:
            return {
                ...state, 
                user: payload
            }
        case LOGIN_LOCAL:
            return {
                ...state,
                user: payload
            }   
        default:
            return state;
    }
}