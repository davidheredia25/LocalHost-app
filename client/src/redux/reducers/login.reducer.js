import { LOGIN_LOCAL, REGISTER_LOCAL, GET_USER, LOG_OUT} from "../actions/login.actions";

let initialState = {
    user: JSON.parse(localStorage.getItem('user'))
}

export function loginReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_USER:
            return {
                ...state,
                user: JSON.parse(localStorage.getItem('user'))
            }
        case REGISTER_LOCAL:
            const usuario = localStorage.setItem("user", JSON.stringify(payload))
            return {
                ...state, 
                user: usuario
            }
        case LOGIN_LOCAL:
            return {
                ...state,
                user: payload
            } 
        case LOG_OUT : 
            return {
                ...state,
                user: localStorage.clear()
            }      
        default:
            return state;
    }
};


