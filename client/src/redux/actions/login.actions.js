import axios from "axios"
export const GET_USER = "GET_USER"
export const REGISTER_LOCAL = "REGISTER_LOCAL"
export const LOGIN_LOCAL = "LOGIN_LOCAL"
export const LOGIN_AUTH = "LOGIN_AUTH"



// // export const loginGoogle = (tokenId) = async dispatch => {
// //     try {
// //         const { data } = await axios.post("/login", { tokenId })
// //         return dispatch({
// //             type: GET_USER,
// //             payload: data
// //         })
// //     }
// //     catch (error) {
// //         console.log(error)
// //     }
// // }

export const registerLocal = (values) => async (dispatch) => {
    try {
        const res = await axios.post("/user/register", values)
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
            type: GET_USER,
            payload: userinfo
        })
    } catch (error) {
        console.log(error);
    }
};

