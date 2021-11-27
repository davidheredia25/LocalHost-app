import { 
  SET_PRODUCT,
  SET_TALLE,
  SET_COUNT,
  ADD_ITEM_TO_CART,
} from "../actions/cart.actions";

const initialState = {
  cart: [],
  cartProduct: {
    product: null,
    talle: "",
    count: 1
  }
};

export function cartReducer(state = initialState, { type, payload }) {
  switch(type){
    case ADD_ITEM_TO_CART:
      return state
    case SET_PRODUCT:
      return {
        ...state,
        cartProduct: {
          ...state.cartProduct,
          product: payload
        }
      }
    case SET_TALLE:
      return {
        ...state,
        cartProduct: {
          ...state.cartProduct,
          talle: payload
        }
      }
    case SET_COUNT:
      return {
        ...state,
        cartProduct: {
          ...state.cartProduct,
          count: payload
        }
      }
    default:
      return state;
  }
}

/* case ADD_ITEM_TO_CART:
      if(state.cart.length) {
        let filtered = state.cart.filter(x => x.product._id === payload.product._id)
        if (filtered.length > 1) {
          filtered = filtered.filter(x => x.talle === payload.talle)
          if (filtered.length) {
            let item = filtered[0]
             item = {
              ...item,
              count: item.count + payload.count
            }
            return {
              ...state,
              cart : [...state.cart, item]
            }
          }
          else {
            return {
              ...state,
              cart: [...state.cart, payload]
            }
          }
        }
        if (filtered.length === 1) {
          filtered = {
            ...filtered,
            count: filtered[0].count + payload.count
          }
          return {
            ...state,
            cart : [...state.cart, filtered]
          }
        }
        return {
          ...state,
          cart: [...state.cart, payload]
        }
      }
      else {
        return {
          ...state,
          cart: [payload]
        }
      }
      */