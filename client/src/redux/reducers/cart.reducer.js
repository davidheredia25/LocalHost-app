import { 
  SET_PRODUCT,
  SET_TALLE,
  SET_COUNT,
  ADD_ITEM_TO_CART,
} from "../actions/cart.actions";

const initialState = {
  cart: [], // [{id: 1, talle: "S", count: 2}, {id: 1, talle: "M", count: 1}]
  cartProduct: {
    product: null,
    talle: "", // "S"
    count: 1 // 3
  }
};

export function cartReducer(state = initialState, { type, payload }) {

  switch(type){

    case ADD_ITEM_TO_CART:
      if (state.cart.length) {
        let item = { ...state.cartProduct }
        let filtered = state.cart.filter(x => 
          (x.product._id === state.cartProduct.product._id) 
          && 
          (x.talle === state.cartProduct.talle)
        );
        if (filtered.length === 0) {
          return {
            ...state,
            cart: [...state.cart, item]
          }
        }
        if (filtered.length === 1) {
          item = filtered[0];
          item = {
            ...item,
            count: item.count + state.cartProduct.count
          }
          let array = [];
          state.cart.forEach(x => {
            if ((x.product._id !== item.product.id) && (x.talle !== item.talle)) {
              array.push(x)
            }
          })
          array = [...array, item]
          console.log(array)
          return {
            ...state,
            cart: array
          }
        }
      }
      return {
        ...state,
        cart: [state.cartProduct]
      }

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