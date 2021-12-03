import { LOGIN_LOCAL, REGISTER_LOCAL, LOGIN_GOOGLE, LOG_OUT} from "../actions/login.actions";

let initialState = {
    user: JSON.parse(localStorage.getItem('user'))
}

export function loginReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_GOOGLE:
            localStorage.setItem("user", JSON.stringify({...payload}));
            return {
                ...state,
                user: payload
            }
        case REGISTER_LOCAL:
            const usuario = localStorage.setItem("user", JSON.stringify(payload))
            return {
                ...state, 
                user: usuario
            }
        case LOGIN_LOCAL:
            const login = localStorage.setItem("user", JSON.stringify(payload));
            return {
                ...state,
                user: login
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


