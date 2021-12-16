import { 
  GET_PRODUCTS, 
  GET_PRODUCTS_DETAILS,
  SET_PAGE,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
  } from "../actions/products.actions";

import { sliceArray } from "./utils/sliceArray";

  const initialState = {
    products: [], // contiene sólo los productos de una página
    allProducts: [], // contiene todos los productos
  products: [],
  product: null,
  page: 1,
};

export function productsReducer(state = initialState, action) {
  switch(action.type){
    case GET_PRODUCTS:
      let allProducts = action.payload;
      let products = action.payload;
      products = sliceArray(state.page, products);  

    return {
        ...state,
        products: products,
        allProducts: allProducts
      }
      case GET_PRODUCTS_DETAILS:
        console.log('payload',action.payload)
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
        default:
        return state;
  }
}