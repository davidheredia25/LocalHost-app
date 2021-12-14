import axios from "axios"

export const SET_SECTION = "SET_SECTION"
export const GET_USERS = "GET_USERS"
export const GET_TICKETS = "GET_TICKETS"


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
export const getTickets = () => async (dispatch) => {
    const { data } = await axios.get("/tickets")
    return dispatch({
        type: GET_TICKETS,
        payload: data
    })
}

export const changeStatus = ({id, status}) => async (dispatch) => {
    await axios.put(`/tickets/status/${id}`, {status}) //status es un string, por lo tanto le paso objeto para que marquito haga un destruchafdbsring de status y le llegue un string. Gracias Lucas Morales
    return dispatch(getTickets())
}

export const deleteUser = (id) => async (dispatch) => {
    await axios.delete(`/user/delete/${id}`)
    return dispatch(getUsers())
}

export const sendNewPassword = (id) => async () => {
    await axios.put(`/user/newPassword/${id}`)
}