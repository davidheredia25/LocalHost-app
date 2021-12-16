import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCTS_DETAILS = "GET_PRODUCTS_DETAILS"
export const SET_PAGE = "SET_PAGE";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_PRODUCTS = "REMOVE_PRODUCTS";


export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
};


export const getProducts = ({ name, brand, category, subcategory, order }) => async (dispatch) => {
    try {
       // const res = await axios.get(`/product?name=${name ? name : ""}`); //&category=${category ? category : ""}
       let res = await axios.get(`/product?name=${name ? name : ""}&brand=${brand ? brand : ""}&category=${category ? category : ""}&type=${subcategory ? subcategory : ""}&order=${order ? order : ""}`)
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
        const detail = await axios.get(`/product/${id}`)
        console.log('detalle',detail)
        return dispatch({
            type: GET_PRODUCTS_DETAILS,
            payload: detail.data
        })
    } catch (error) {
        console.log(error)
        
    }
}

export const removeProduct = () => {
    return {
        type: REMOVE_PRODUCT
    }
}

export const removeProducts = () => {
    return {
        type: REMOVE_PRODUCTS
    }
}
