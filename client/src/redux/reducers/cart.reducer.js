import { 
  SET_PRODUCT,
  SET_TALLE,
  SET_COUNT,
  ADD_ITEM_CART,
  GET_CART,
  ADD_EMPTY_CART,
  DELETE_CART_ALL,
  GET_EMPTY_CART,
  DELETE_EMPTY_ONE,
  DELETE_CART,
  DELETE_CART_ONE
  
} from "../actions/cart.actions";

const initialState = {
  cart: null, // [{id: 1, talle: "S", count: 2}, {id: 1, talle: "M", count: 1}]
  cartProduct: {
    product: null,
    talle: "", // "S"
    count: 1 // 3
  },
  emptyCart: JSON.parse(localStorage.getItem('cart'))
};

export function cartReducer(state = initialState, { type, payload }) {

  switch(type){

    
    case ADD_EMPTY_CART:
      let item = payload
      let empty = JSON.parse(localStorage.getItem('cart'))
      console.log('empty', empty);
      let array=[item]
      if( !empty ||empty.length === 0 ) { 
        return {
          ...state,
          emptyCart : localStorage.setItem("cart", JSON.stringify(array))
        }
      }else{
        console.log('empty', empty)
        console.log('entro aca 1')
        let filtered = empty.filter(x => (x.product._id === item.product._id) && (x.talle === item.talle));
        console.log('filtered', filtered)
        if(filtered?.length > 0){
          console.log('entro aca 2 ')
          let itemFilter= filtered[0] 
          console.log('itemFilter', itemFilter)
          /* itemFilter= {
            ...itemFilter,
            qty: itemFilter.qty + item.qty
          } */
          /* let newArray = empty.filter(x => (x.product._id !== item.product._id) && (x.talle !== item.talle)); */
          let newArray= [];
          let index = empty.indexOf(itemFilter);
          console.log('empty2', empty)
          console.log('index', index)
          newArray = empty.splice(index, 1)
          console.log('newArray', newArray)
          itemFilter= {
            ...itemFilter,
            qty: itemFilter.qty + item.qty
          }
          
          let definitivo = [...empty, itemFilter]
          return {
            ...state,
            emptyCart: localStorage.setItem("cart", JSON.stringify(definitivo))
          }
        }else {
          console.log('entro aca 4 ')
          let newArray = [...empty, item]
          return{
            ...state,
            emptyCart: localStorage.setItem("cart", JSON.stringify(newArray))
          }
        }
      }

     
      
    case ADD_ITEM_CART:
      console.log('payload', payload)
      return {
        ...state,
        cart: payload
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
        emptyCart: localStorage.clear()
      }
      
    case GET_CART :
      return {
        ...state,
        cart: state.cart
      }
    case GET_EMPTY_CART:
      return {
        ...state,
        emptyCart : state.emptyCart
      }  
    case DELETE_EMPTY_ONE:
      console.log('entro aca bro')
      let carrito = state.emptyCart;
      let filtered = carrito.filter(x => x.product._id  !== payload);
      console.log(filtered)
      localStorage.setItem("cart", JSON.stringify(filtered));
      return {
        ...state, 
        emptyCart: filtered
      }
    case DELETE_CART :
      return {
        ...state,
        cart: payload
      }  
    case DELETE_CART_ONE:
      return {
        ...state,
        cart: payload
      }  


    default:
      return state;
  }
}