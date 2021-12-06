import { 
  SET_PRODUCT,
  SET_TALLE,
  SET_COUNT,
  ADD_ITEM_CART,

  ADD_EMPTY_CART,
  DELETE_CART_ALL,
  

} from "../actions/cart.actions";

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')), // [{id: 1, talle: "S", count: 2}, {id: 1, talle: "M", count: 1}]
  cartProduct: {
    product: null,
    talle: "", // "S"
    count: 1 // 3
  },
  emptyCart: JSON.parse(localStorage.getItem('cart'))
};

export function cartReducer(state = initialState, { type, payload }) {

  switch(type){

    /* case ADD_ITEM_CART:
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
 */
    case ADD_EMPTY_CART:
      let product = []
      if (state.emptyCart) {
        let item = { ...state.cartProduct }
        let filtered = state.emptyCart.filter(x => 
          (x.product._id === state.cartProduct.product._id) 
          && 
          (x.talle === state.cartProduct.talle)
        );
        if (filtered.length === 0) {
          product = [...state.emptyCart, item]
          localStorage.setItem("cart", JSON.stringify(product));
          return {
            ...state,
            emptyCart: JSON.parse(localStorage.getItem('cart')),
            cart: JSON.parse(localStorage.getItem('cart')) 
          }

        }
        if (filtered.length === 1) {
          item = filtered[0];
          item = {
            ...item,
            count: item.count + state.cartProduct.count
          }
          let array = [];
          state.emptyCart.forEach(x => {
            if ((x.product._id !== item.product.id) && (x.talle !== item.talle)) {
              array.push(x)
            }
          })
          array = [...array, item]
          console.log(array)
          localStorage.setItem("cart", JSON.stringify(array));
          return {
            ...state,
            emptyCart: JSON.parse(localStorage.getItem('cart')),
            cart: JSON.parse(localStorage.getItem('cart')) 
          }
        }
      }
      product= [state.cartProduct]
      localStorage.setItem("cart", JSON.stringify(product));
      return {
        ...state,
        emptyCart: JSON.parse(localStorage.getItem('cart')),
        cart: JSON.parse(localStorage.getItem('cart')) 
      }  

      /*let product =[];
      let carritoVacio= JSON.parse(localStorage.getItem('cart'));
      console.log(carritoVacio)
      if(carritoVacio) {
        console.log('marito')
        product = [...carritoVacio, payload ]
        localStorage.setItem("cart", JSON.stringify(product));
       
      }else {
        product = [payload]
        localStorage.setItem("cart", JSON.stringify(product));
      }
      return {
        emptyCart: JSON.parse(localStorage.getItem('cart')),
        cart: JSON.parse(localStorage.getItem('cart'))
      } */
    case ADD_ITEM_CART:
      return {
        emptyCart: product
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
    case DELETE_CART_ALL:
      return {
        ...state, 
        cart: localStorage.clear()
      }

    default:
      return state;
  }
}