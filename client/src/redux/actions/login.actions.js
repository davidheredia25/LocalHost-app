import axios from "axios"
export const GET_USER = "GET_USER"
export const REGISTER_LOCAL = "REGISTER_LOCAL"
export const LOGIN_LOCAL = "LOGIN_LOCAL"
export const LOGIN_AUTH = "LOGIN_AUTH"
export const LOG_OUT = 'LOG_OUT'
export const EDIT_DATE_USER ='EDIT_DATE_USER'
export const GET_USER_GOOGLE = 'GET_USER_GOOGLE' 



export const loginGoogle = (tokenId) => async dispatch => {
    try {
        const { data } = await axios.post("/user/loginG", { tokenId })
        return dispatch({
            type: GET_USER_GOOGLE,
            payload: data
        });
    }
    catch (error) {
        console.log(error);
    }
};

export const registerLocal = (values) => async (dispatch) => {
    try {
        const res = await axios.post("/user/register", values)
        console.log('dataaaa', res.data)
        return dispatch({
            type: "REGISTER_LOCAL",
            payload: res.data
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const loginAuth = (token) => async (dispatch) => {
    try {
        const res = (await axios.post(`/user/profile/${token}`)).data
        return dispatch({
            type: LOGIN_AUTH,
            payload: res
        })
    } catch (error){
        console.log(error)
    }
}

export const loginLocal = (input) => async (dispatch) => {
    try {
        const { data } = await axios.post("/user/login", input)
        const userinfo = (await axios.post(`/user/profile?secret_token=${data.token}`)).data
        return dispatch({
            type: LOGIN_LOCAL,
            payload: userinfo
        })
    } catch (error) {
        console.log(error);
    }
};

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export const getUser = () => {
    return {
        type: GET_USER
    }
}

export const editDateUser = (id, input) => async (dispatch) => {
    try {
        const res = (await axios.put(`/user/edit/${id}`, input)).data
        return dispatch({
            type: EDIT_DATE_USER,
            payload: res
        })
    }
    catch (error) {
        console.log(error)
    }
}
