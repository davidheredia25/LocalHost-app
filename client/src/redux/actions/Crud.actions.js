import axios from "axios";
import { getProducts } from "./products.actions.js";


export const productCreate = (form) => async (dispatch) => {
    try {
        await axios.post(`/product/create`, form)
        return dispatch(getProducts({}))
    } catch (error) {
        console.log(error)
    }
}


export const productDelete = (id) => async (dispatch) => {
    try {
          await axios.delete(`product/delete/${id}`)
          return dispatch(getProducts({}))
    } catch (error) {
        console.log(error)
    }
}


export const productEdit = ({id, product}) => async (dispatch) => {
    try {
       await axios.put(`product/edit/${id}`, product)
       return dispatch(getProducts({}))
    } catch (error) {
        console.log(error)
    }
}