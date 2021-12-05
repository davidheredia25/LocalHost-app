import { SET_SECTION, GET_USERS, GET_TICKETS } from "../actions/admin.actions";

const initialState = {
    section: "",
    users: null,
    tickets: null
}

export function adminReducer(state = initialState, action){
    switch(action.type){
        case SET_SECTION:
            return {
                ...state,
                section : action.payload
            }
            case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        case GET_TICKETS:
            return{
                ...state,
                tickets: action.payload
            }
        default:
            return state
    }
}