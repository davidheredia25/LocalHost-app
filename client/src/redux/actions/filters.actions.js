import axios from "axios";
import { GET_PRODUCTS } from "./products.actions";
export const SET_FILTER_BRAND = "SET_FILTER_BRAND";
export const SET_FILTER_CATEGORY = "SET_FILTER_CATEGORY"; 
export const SET_FILTER_SUBCATEGORY = "SET_FILTER_SUBCATEGORY"; 
export const RESET_FILTER = "RESET_FILTER";

export const setFilterBrand = (string) => {
  return{
      type: SET_FILTER_BRAND,
      payload: string
  }  
}

export const setFilterCategory = (string) => {
    return{
        type: SET_FILTER_CATEGORY,
        payload:string
    }  
}

export const setFilterSubcategory = (string) => {
    return{
        type: SET_FILTER_SUBCATEGORY,
        payload: string
    }  
}

export const resetFilter = (property) => {
    return {
        type: RESET_FILTER,
        payload: property
    }
}

export const filterProducts = ({ brand, category, subcategory, name }) => async (dispatch) => {
    const { data } = await axios.get(`/product?name=${name ? name : ""}&brand=${brand ? brand : ""}&category=${category ? category : ""}&type=${subcategory ? subcategory : ""}
    `)
    return dispatch({
        type: GET_PRODUCTS,
        payload: data
    })
}

