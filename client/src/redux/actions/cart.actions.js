import { letterSpacing } from '@mui/system';
import axios from 'axios';

export const ADD_ITEM_CART = "ADD_ITEM_TO_CART";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_TALLE = "SET_TALLE";
export const SET_COUNT = "SET_COUNT";
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM ';
export const ADD_EMPTY_CART='ADD_EMPTY_CART';
export const DELETE_CART_ALL = 'DELETE_CART_ALL';
export const  GET_CART =' GET_CART';
export const GET_EMPTY_CART ='GET_EMPTY_CART';
export const DELETE_EMPTY_ONE = 'DELETE_EMPTY_ONE';
export const PAGAR = 'PAGAR';
export const DELETE_CART_ONE = 'DELETE_CART_ONE';
export const DELETE_CART = 'DELETE_CART';
export const JOIN = ' JOIN';



/* Esta usaríamos cuando esté el back del carrito del usuario (y los usuarios gg).
Lo que recibe esta función por parámetro (cartProduct) es un objeto con info del item
y del usuario. */

export const addItemToCart = (obj) => async (dispatch) => { 
    let {userId} = obj;
    
    let producto = { productId : obj.productId, qty: obj.qty, talle: obj.talle }
    console.log('id', producto.talle)
    let data  = await axios.put(`user/cart/${userId}`,producto)
    console.log('data', data)
    return dispatch({
        type: ADD_ITEM_CART,
        payload: data
    })
}  

export const addEmptyCart = (obj) => {
    console.log('obj', obj)
    return {
        type: ADD_EMPTY_CART,
        payload: obj
    }
}


export const DeleteItemCart = (id) => {
    return {
        type: DELETE_CART_ITEM ,
        payload: id
    }
}

/* export const addItemToCart = () => {
    return {
        type: ADD_ITEM_TO_CART,
    }
}  */

export const setProduct = (object) => {
    return {
        type: SET_PRODUCT,
        payload: object
    }
}

export const setTalle = (string) => {
    return {
        type: SET_TALLE,
        payload: string
    }
}

export const setCount = (number) => {
    return {
        type: SET_COUNT,
        payload: number
    }
}


export const deleteCart = () => {
    return {
        type: DELETE_CART_ALL
    }
}

export const getEmptyCart = () => {
    return {
        type: GET_EMPTY_CART
    }
}


export const getCart = (id) => async (dispatch) => { 
   
    let {data}  = await axios.get(`user/get/cart/${id}`)
    console.log('data', data)
    return dispatch({
        type: ADD_ITEM_CART,
        payload: data
    })
}  


export const deleteEmptyOne = (producto) =>  {
    console.log('producto',producto)
    return {
        type : DELETE_EMPTY_ONE,
        payload: producto
    }
}


export const Pagar = (userId) => async() => {
   let data =await  axios.post(`user/checkoutMp/${userId}`);
   return data;
}


export const deleteAllCart = (id) => async(dispatch) => {
   let data =  await axios.put(`user/cart/delete/${id}`).data
   return dispatch( {
       type: DELETE_CART,
       payload: data
   })
} 


export const deleteCartOne = (obj) => async (dispatch) => {
    let productId =obj.productId;
    console.log('obj', productId)
    let data = await axios.put(`user/cart/deleteOne/${obj.id}/${obj.productId}/${obj.talle}`).data;
    return dispatch({
        type: DELETE_CART_ONE,
        payload: data
    })
}

export const Join = (id) => async(dispatch) => {
    let emptyCart = JSON.parse(localStorage.getItem('cart'));
    let data= await axios.put(`user/cart/join/${id}`, emptyCart)
    return dispatch({
        type: JOIN,
        payload: data.data

    })
}  

