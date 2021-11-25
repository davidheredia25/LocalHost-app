import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCTS_DETAILS = "GET_PRODUCTS_DETAILS"



export const getProducts = () => async (dispatch) => {
    try {
       // const res = await axios.get(`/product?name=${name ? name : ""}`); //&category=${category ? category : ""}
       let res= await axios.get('/product')
        return dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};


export const getProductsDetails = (id) => async (dispatch) => {
    try {
        const detail = await axios.get(`products/${id}`)
        return dispatch({
            type: GET_PRODUCTS_DETAILS,
            payload: detail.data
        })
    } catch (error) {
        console.log(error)
        
    }
}