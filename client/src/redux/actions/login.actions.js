import axios from "axios";
import React from 'react';
import { Join } from "./cart.actions";
import { addItemToCart } from "./cart.actions";
import { useSelector } from "react-redux";
export const GET_USER = "GET_USER";
export const REGISTER_LOCAL = "REGISTER_LOCAL";
export const LOGIN_LOCAL = "LOGIN_LOCAL";
export const LOGIN_AUTH = "LOGIN_AUTH";
export const LOG_OUT = 'LOG_OUT';
export const EDIT_DATE_USER ='EDIT_DATE_USER';
export const GET_USER_GOOGLE = 'GET_USER_GOOGLE';

const emptyCart = JSON.parse(localStorage.getItem('cart'))


export const loginGoogle = (tokenId) => async dispatch => {
    try {
       
        const { data } = await axios.post("/user/loginG", { tokenId })
         dispatch({
            type: GET_USER_GOOGLE,
            payload: data
        })
        return dispatch(Join(data._id))
    }
    catch (error) {
        console.log(error);
    }
};

export const registerLocal = (values) => async (dispatch) => {
    try {
        const res = await axios.post("/user/register", values)
        console.log('dataaaa', res.data)
         dispatch({
            type: "REGISTER_LOCAL",
            payload: res.data
        })
        return dispatch(Join(res.data._id))
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
         dispatch({
            type: LOGIN_LOCAL,
            payload: userinfo
        })
        return dispatch(Join(userinfo._id))
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

export const forgotPassword =  (input) => async () =>  {
    try {
        await axios.put(`/user/login/password`, input)
    } catch (error) {
        console.log(error)
    }
}
