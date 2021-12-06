import { 
  GET_PRODUCTS, 
  GET_PRODUCTS_DETAILS,
  SET_PAGE,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS
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
        ...state,
        product: action.payload
      }
      case SET_PAGE:
        return {
            ...state,
            page: action.payload
        };
      case REMOVE_PRODUCT:
        return {
          ...state,
          product: null
        }
      case REMOVE_PRODUCTS:
        return {
          ...state,
          products: []
        }
    default:
    return state;
  }
}