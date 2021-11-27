import axios from "axios";

export const SET_FILTER_BRAND = "SET_FILTER_BRAND" 
export const SET_FILTER_CATEGORY = "SET_FILTER_CATEGORY" 
export const SET_FILTER_SUBCATEGOTY = "SET_FILTER_SUBCATEGORY" 

export const setFilterBrand = (string) => {
  return{
      type: SET_FILTER_BRAND,
      payload: string
  }  
}

export const setFilterCategory = (string) => {
    return{
        type: SET_FILTER_BRAND,
        payload:string
    }  
}

export const setFilterSubCategory = (string) => {
    return{
        type: SET_FILTER_BRAND,
        payload: string
    }  
}

export const filterProducts = ({ brand, category, subcategory }) => async (dispatch) => {
    const { data } = axios.get(`/products/filter
        ?brand=${brand ? brand : ""}
        &category=${category ? category : ""}
        &subcategory=${subcategory ? subcategory : ""}
    `)
    return dispatch({
        type: GET_PRODUCTS,
        payload: data
    })
}

