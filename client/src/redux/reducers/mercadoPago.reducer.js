import {MERCADO_ID} from "../actions/mercadoPago.actions"

const initialstate = {
    datos: null
};

export function mercadoReducer(state = initialstate, action){
    switch(action.type){
        case MERCADO_ID
        :
            return{
                ...state,
                datos: action.payload
            }
            default:
                return state;
    }
}