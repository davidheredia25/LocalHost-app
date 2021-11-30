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
        default:
            return state;
    }
}