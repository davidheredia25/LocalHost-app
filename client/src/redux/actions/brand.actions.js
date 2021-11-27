import axios from "axios";

// CONSTANTES
export const GET_BRANDS = "GET_BRANDS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const SET_BRAND_NAME = "SET_BRAND_NAME";
export const SET_BRAND_CATEGORIES = "SET_BRAND_CATEGORIES";
export const SET_BRAND_SUBCATEGORIES = "SET_BRAND_SUBCATEGORIES"; 
export const SET_EXISTENT_BRAND = "SET_EXISTENT_BRAND";
export const SAVE_BRAND = "SAVE_BRAND";

// ACTION CREATORS
export const getBrands = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/brand`)
        return dispatch({
            type: GET_BRANDS,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const setBrandName = (brand) => {
    return {
        type: SET_BRAND_NAME,
        payload: brand
    }
}

export const setBrandCategories = (category) => {
    return {
        type: SET_BRAND_CATEGORIES,
        payload: category
    }
}

export const setBrandSubcategories = (object) => { // object = { category: "Indumentaria", subcategory: "Remeras" } 
    return {
        type: SET_BRAND_SUBCATEGORIES,
        payload: object
    }
}

export const saveBrand = (object) => async (dispatch) => {
    try {
        const res = await axios.post(`/brand/create`, object)    
        return dispatch(getBrands())
    } 
    catch (error) {
        console.log(error)
    }

} 

export const setExistentBrand = (brand) => {
    return {
        type: SET_EXISTENT_BRAND,
        payload: brand
    }
}

export const getCategories = () => async dispatch => {
    const { data } = await axios.get("/category")
    return dispatch({
        type: GET_CATEGORIES,
        payload: data
    })
}

export const getSubCategories = () => async dispatch => {
    const { data } = await axios.get("/types")
    return dispatch({
        type: GET_SUBCATEGORIES,
        payload: data
    })
}
