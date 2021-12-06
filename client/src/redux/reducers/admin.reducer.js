import { SET_SECTION } from "../actions/admin.actions";

const initialState = {
    section: ""
}

export function adminReducer(state = initialState, action){
    switch(action.type){
        case SET_SECTION:
            return {
                ...state,
                section : action.payload
            }
        default:
            return state
    }
}