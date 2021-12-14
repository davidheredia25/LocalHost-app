import { 
  GET_PRODUCTS, 
  GET_PRODUCTS_DETAILS,
  SET_PAGE,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
  ORDER_RATING,
  ORDER_PRICE
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
      case REMOVE_PRODUCTS:
        return {
          ...state,
          products: []
        }
        /* case ORDER_RATING:
          let sortedRating = action.payload === "maxR" ? 
          state.products.sort(function(a, b ) {
            if(a.rating > b.rating){
              return 1;
            }
            if(b.rating > a.rating){
              return -1
            }
            return 0 
          }):
          state.products.sort(function(a,b) {
            if(a.rating > b.rating){
              return -1
            }
            if(b.rating > a.rating){
              return 1;
            }
            return 0
          })
          return{
              ...state,
              products: sortedRating
          } */
      case ORDER_PRICE:
        let sortedPrice = action.payload === "maxP" ? 
          state.products.sort(function(a, b ) {
            if(a.price > b.price){
              return -1;
            }
            if(b.price > a.price){
              return 1
            }
            return 0 
          }):
          state.products.sort(function(a,b) {
            if(a.price > b.price){
              return 1
            }
            if(b.price > a.price){
              return -1;
            }
            return 0
          })
          return{
              ...state,
              products: sortedPrice
          }
    default:
    return state;
  }
}