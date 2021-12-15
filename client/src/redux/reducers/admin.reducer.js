import { 
    SET_SECTION, 
    GET_USERS, 
    GET_TICKETS, 
    FIND_TICKET, 
    FILTER_TICKETS,
    GET_TALLES
} from "../actions/admin.actions";

const initialState = {
    section: "",
    users: null,
    tickets: null,
    ticketsFiltered: null,
    ticket: null,
    talles: null
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
                tickets: action.payload,
                ticketsFiltered: action.payload
            }
        case FIND_TICKET:
            let t = state.tickets.find(x => x._id === action.payload)
            return {
                ...state,
                ticket: t
            }
        case FILTER_TICKETS: 
            let filtered = action.payload !== "all" ? state.tickets.filter(x => x.status === action.payload) : state.tickets
            return {
                ...state,
                ticketsFiltered: filtered
            }
        case GET_TALLES: 
            return {
                ...state,
                talles: action.payload
            }
        default:
            return state
    }
}