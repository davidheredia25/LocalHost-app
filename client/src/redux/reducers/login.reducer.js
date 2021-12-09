import { LOGIN_LOCAL, REGISTER_LOCAL, GET_USER, LOG_OUT, EDIT_DATE_USER, GET_USER_GOOGLE,
    FORGOT_PASSWORD
} from "../actions/login.actions";

let initialState = {
    user: JSON.parse(localStorage.getItem('user'))
}

export function loginReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_USER_GOOGLE:
            localStorage.setItem("user", JSON.stringify(payload));
            return {
                ...state,
                user: payload
            }
        case GET_USER:
            return {
                ...state,
                user: JSON.parse(localStorage.getItem('user'))
            }
        case REGISTER_LOCAL:
            localStorage.setItem("user", JSON.stringify(payload));
            return {
                ...state, 
                user: payload
            }
        case FORGOT_PASSWORD: 
            return {
                ...state, 
                user: payload
        }
        case LOGIN_LOCAL:
             localStorage.setItem("user", JSON.stringify(payload));
            return {
                ...state,
                user: payload
            } 
        case LOG_OUT : 
        localStorage.clear()
            return {
                ...state,
                user: null
            }   
        case EDIT_DATE_USER: 
        localStorage.setItem("user", JSON.stringify(payload))
        return {
            ...state,
            user: payload
        }
            

        default:
            return state;
    }
};


