import axios from "axios";

export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const getFavorites = () => async (dispatch) => {
    const { data } = await axios.get(`/user/favorites`)
    return dispatch({
        type: GET_FAVORITES,
        payload: data
    })
}

export const addFavorite = (product) => {
    return {
        type: ADD_FAVORITE,
        payload: product
    }
}

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}