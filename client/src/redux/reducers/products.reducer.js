import { GET_PRODUCTS, GET_PRODUCTS_DETAILS } from "../actions/products.actions";

const initialState = {
  products: [],
  product: null
};

export function productsReducer(state = initialState, action) {
  switch(action.type){
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case GET_PRODUCTS_DETAILS:
      return {
        product: action.payload
      }

    default:
    return state;
  }
}