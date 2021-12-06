import { 
    GET_FAVORITES,
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from "../actions/favorite.actions";
  
  const initialState = {

    favorites: JSON.parse(localStorage.getItem('favorites')) 
    }
  
  export function favoriteReducer(state = initialState, { type, payload }) {
  
    switch(type) {
        case GET_FAVORITES:
          return {
            ...state,
            favorites: payload
          }
        case ADD_FAVORITE:

          if(state.favorites){
          let array= [];
          array = [...state.favorites, payload]
          localStorage.setItem("favorites", JSON.stringify(array));
          }else {
            let array= [payload]
            localStorage.setItem("favorites", JSON.stringify(array));
          }
          return {
            ...state,
            favorites: JSON.parse(localStorage.getItem('favorites')) 
          }
        case REMOVE_FAVORITE:
          let local= JSON.parse(localStorage.getItem('favorites')) ;
          let filtered = local.filter(x => x._id !== payload);
          localStorage.setItem("favorites", JSON.stringify(filtered));
          return {
            ...state,
            favorites: JSON.parse(localStorage.getItem('favorites')) 

          }
        default:
          return state;
    }
}