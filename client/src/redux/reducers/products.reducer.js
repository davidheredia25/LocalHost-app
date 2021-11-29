import { 
  GET_PRODUCTS, 
  GET_PRODUCTS_DETAILS,
  SET_PAGE
  } from "../actions/products.actions";

const initialState = {
  products: [],
  product: null,
  page: 1,
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
      case SET_PAGE:
        return {
            ...state,
            page: action.payload
        };

    default:
    return state;
  }
}