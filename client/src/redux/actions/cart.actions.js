export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_TALLE = "SET_TALLE";
export const SET_COUNT = "SET_COUNT";

/*
Esta usaríamos cuando esté el back del carrito del usuario (y los usuarios gg).
Lo que recibe esta función por parámetro (cartProduct) es un objeto con info del item
y del usuario.

export const addItemToCartBack = (cartProduct) => async (dispatch) => { 
    const { data } = axios.post(`product/cart/:id`, cartProduct)
    return dispatch({
        type: ADD_ITEM_TO_CART_BACK,
        payload: data
    })
}  
*/

export const addItemToCart = (cartProduct) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: cartProduct
    }
} 

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