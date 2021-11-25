import axios from "axios";


//CONSTANTES
PRODUCT_CREATE = "PRODUCT_CREATE"

export const ProductCreate = () => async (dispatch) => {
    try {
        const res = await axios.post()
        return dispatch({
            type: PRODUCT_CREATE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}