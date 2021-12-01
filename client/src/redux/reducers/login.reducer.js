import { GET_USER } from "../actions/login.actions";

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
        default:
            return state;
    }
}