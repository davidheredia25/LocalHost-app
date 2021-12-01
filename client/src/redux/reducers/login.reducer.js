import {GET_USER, LOGIN_LOCAL, REGISTER_LOCAL, LOGIN_AUTH } from "../actions/login.actions";

const initialState = {
    user: null,
}


export function loginReducer(state = initialState, { type, payload }) {
    switch (type) {
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
        case LOGIN_AUTH:
            return {
                ...state,
                user: payload
            }    
        default:
            return state;
    }
}