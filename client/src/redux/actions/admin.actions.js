import axios from "axios"

export const SET_SECTION = "SET_SECTION"
export const GET_USERS = "GET_USERS"
export const GET_TICKETS = "GET_TICKETS"
export const FIND_TICKET = "FIND_TICKET"
export const FILTER_TICKETS = "FILTER_TICKETS"
export const GET_TALLES = "GET_TALLES"


export const setSection = (section)  => {
    return {
        type: SET_SECTION,
        payload: section
    }
}

export const getUsers = () => async (dispatch) => {
    const { data } = await axios.get("/user")
    return dispatch({
        type: GET_USERS,
        payload: data
    })
}

export const changeRol = (id) => async (dispatch) => {
    await axios.put(`/user/update/${id}`)
    return dispatch(getUsers())
}

// ----------------------
/* export const getTickets = () => async (dispatch) => {
    const { data } = await axios.get("/tickets")
    return dispatch({
        type: GET_TICKETS,
        payload: data
    })
} */

export const getTickets = () => {
    const data = [
        { 
            items: [{name: "Remera Nike"}, {name: "Remera Adidas"}], 
            status: "pending",
            _id: "1"
        },
        { 
            items: [{name: "Zapas Nike"}, {name: "Zapas Adidas"}], 
            status: "processing",
            _id: "2" 
        },
        { 
            items: [{name: "Gorra Nike"}, {name: "Gorra Adidas"}], 
            status: "finished",
            _id: "3" 
        },
        { 
            items: [{name: "Pantalon Nike"}, {name: "Pantalon Adidas"}], 
            status: "canceled",
            _id: "4" 
        },
    ]
    return {
        type: GET_TICKETS,
        payload: data
    }
}
// ----------------------

export const changeStatus = (id) => async (dispatch) => {
    await axios.put(`/tickets/status/${id}`) //status es un string, por lo tanto le paso objeto para que marquito haga un destruchafdbsring de status y le llegue un string. Gracias Lucas Morales
    return dispatch(getTickets())
}

export const deleteUser = (id) => async (dispatch) => {
    await axios.delete(`/user/delete/${id}`)
    return dispatch(getUsers())
}

export const sendNewPassword = (id) => async () => {
    await axios.put(`/user/newPassword/${id}`)
}

export const findTicket = (id) => {
    return {
        type: FIND_TICKET,
        payload: id
    }
}

export const cancelTicket = (id) => async (dispatch) => {
    await axios.put(`tickets/cancel/${id}`)
    return dispatch(getTickets())
}

export const filterTickets = (status) => {
    return {
        type: FILTER_TICKETS,
        payload: status
    }
}

export const getTalles = () => async (dispatch) => {
    const { data } = await axios.get('/product/talles')
    return dispatch({
        type: GET_TALLES,
        payload: data
    })
}