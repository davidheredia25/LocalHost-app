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

