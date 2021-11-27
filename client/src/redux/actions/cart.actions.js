export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"




/*

Esta usaríamos cuando esté el back del carrito del usuario (y los usuarios gg).
Lo que recibe esta función por parámetro (itemInfo) es un objeto con info del item
y del usuario.

export const addItemToCartBack = (itemInfo) => async (dispatch) => { 
    const { data } = axios.post(`product/cart/:id`, itemInfo)
    return dispatch({
        type: ADD_ITEM_TO_CART_BACK,
        payload: data
    })
}  
*/

export const addItemToCart = (itemInfo) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: itemInfo
    }
} 