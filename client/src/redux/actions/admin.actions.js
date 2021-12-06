import axios from "axios"

export const SET_SECTION = "SET_SECTION"
export const GET_USERS = "SET_SECTION"

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
    await axios.put(`/user/rol/${id}`)
    return dispatch(getUsers())
}