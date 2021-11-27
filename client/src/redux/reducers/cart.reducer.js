import { 
  ADD_ITEM_TO_CART,
} from "../actions/cart.actions";

const initialState = {
  cart: []
};



export function cartReducer(state = initialState, { type, payload }) {
  switch(type){
    case ADD_ITEM_TO_CART:
      if(state.cart.length) {
        let itemsFound = state.cart.filter(x => x.product._id === payload.product._id)
        
        return {
          ...state,
          cart: [...state.cart, payload]
        }
      }
     
    default:
      return state;
  }
}