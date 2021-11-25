import axios from "axios";

// CONSTANTES
export const GET_BRANDS = "GET_BRANDS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const SET_BRAND_NAME = "SET_BRAND_NAME";
export const SET_BRAND_CATEGORIES = "SET_BRAND_CATEGORIES";
export const SET_BRAND_SUBCATEGORIES = "SET_BRAND_SUBCATEGORIES"; 

// ACTION CREATORS
// export const getBrands = () => async (dispatch) => {
//    const { data } = axios.get(`/products`)
// }

export const setBrandName = (name) => {
    return {
        type: SET_BRAND_NAME,
        payload: name
    }
}

export const setBrandCategories = (category) => {
    return {
        type: SET_BRAND_CATEGORIES,
        payload: category
    }
}