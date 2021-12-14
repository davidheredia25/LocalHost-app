import { 
    SET_SECTION, 
    GET_USERS, 
    GET_TICKETS, 
    FIND_TICKET, 
    FILTER_TICKETS 
} from "../actions/admin.actions";

const initialState = {
    section: "",
    users: null,
    tickets: null,
    ticketsFiltered: null,
    ticket: null
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
        case FILTER_TICKETS: {
            let filtered = action.payload !== "all" ? state.tickets.filter(x => x.status === action.payload) : state.tickets
            return {
                ...state,
                ticketsFiltered: filtered
            }
        }
        default:
            return state
    }
}