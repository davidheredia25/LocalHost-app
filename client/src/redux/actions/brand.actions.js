import axios from "axios";

// CONSTANTES
export const GET_BRANDS = "GET_BRANDS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const SET_BRAND_NAME = "SET_BRAND_NAME";
export const SET_BRAND_CATEGORIES = "SET_BRAND_CATEGORIES";
export const SET_BRAND_SUBCATEGORIES = "SET_BRAND_SUBCATEGORIES"; 
export const SET_EXISTENT_BRAND = "SET_EXISTENT_BRAND";
export const SET_NEW_CATEGORY = "SET_NEW_CATEGORY"
export const DELETE_BRAND_CATEGORY = "DELETE_BRAND_CATEGORY"
export const DELETE_BRAND_SUBCATEGORY = "DELETE_BRAND_SUBCATEGORY";
export const GET_BRANDS_LIST = "GET_BRANDS_LIST";

// ---------------- ACCIONES EN EL BACK ---------------- //
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

export const createBrand = (object) => async (dispatch) => {
    try {
        await axios.post(`/brand/create`, object)    
        return dispatch(getBrands())
    } 
    catch (error) {
        console.log(error)
    }
}

export const editBrand = (object) => async (dispatch) => {
    await axios.put(`/brand/update`, object)
    return dispatch(getBrands())
}



export const getCategories = () => async dispatch => {
    const { data } = await axios.get("/category")
    return dispatch({
        type: GET_CATEGORIES,
        payload: data
    })
}
export const getSubcategories = () => async dispatch => {
    const { data } = await axios.get("/types")
    return dispatch({
        type: GET_SUBCATEGORIES,
        payload: data
    })
}

export const deleteBrand = (string) => async (dispatch) => {
    await axios.delete(`/brand/delete`, { data: { brand: string } })
    return dispatch(getBrands())
}

export const deleteCategory = (object) => async (dispatch) => {
    await axios.delete(`/category/delete`, { data: object })
    dispatch(getCategories())
    return dispatch(getBrands())
}

export const deleteSubcategory = (object) => async dispatch => {
    await axios.delete("/types/delete", { data: object })
    dispatch(getSubcategories())
    return dispatch(getBrands())
}

export const getBrandsList = () => async (dispatch) => {
    const { data } = await axios.get(`/brand/list`)
    return dispatch({
        type: GET_BRANDS_LIST,
        payload: data
    })
}
// ------------------------------------------------ //

// ---------------- SETERS EN EL REDUCER ---------------- //
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
export const setBrandSubcategories = (object) => { 
    return {
        type: SET_BRAND_SUBCATEGORIES,
        payload: object
    }
}

export const setExistentBrand = (brand) => {
    return {
        type: SET_EXISTENT_BRAND,
        payload: brand
    }
}

export const setNewCategory = (cat) => {
    return {
        type: SET_NEW_CATEGORY,
        payload: cat
    }
}
// ------------------------------------------------ //

// ---------------- DELETES EN EL REDUCER ---------------- //
export const deleteBrandCategory = (category) => {
    return {
        type: DELETE_BRAND_CATEGORY,
        payload: category
    }
}
export const deleteBrandSubcategory = (categoryObj) => {
    return {
        type: DELETE_BRAND_SUBCATEGORY,
        payload: categoryObj
    }
}